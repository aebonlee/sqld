import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { MENUS } from '../../config/site';

const Footer = () => {
  const { t } = useLanguage();

  const handleFamilySite = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank', 'noopener');
      e.target.value = '';
    }
  };

  const familySites = [
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
    { name: 'Linux Study', url: 'https://linux-study.dreamitbiz.com' },
    { name: 'DB Study', url: 'https://db-study.dreamitbiz.com' },
    { name: 'KoreaTech', url: 'https://koreatech.dreamitbiz.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="footer-logo-highlight">SQLD</span> Study
            </h3>
            <p>{t('footer.description')}</p>
            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>Family Site</option>
                {familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-links">
              {MENUS.map((item, i) => (
                <li key={i}>
                  <Link to={item.children ? item.children[0].path : item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-list">
              <a href="mailto:aebon@dreamitbiz.com" className="footer-contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>aebon@dreamitbiz.com</span>
              </a>
              <a href="tel:010-3700-0629" className="footer-contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>010-3700-0629</span>
              </a>
              <div className="footer-contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>평일 09:00 ~ 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 드림아이티비즈(DreamIT Biz). All rights reserved.</p>
          <p className="footer-meta">
            Designed by Ph.D Aebon Lee
            <span className="footer-divider">|</span>
            대표이사: 이애본
            <span className="footer-divider">|</span>
            사업자등록번호: 601-45-20154
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
