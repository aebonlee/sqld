import SEOHead from '../components/SEOHead';

export default function ExamRound3() {
  return (
    <div className="lesson-page">
      <SEOHead title="3회 모의고사 - SQLD Study" description="SQLD 3회 모의고사 (준비 중)" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>3회 모의고사</h1>
        <p className="hero-subtitle">20문항 · 100점 만점 · 60점 합격</p>
      </section>

      <article className="content-card" data-aos="fade-up" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📝</div>
        <h2>준비 중입니다</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>
          3회 모의고사는 현재 문제를 준비하고 있습니다.<br/>
          1회, 2회 모의고사를 먼저 풀어보세요!
        </p>
      </article>
    </div>
  );
}
