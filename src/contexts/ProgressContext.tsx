import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';

const ProgressContext = createContext<any>(null);

const LESSON_KEY = 'sqld-study-lessons';
const EXAM_KEY = 'sqld-study-exams';

function loadLocalLessons() {
  try {
    const saved = localStorage.getItem(LESSON_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveLocalLessons(lessons) {
  localStorage.setItem(LESSON_KEY, JSON.stringify(lessons));
}

function loadLocalExams() {
  try {
    const saved = localStorage.getItem(EXAM_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveLocalExams(exams) {
  localStorage.setItem(EXAM_KEY, JSON.stringify(exams));
}

export function ProgressProvider({ children }: any) {
  const { user, isAuthenticated } = useAuth();
  const [completedLessons, setCompletedLessons] = useState(loadLocalLessons);
  const [examResults, setExamResults] = useState(loadLocalExams);
  const [syncing, setSyncing] = useState(false);
  const hasMerged = useRef(false);

  useEffect(() => {
    saveLocalLessons(completedLessons);
  }, [completedLessons]);

  useEffect(() => {
    saveLocalExams(examResults);
  }, [examResults]);

  useEffect(() => {
    if (!isAuthenticated || !supabase || hasMerged.current) return;

    async function mergeProgress() {
      setSyncing(true);
      try {
        const { data: cloudLessons } = await supabase
          .from('user_progress')
          .select('problem_id')
          .eq('user_id', user.id);

        const cloudIds = (cloudLessons || []).map(r => r.problem_id);
        const localIds = loadLocalLessons();
        const mergedLessons = [...new Set([...localIds, ...cloudIds])];

        const toUpload = mergedLessons.filter(id => !cloudIds.includes(id));
        if (toUpload.length > 0) {
          await supabase.from('user_progress').upsert(
            toUpload.map(id => ({
              user_id: user.id,
              problem_id: id,
              completed_at: new Date().toISOString()
            }))
          );
        }

        setCompletedLessons(mergedLessons);
        saveLocalLessons(mergedLessons);

        const { data: cloudExams } = await supabase
          .from('exam_results')
          .select('exam_id, score, total, completed_at')
          .eq('user_id', user.id);

        if (cloudExams && cloudExams.length > 0) {
          const localExams = loadLocalExams();
          const merged = { ...localExams };
          cloudExams.forEach(r => {
            if (!merged[r.exam_id] || r.score > merged[r.exam_id].score) {
              merged[r.exam_id] = { score: r.score, total: r.total, date: r.completed_at };
            }
          });
          setExamResults(merged);
          saveLocalExams(merged);
        }

        hasMerged.current = true;
      } catch (err) {
        console.warn('Progress merge failed:', err);
      } finally {
        setSyncing(false);
      }
    }

    mergeProgress();
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!isAuthenticated) {
      hasMerged.current = false;
    }
  }, [isAuthenticated]);

  const toggleLesson = useCallback((lessonId) => {
    setCompletedLessons(prev => {
      const isRemoving = prev.includes(lessonId);
      const next = isRemoving
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId];

      if (supabase && isAuthenticated && user) {
        if (isRemoving) {
          supabase
            .from('user_progress')
            .delete()
            .eq('user_id', user.id)
            .eq('problem_id', lessonId)
            .then();
        } else {
          supabase
            .from('user_progress')
            .upsert({
              user_id: user.id,
              problem_id: lessonId,
              completed_at: new Date().toISOString()
            })
            .then();
        }
      }

      return next;
    });
  }, [isAuthenticated, user]);

  const isLessonCompleted = useCallback((lessonId) => {
    return completedLessons.includes(lessonId);
  }, [completedLessons]);

  const getCompletedCount = useCallback((lessonIds) => {
    if (!lessonIds) return completedLessons.length;
    return lessonIds.filter(id => completedLessons.includes(id)).length;
  }, [completedLessons]);

  const recordExamResult = useCallback((examId, score, total) => {
    setExamResults(prev => {
      const existing = prev[examId];
      if (existing && existing.score >= score) return prev;

      const next = {
        ...prev,
        [examId]: { score, total, date: new Date().toISOString() }
      };

      if (supabase && isAuthenticated && user) {
        supabase
          .from('exam_results')
          .upsert({
            user_id: user.id,
            exam_id: examId,
            score,
            total,
            completed_at: new Date().toISOString()
          })
          .then();
      }

      return next;
    });
  }, [isAuthenticated, user]);

  const getExamResult = useCallback((examId) => {
    return examResults[examId] || null;
  }, [examResults]);

  const resetProgress = useCallback(() => {
    setCompletedLessons([]);
    setExamResults({});
    if (supabase && isAuthenticated && user) {
      supabase
        .from('user_progress')
        .delete()
        .eq('user_id', user.id)
        .then();
      supabase
        .from('exam_results')
        .delete()
        .eq('user_id', user.id)
        .then();
    }
  }, [isAuthenticated, user]);

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      examResults,
      toggleLesson,
      isLessonCompleted,
      getCompletedCount,
      recordExamResult,
      getExamResult,
      resetProgress,
      syncing
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
