import { useLanguage } from '../contexts/LanguageContext';

export default function BadgeCard({ badge }: any) {
  const { t } = useLanguage();
  return (
    <div className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
      {badge.earned && <div className="badge-check">&#10003;</div>}
      <div
        className="badge-icon"
        style={{ color: badge.earned ? badge.color : undefined, fontSize: '32px' }}
      >
        <i className={badge.icon}></i>
      </div>
      <h4 className="badge-title">{badge.title}</h4>
      <p className="badge-desc">{badge.description}</p>
      <span className={`badge-status ${badge.earned ? 'earned' : 'locked'}`}>
        {badge.earned ? t('profile.badge_earned') : t('profile.badge_locked')}
      </span>
    </div>
  );
}
