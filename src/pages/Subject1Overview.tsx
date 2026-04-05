import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject1Overview() {
  return (
    <div className="lesson-page">
      <SEOHead title="1과목 개요 - SQLD Study" description="SQLD 1과목 데이터 모델링의 이해 개요" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>1과목: 데이터 모델링의 이해</h1>
        <p className="hero-subtitle">10문항 · 20점 배점 · 과락 기준 8점</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>과목 개요</h2>
        <p>
          1과목은 <strong>데이터 모델링</strong>에 대한 이론적 이해를 평가합니다.
          데이터베이스 설계의 기초가 되는 개념들을 학습하며, 총 10문항이 출제됩니다.
        </p>

        <h2>출제 범위</h2>
        <table>
          <thead>
            <tr><th>장</th><th>내용</th><th>주요 토픽</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1장</strong></td>
              <td>데이터 모델링의 이해</td>
              <td>엔터티, 속성, 관계, 식별자</td>
            </tr>
            <tr>
              <td><strong>2장</strong></td>
              <td>데이터 모델과 SQL</td>
              <td>정규화, 반정규화, 관계와 조인</td>
            </tr>
          </tbody>
        </table>

        <h2>학습 목차</h2>
        <div className="chapter-grid">
          <Link to="/subject1/ch1" className="chapter-card">
            <h3>1장: 데이터 모델링의 이해</h3>
            <p>엔터티, 속성, 관계, 식별자의 개념과 특징을 학습합니다.</p>
          </Link>
          <Link to="/subject1/ch2" className="chapter-card">
            <h3>2장: 데이터 모델과 SQL</h3>
            <p>정규화, 반정규화의 개념과 성능 최적화를 학습합니다.</p>
          </Link>
        </div>

        <h2>학습 전략</h2>
        <ul>
          <li><strong>암기 위주</strong>: 개념과 용어 정리가 핵심</li>
          <li><strong>과락만 피하기</strong>: 10문항 중 4문항(8점) 이상 맞추면 됨</li>
          <li><strong>기출 패턴</strong>: 비슷한 유형이 반복 출제되므로 기출 분석 중요</li>
          <li><strong>학습 시간</strong>: 전체의 30% 정도 배분 권장</li>
        </ul>

        <div className="info-box">
          <strong>TIP:</strong> 1과목은 배점이 낮아 과락만 넘기면 되지만,
          정규화와 식별자 개념은 2과목(SQL)과도 연결되므로 확실히 이해하는 것이 좋습니다.
        </div>
      </article>

      <LessonComplete lessonId="subject1-overview" />
    </div>
  );
}
