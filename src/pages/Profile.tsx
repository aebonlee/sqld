import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { BADGES, getEarnedBadges } from '../config/badges';
import { LESSONS, EXAMS, getLessonsByCategory } from '../config/studyItems';
import BadgeCard from '../components/BadgeCard';
import Certificate from '../components/Certificate';
import StampGrid from '../components/StampGrid';

const CATEGORIES = [
  { id: 'intro', label: '시험 소개' },
  { id: 'subject1', label: '1과목' },
  { id: 'subject2', label: '2과목' },
  { id: 'sqlref', label: 'SQL 레퍼런스' },
];

export default function Profile() {
  const { user, profile, isAuthenticated, loading, signOut, updateDisplayName } = useAuth();
  const { t } = useLanguage();
  const { completedLessons, examResults, syncing, getCompletedCount } = useProgress();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');

  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const earnedBadges = getEarnedBadges(completedLessons);
  const allBadgesWithStatus = BADGES.map(b => ({
    ...b,
    earned: earnedBadges.some(e => e.id === b.id)
  }));
  const earnedCount = earnedBadges.length;
  const displayName = profile?.display_name || user?.user_metadata?.display_name || user?.email?.split('@')[0] || '';

  const hasPassedExam = Object.values(examResults).some((r: any) => r.score / r.total >= 0.6);
  const bestExamScore = Object.values(examResults).length > 0
    ? Math.max(...Object.values(examResults).map((r: any) => Math.round(r.score / r.total * 100)))
    : null;

  const examCount = Object.keys(examResults).length;
  const totalLessons = LESSONS.length;
  const completedCount = completedLessons.length;
  const remainingCount = totalLessons - completedCount;
  const completionRate = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const handleSaveName = async () => {
    if (nameInput.trim()) {
      await updateDisplayName(nameInput.trim());
    }
    setEditingName(false);
  };

  const examStampItems = EXAMS.map(e => ({
    ...e,
    path: `/exam/${e.id.replace('exam-', '')}`,
  }));

  return (
    <div className="profile-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('profile.title')}</h1>
        </div>
      </section>

      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt="" className="profile-avatar-img" />
            ) : (
              <div className="profile-avatar-placeholder">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              {editingName ? (
                <div className="profile-name-edit">
                  <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} autoFocus />
                  <button onClick={handleSaveName} className="profile-name-save">저장</button>
                  <button onClick={() => setEditingName(false)} className="profile-name-cancel">취소</button>
                </div>
              ) : (
                <>
                  <h2 className="profile-display-name">{displayName}</h2>
                  <button className="profile-edit-btn" onClick={() => { setNameInput(displayName); setEditingName(true); }}>
                    {t('profile.change_name')}
                  </button>
                </>
              )}
            </div>
            <p className="profile-email">{user?.email}</p>
            <div className="profile-stats">
              <span className="profile-stat">{t('profile.completed_lessons')}: <strong>{completedCount}/{totalLessons}</strong></span>
              <span className="profile-stat">{t('profile.exam_results')}: <strong>{examCount}/{EXAMS.length}</strong></span>
              <span className="profile-stat">{t('profile.badges')}: <strong>{earnedCount}/{BADGES.length}</strong></span>
              {syncing && <span className="profile-syncing">동기화 중...</span>}
            </div>
          </div>
          <button className="profile-logout-btn" onClick={signOut}>
            {t('nav.logout')}
          </button>
        </div>

        <div className="profile-section">
          <h3 className="profile-section-title">{t('profile.badges')}</h3>
          <div className="badges-grid">
            {allBadgesWithStatus.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3 className="profile-section-title">{t('profile.certificate')}</h3>
          {hasPassedExam ? (
            <Certificate
              displayName={displayName}
              completedLessons={completedCount}
              totalLessons={totalLessons}
              bestExamScore={bestExamScore}
            />
          ) : (
            <div className="certificate-locked">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <p>모의고사에서 60% 이상 득점 시 수료증을 발급받을 수 있습니다.</p>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h3 className="profile-section-title">{t('profile.stats')}</h3>

          <div className="progress-stats">
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="progress-stat-value">{completedCount}</div>
              <div className="progress-stat-label">완료한 학습</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="progress-stat-value">{remainingCount}</div>
              <div className="progress-stat-label">남은 학습</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <div className="progress-stat-value">{completionRate}%</div>
              <div className="progress-stat-label">진행률</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <div className="progress-stat-value">{examCount}/{EXAMS.length}</div>
              <div className="progress-stat-label">모의고사</div>
            </div>
          </div>

          <div className="progress-bar-section">
            <div className="progress-bar-header">
              <span className="progress-bar-title">전체 진행률</span>
              <span className="progress-bar-percent">{completionRate}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${completionRate}%` }} />
            </div>
          </div>

          <div className="category-progress">
            {CATEGORIES.map(cat => {
              const catLessons = getLessonsByCategory(cat.id);
              const catCompleted = getCompletedCount(catLessons.map(l => l.id));
              const catTotal = catLessons.length;
              const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

              return (
                <div key={cat.id} className="category-progress-card">
                  <div className="category-progress-header">
                    <span className="category-progress-name">{cat.label}</span>
                    <span className="category-progress-count">{catCompleted}/{catTotal}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${catPercent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {CATEGORIES.map(cat => {
            const catLessons = getLessonsByCategory(cat.id);
            if (catLessons.length === 0) return null;
            return (
              <div key={cat.id} className="stamp-section">
                <h3 className="stamp-section-title">{cat.label} 스탬프</h3>
                <StampGrid items={catLessons} type="lesson" />
              </div>
            );
          })}

          <div className="stamp-section">
            <h3 className="stamp-section-title">모의고사 스탬프</h3>
            <StampGrid items={examStampItems} type="exam" />
          </div>
        </div>
      </div>
    </div>
  );
}
