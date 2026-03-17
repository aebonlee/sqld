import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const subject1Curriculum = [
    { title: '과목 개요', desc: '데이터 모델링의 이해 과목 구성과 출제 비중 안내', path: '/subject1/overview', icon: '📋' },
    { title: '데이터 모델링의 이해', desc: '데이터 모델의 이해, 엔터티, 속성, 관계, 식별자', path: '/subject1/ch1', icon: '🗃️' },
    { title: '데이터 모델과 SQL', desc: '정규화, 관계와 조인, 모델이 성능에 미치는 영향', path: '/subject1/ch2', icon: '🔗' },
  ];

  const subject2Curriculum = [
    { title: '과목 개요', desc: 'SQL 기본 및 활용 과목 구성과 출제 비중 안내', path: '/subject2/overview', icon: '📋' },
    { title: 'SQL 기본', desc: 'DDL, DML, TCL, WHERE 절, 함수, GROUP BY, ORDER BY', path: '/subject2/ch1', icon: '💻' },
    { title: 'SQL 활용', desc: '표준 조인, 서브쿼리, 그룹 함수, 윈도우 함수, 계층형 질의', path: '/subject2/ch2', icon: '⚙️' },
    { title: '관리 구문', desc: 'DML, TCL, DDL 심화, DCL', path: '/subject2/ch3', icon: '🔧' },
  ];

  const sqlRefCards = [
    { title: 'DDL', desc: 'CREATE, ALTER, DROP, RENAME, TRUNCATE', path: '/sqlref/ddl', icon: '🏗️' },
    { title: 'DML', desc: 'SELECT, INSERT, UPDATE, DELETE, MERGE', path: '/sqlref/dml', icon: '📝' },
    { title: '함수', desc: '문자, 숫자, 날짜, 변환, NULL 관련 함수', path: '/sqlref/functions', icon: '🔢' },
    { title: 'JOIN', desc: 'INNER, OUTER, CROSS, NATURAL, SELF JOIN', path: '/sqlref/join', icon: '🔗' },
    { title: '서브쿼리', desc: '스칼라, 인라인뷰, 상관, EXISTS, IN', path: '/sqlref/subquery', icon: '🔍' },
  ];

  return (
    <>
      <SEOHead
        title="SQLD Study - SQL 개발자 자격증 학습"
        description="SQLD 자격증 취득을 위한 체계적인 학습 플랫폼"
      />

      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              SQLD <span className="hero-highlight">Master</span>
            </h1>
            <p className="hero-description">{t('home.hero_subtitle')}</p>
            <div className="hero-actions">
              <Link to="/subject1/overview" className="btn btn-primary">
                {t('home.start_learning')}
              </Link>
              <Link to="/sqlref/ddl" className="btn btn-secondary">
                SQL 레퍼런스
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">SQLD란?</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)', textAlign: 'center' }}>
              SQLD(SQL Developer)는 한국데이터산업진흥원(K-data)에서 시행하는 국가공인 자격증으로,
              데이터베이스와 SQL에 대한 전문 지식을 검증합니다.
              총 2과목(데이터 모델링의 이해, SQL 기본 및 활용)으로 구성되며,
              50문항을 90분 내에 풀어 60% 이상 득점 시 합격합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t('home.subject1_title')}</h2>
            <p className="section-subtitle">{t('home.subject1_desc')}</p>
          </div>
          <div className="home-curriculum-grid">
            {subject1Curriculum.map((item, i) => (
              <Link to={item.path} key={i} className="home-curriculum-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-curriculum-icon">{item.icon}</span>
                <h3 className="home-curriculum-title">{item.title}</h3>
                <p className="home-curriculum-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t('home.subject2_title')}</h2>
            <p className="section-subtitle">{t('home.subject2_desc')}</p>
          </div>
          <div className="home-curriculum-grid">
            {subject2Curriculum.map((item, i) => (
              <Link to={item.path} key={i} className="home-curriculum-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-curriculum-icon">{item.icon}</span>
                <h3 className="home-curriculum-title">{item.title}</h3>
                <p className="home-curriculum-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t('home.sqlref_title')}</h2>
            <p className="section-subtitle">{t('home.sqlref_desc')}</p>
          </div>
          <div className="home-commands-grid">
            {sqlRefCards.map((item, i) => (
              <Link to={item.path} key={i} className="home-command-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-command-icon">{item.icon}</span>
                <h3 className="home-command-title">{item.title}</h3>
                <p className="home-command-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 className="section-title">{t('home.exam_title')}</h2>
          <p className="section-subtitle mb-4">{t('home.exam_desc')}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/exam/round1" className="btn btn-primary">1회 모의고사</Link>
            <Link to="/exam/round2" className="btn btn-secondary">2회 모의고사</Link>
            <Link to="/exam/round3" className="btn btn-primary">3회 모의고사</Link>
            <Link to="/exam/round4" className="btn btn-secondary">4회 모의고사</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
