import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function IntroStudyStrategy() {
  return (
    <div className="lesson-page">
      <SEOHead title="학습 전략 - SQLD Study" description="SQLD 합격을 위한 학습 전략과 로드맵" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>학습 전략</h1>
        <p className="hero-subtitle">효율적인 SQLD 합격 로드맵</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>학습 기간별 로드맵</h2>

        <h3>4주 완성 플랜 (권장)</h3>
        <table>
          <thead>
            <tr><th>주차</th><th>학습 내용</th><th>목표</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>1주차</strong></td><td>1과목 - 데이터 모델링의 이해</td><td>개념 정리 + 기출 분석</td></tr>
            <tr><td><strong>2주차</strong></td><td>2과목 - SQL 기본 (DDL, DML, WHERE, 함수)</td><td>SQL 문법 숙달</td></tr>
            <tr><td><strong>3주차</strong></td><td>2과목 - SQL 활용 (JOIN, 서브쿼리, 윈도우 함수)</td><td>복합 쿼리 작성 능력</td></tr>
            <tr><td><strong>4주차</strong></td><td>모의고사 + 오답 정리</td><td>실전 감각 + 약점 보완</td></tr>
          </tbody>
        </table>

        <h3>2주 단기 플랜</h3>
        <table>
          <thead>
            <tr><th>기간</th><th>학습 내용</th></tr>
          </thead>
          <tbody>
            <tr><td>1~3일</td><td>1과목 핵심 요약 + 기출 암기</td></tr>
            <tr><td>4~7일</td><td>2과목 SQL 기본 문법 집중</td></tr>
            <tr><td>8~11일</td><td>2과목 SQL 활용 (JOIN, 서브쿼리)</td></tr>
            <tr><td>12~14일</td><td>모의고사 3회 + 오답 복습</td></tr>
          </tbody>
        </table>

        <h2>과목별 학습 전략</h2>

        <h3>1과목: 데이터 모델링의 이해 (20%)</h3>
        <ul>
          <li><strong>특징</strong>: 이론 중심, 암기 비중 높음</li>
          <li><strong>전략</strong>: 핵심 개념 정리 → 기출 반복 → 용어 암기</li>
          <li><strong>중요 토픽</strong>: 엔터티, 속성, 관계, 식별자, 정규화/반정규화</li>
          <li><strong>주의</strong>: 과락(40%)만 넘기면 되므로, 2과목에 더 집중</li>
        </ul>

        <h3>2과목: SQL 기본 및 활용 (80%)</h3>
        <ul>
          <li><strong>특징</strong>: 실습 중심, 쿼리 작성/해석 능력 필요</li>
          <li><strong>전략</strong>: 문법 이해 → 직접 쿼리 작성 → 기출 풀이</li>
          <li><strong>최빈출 토픽</strong>: JOIN, GROUP BY, 서브쿼리, 윈도우 함수, NULL 처리</li>
          <li><strong>핵심</strong>: SQL 실행 결과를 직접 예측하는 연습 필수</li>
        </ul>

        <h2>학습 팁</h2>

        <div className="info-box">
          <strong>핵심 학습 원칙</strong>
          <ol>
            <li><strong>2과목 우선</strong>: 배점 80%이므로 학습 시간의 70%를 투자</li>
            <li><strong>실습 병행</strong>: SQL은 직접 실행해봐야 이해가 빠름</li>
            <li><strong>오답 노트</strong>: 틀린 문제는 반드시 왜 틀렸는지 분석</li>
            <li><strong>기출 반복</strong>: 최근 3년 기출문제 최소 3회독</li>
            <li><strong>NULL 주의</strong>: NULL 관련 문제가 매년 다수 출제</li>
          </ol>
        </div>

        <h2>자주 틀리는 유형</h2>
        <ul>
          <li><strong>NULL 연산</strong>: NULL + 숫자 = NULL, NULL 비교는 IS NULL 사용</li>
          <li><strong>GROUP BY</strong>: SELECT에 집계함수 없는 컬럼은 반드시 GROUP BY에 포함</li>
          <li><strong>OUTER JOIN</strong>: LEFT/RIGHT 방향과 NULL 결과 예측</li>
          <li><strong>서브쿼리 위치</strong>: SELECT, FROM, WHERE 절별 서브쿼리 차이</li>
          <li><strong>실행 순서</strong>: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</li>
        </ul>

        <h2>추천 학습 자료</h2>
        <ul>
          <li><strong>공식 가이드</strong>: 한국데이터산업진흥원 SQL 가이드</li>
          <li><strong>기출문제</strong>: 최근 3년간 기출문제 (dataq.or.kr)</li>
          <li><strong>SQL 실습</strong>: Oracle Live SQL, MySQL Workbench</li>
          <li><strong>이 사이트</strong>: 각 챕터 학습 → 모의고사 → 오답 확인</li>
        </ul>
      </article>

      <LessonComplete lessonId="intro-study-strategy" />
    </div>
  );
}
