import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function StampGrid({ items, type }) {
  const { isLessonCompleted, getExamResult } = useProgress();
  const { language } = useLanguage();

  if (!items || items.length === 0) return null;

  return (
    <div className="stamp-grid">
      {items.map((item, idx) => {
        const completed = type === 'exam'
          ? !!getExamResult(item.id)
          : isLessonCompleted(item.id);
        const examResult = type === 'exam' ? getExamResult(item.id) : null;

        return (
          <Link
            key={item.id}
            to={item.path || '#'}
            className={`stamp-cell ${completed ? 'completed' : ''}`}
          >
            <span className="stamp-icon">
              {completed ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--border-medium)' }}>
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                </svg>
              )}
            </span>
            <span className="stamp-number">#{String(idx + 1).padStart(2, '0')}</span>
            <span className="stamp-title">{item.title}</span>
            {examResult && (
              <span className="stamp-community-count">{examResult.score}/{examResult.total}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
