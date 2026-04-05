import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function IntroWhatIsSqld() {
  return (
    <div className="lesson-page">
      <SEOHead title="SQLD란? - SQLD Study" description="SQL 개발자 자격증(SQLD)에 대한 소개" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>SQLD란?</h1>
        <p className="hero-subtitle">SQL Developer 자격증의 모든 것</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>SQLD(SQL Developer) 자격증 소개</h2>
        <p>
          SQLD(SQL Developer)는 <strong>한국데이터산업진흥원(K-data)</strong>에서 시행하는
          국가공인 자격증으로, 데이터베이스와 SQL에 대한 기본적인 이해와 활용 능력을 평가합니다.
        </p>
        <p>
          정식 명칭은 <strong>&quot;SQL 개발자(SQL Developer)&quot;</strong>이며,
          데이터 자격검정 체계에서 SQLP(SQL Professional) 아래 단계에 해당합니다.
        </p>

        <h3>데이터 자격검정 체계</h3>
        <table>
          <thead>
            <tr><th>자격증</th><th>수준</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>DAP</td><td>전문가</td><td>데이터 아키텍처 전문가</td></tr>
            <tr><td>DAsP</td><td>준전문가</td><td>데이터 아키텍처 준전문가</td></tr>
            <tr><td>SQLP</td><td>전문가</td><td>SQL 전문가</td></tr>
            <tr><td><strong>SQLD</strong></td><td><strong>개발자</strong></td><td><strong>SQL 개발자 (본 과정)</strong></td></tr>
          </tbody>
        </table>

        <h3>왜 SQLD를 취득해야 하는가?</h3>
        <ul>
          <li><strong>국가공인 자격증</strong>: 공공기관, 기업 채용 시 가산점 부여</li>
          <li><strong>데이터 역량 증명</strong>: SQL 기본 역량을 객관적으로 증명</li>
          <li><strong>SQLP 응시 자격</strong>: SQLD 취득 후 SQLP에 도전 가능</li>
          <li><strong>실무 활용</strong>: 개발자, 데이터 분석가 등 다양한 직군에서 활용</li>
          <li><strong>취업 경쟁력</strong>: IT 분야 취업 시 차별화 포인트</li>
        </ul>

        <h3>SQLD 시험 기본 정보</h3>
        <table>
          <thead>
            <tr><th>항목</th><th>내용</th></tr>
          </thead>
          <tbody>
            <tr><td>시험명</td><td>SQL 개발자(SQLD)</td></tr>
            <tr><td>시행기관</td><td>한국데이터산업진흥원(K-data)</td></tr>
            <tr><td>시험 유형</td><td>객관식 4지선다 + 단답형</td></tr>
            <tr><td>문항 수</td><td>총 50문항</td></tr>
            <tr><td>시험 시간</td><td>90분</td></tr>
            <tr><td>합격 기준</td><td>총점 60% 이상 + 과목별 40% 이상</td></tr>
            <tr><td>응시료</td><td>30,000원</td></tr>
            <tr><td>시험 횟수</td><td>연 4회 (3월, 6월, 9월, 12월)</td></tr>
          </tbody>
        </table>

        <h3>시험 과목 구성</h3>
        <table>
          <thead>
            <tr><th>과목</th><th>세부 내용</th><th>문항 수</th><th>배점</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1과목: 데이터 모델링의 이해</strong></td>
              <td>데이터 모델링, 엔터티, 속성, 관계, 식별자, 정규화</td>
              <td>10문항</td>
              <td>20점</td>
            </tr>
            <tr>
              <td><strong>2과목: SQL 기본 및 활용</strong></td>
              <td>DDL, DML, TCL, WHERE, 함수, GROUP BY, JOIN, 서브쿼리, 윈도우 함수</td>
              <td>40문항</td>
              <td>80점</td>
            </tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>TIP:</strong> 2과목의 비중이 80%로 매우 높으므로, 2과목 학습에 더 많은 시간을 투자하는 것이 효율적입니다.
        </div>
      </article>

      <LessonComplete lessonId="intro-what-is-sqld" />
    </div>
  );
}
