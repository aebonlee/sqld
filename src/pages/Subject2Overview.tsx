import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject2Overview() {
  return (
    <div className="lesson-page">
      <SEOHead title="2과목 개요 - SQLD Study" description="SQLD 2과목 SQL 기본 및 활용 개요" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>2과목: SQL 기본 및 활용</h1>
        <p className="hero-subtitle">40문항 · 80점 배점 · 과락 기준 32점</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>과목 개요</h2>
        <p>
          2과목은 <strong>SQL 실무 능력</strong>을 평가합니다.
          전체 배점의 80%를 차지하므로, 합격의 핵심 과목입니다.
        </p>

        <h2>출제 범위</h2>
        <table>
          <thead>
            <tr><th>장</th><th>내용</th><th>주요 토픽</th><th>출제 비중</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1장</strong></td>
              <td>SQL 기본</td>
              <td>DDL, DML, TCL, WHERE, 함수, GROUP BY, ORDER BY</td>
              <td>약 40%</td>
            </tr>
            <tr>
              <td><strong>2장</strong></td>
              <td>SQL 활용</td>
              <td>JOIN, 서브쿼리, 집합연산, 윈도우 함수, 계층형 쿼리</td>
              <td>약 45%</td>
            </tr>
            <tr>
              <td><strong>3장</strong></td>
              <td>관리 구문</td>
              <td>DML 심화, TCL, 제약조건, DCL</td>
              <td>약 15%</td>
            </tr>
          </tbody>
        </table>

        <h2>학습 목차</h2>
        <div className="chapter-grid">
          <Link to="/subject2/ch1" className="chapter-card">
            <h3>1장: SQL 기본</h3>
            <p>DDL, DML, TCL, WHERE 절, 함수, GROUP BY, ORDER BY를 학습합니다.</p>
          </Link>
          <Link to="/subject2/ch2" className="chapter-card">
            <h3>2장: SQL 활용</h3>
            <p>JOIN, 서브쿼리, 집합연산, 윈도우 함수, 계층형 쿼리를 학습합니다.</p>
          </Link>
          <Link to="/subject2/ch3" className="chapter-card">
            <h3>3장: 관리 구문</h3>
            <p>MERGE, TCL 심화, 제약조건, DCL을 학습합니다.</p>
          </Link>
        </div>

        <h2>학습 전략</h2>
        <ul>
          <li><strong>SQL 직접 실행</strong>: 문법을 외우지 말고 직접 쿼리를 작성하고 결과를 확인</li>
          <li><strong>실행 결과 예측</strong>: 주어진 SQL의 결과를 머리로 계산하는 연습</li>
          <li><strong>NULL 처리</strong>: NULL 관련 함수와 연산 결과 완벽 숙지</li>
          <li><strong>JOIN 마스터</strong>: INNER/LEFT/RIGHT/FULL OUTER JOIN 차이 확실히</li>
          <li><strong>윈도우 함수</strong>: RANK, DENSE_RANK, ROW_NUMBER, SUM OVER 등</li>
        </ul>

        <h2>최빈출 토픽 TOP 10</h2>
        <ol>
          <li>JOIN (INNER, OUTER, CROSS, NATURAL)</li>
          <li>GROUP BY + HAVING</li>
          <li>서브쿼리 (스칼라, 인라인뷰, 상관)</li>
          <li>윈도우 함수 (RANK, SUM OVER)</li>
          <li>NULL 처리 (NVL, NULLIF, COALESCE)</li>
          <li>문자열 함수 (SUBSTR, TRIM, REPLACE)</li>
          <li>CASE WHEN</li>
          <li>ORDER BY + SQL 실행 순서</li>
          <li>집합 연산자 (UNION, INTERSECT, MINUS)</li>
          <li>계층형 쿼리 (CONNECT BY)</li>
        </ol>

        <div className="info-box">
          <strong>TIP:</strong> SQL 실행 순서를 반드시 암기하세요!<br/>
          FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
        </div>
      </article>

      <LessonComplete lessonId="subject2-overview" />
    </div>
  );
}
