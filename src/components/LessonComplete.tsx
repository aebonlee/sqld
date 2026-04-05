import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function LessonComplete({ lessonId }: any) {
  const { isLessonCompleted, toggleLesson } = useProgress();
  const { t } = useLanguage();
  const completed = isLessonCompleted(lessonId);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '32px 0',
      borderTop: '1px solid var(--border-light)',
      marginTop: '40px'
    }}>
      <button
        onClick={() => toggleLesson(lessonId)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: '600',
          border: '2px solid',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          borderColor: completed ? '#22c55e' : 'var(--primary-blue)',
          background: completed ? 'rgba(34, 197, 94, 0.1)' : 'var(--primary-blue)',
          color: completed ? '#22c55e' : '#fff',
        }}
      >
        {completed ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {t('lesson.completed')}
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="4"/>
            </svg>
            {t('lesson.complete')}
          </>
        )}
      </button>
    </div>
  );
}
