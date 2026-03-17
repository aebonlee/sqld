import SEOHead from '../components/SEOHead';
import SqlPlayground from '../components/SqlPlayground';
import testdataDatasets from '../testdata/index';
import testDatasets from '../test/index';

const allDatasets = [...testdataDatasets, ...testDatasets];

export default function Playground() {
  return (
    <div className="lesson-page">
      <SEOHead
        title="SQL Playground - SQLD Study"
        description="브라우저에서 직접 SQL을 작성하고 실행 결과를 확인하세요"
      />

      <section className="hero-compact" data-aos="fade-up">
        <h1>SQL Playground</h1>
        <p className="hero-subtitle">브라우저에서 직접 SQL을 작성하고 실행 결과를 즉시 확인하세요</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SqlPlayground datasets={allDatasets} />
      </article>
    </div>
  );
}
