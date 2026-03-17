import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';

export default function SqlRefSubquery() {
  return (
    <div className="lesson-page">
      <SEOHead title="서브쿼리 레퍼런스 - SQLD Study" description="스칼라, 인라인뷰, 중첩, 상관 서브쿼리 빠른 참조" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>서브쿼리 레퍼런스</h1>
        <p className="hero-subtitle">스칼라 · 인라인뷰 · 중첩 · 상관 서브쿼리</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SampleDataPanel />

        <h2>서브쿼리 위치별 분류</h2>
        <table>
          <thead>
            <tr><th>위치</th><th>이름</th><th>반환</th><th>특징</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>SELECT</strong></td><td>스칼라 서브쿼리</td><td>1행 1열</td><td>단일 값만 반환</td></tr>
            <tr><td><strong>FROM</strong></td><td>인라인 뷰</td><td>다중 행/열</td><td>가상 테이블</td></tr>
            <tr><td><strong>WHERE</strong></td><td>중첩 서브쿼리</td><td>단일/다중</td><td>조건절 비교</td></tr>
            <tr><td><strong>HAVING</strong></td><td>중첩 서브쿼리</td><td>단일/다중</td><td>그룹 조건 비교</td></tr>
          </tbody>
        </table>

        <h2>스칼라 서브쿼리 (SELECT 절)</h2>
        <SqlBlock
          title="스칼라 서브쿼리"
          sql={`-- 반드시 1행 1열만 반환해야 함
SELECT 사원명,
       (SELECT 부서명
        FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명,
       (SELECT COUNT(*)
        FROM 사원 s
        WHERE s.부서번호 = e.부서번호) AS 부서인원
FROM 사원 e;

-- 2행 이상 반환 시 오류 발생!`}
          columns={['사원명', '부서명', '부서인원']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀', 부서인원: 3 },
            { 사원명: '이부장', 부서명: '개발팀', 부서인원: 3 },
            { 사원명: '박과장', 부서명: '개발팀', 부서인원: 3 },
            { 사원명: '최대리', 부서명: '인사팀', 부서인원: 2 },
            { 사원명: '정사원', 부서명: '인사팀', 부서인원: 2 },
            { 사원명: '한대리', 부서명: '영업팀', 부서인원: 2 },
            { 사원명: '오사원', 부서명: '영업팀', 부서인원: 2 },
            { 사원명: '강인턴', 부서명: null, 부서인원: 1 },
          ]}
        />

        <h2>인라인 뷰 (FROM 절)</h2>
        <SqlBlock
          title="인라인 뷰 — TOP-N"
          sql={`-- TOP-N 쿼리
SELECT *
FROM (
  SELECT 사원명, 연봉,
         ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS RN
  FROM 사원
) T
WHERE T.RN <= 10;`}
          columns={['사원명', '연봉', 'RN']}
          rows={[
            { 사원명: '강인턴', 연봉: null, RN: 1 },
            { 사원명: '김사장', 연봉: 9000, RN: 2 },
            { 사원명: '이부장', 연봉: 7000, RN: 3 },
            { 사원명: '박과장', 연봉: 5000, RN: 4 },
            { 사원명: '최대리', 연봉: 3500, RN: 5 },
            { 사원명: '한대리', 연봉: 3200, RN: 6 },
            { 사원명: '정사원', 연봉: 2800, RN: 7 },
            { 사원명: '오사원', 연봉: 2500, RN: 8 },
          ]}
          description="Oracle에서 NULL은 DESC 시 최상위 (NULLS FIRST)"
        />

        <SqlBlock
          title="인라인 뷰 — 부서 평균 비교"
          sql={`-- 부서별 평균 연봉과 비교
SELECT e.사원명, e.연봉, d.평균연봉
FROM 사원 e
JOIN (
  SELECT 부서번호, AVG(연봉) AS 평균연봉
  FROM 사원
  GROUP BY 부서번호
) d ON e.부서번호 = d.부서번호
WHERE e.연봉 > d.평균연봉;`}
          columns={['사원명', '연봉', '평균연봉']}
          rows={[
            { 사원명: '김사장', 연봉: 9000, 평균연봉: 7000 },
            { 사원명: '최대리', 연봉: 3500, 평균연봉: 3150 },
            { 사원명: '한대리', 연봉: 3200, 평균연봉: 2850 },
          ]}
        />

        <h2>중첩 서브쿼리 (WHERE 절)</h2>

        <h3>단일행 서브쿼리</h3>
        <SqlBlock
          title="단일행 서브쿼리"
          sql={`-- 비교 연산자 사용: =, <>, <, >, <=, >=
SELECT * FROM 사원
WHERE 연봉 = (SELECT MAX(연봉) FROM 사원);

SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`}
          columns={['사원명', '연봉']}
          rows={[
            { 사원명: '김사장', 연봉: 9000 },
          ]}
          description="MAX(연봉) = 9000인 사원"
        />

        <h3>다중행 서브쿼리</h3>
        <SqlBlock
          title="다중행 서브쿼리"
          sql={`-- IN: 목록 중 하나와 일치
SELECT * FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서 WHERE 지역 = '서울');

-- ANY (= SOME): 하나라도 만족
SELECT * FROM 사원
WHERE 연봉 > ANY (SELECT 연봉 FROM 사원 WHERE 부서번호 = 10);
-- = 10번 부서 최소 연봉보다 큰 사원

-- ALL: 모두 만족
SELECT * FROM 사원
WHERE 연봉 > ALL (SELECT 연봉 FROM 사원 WHERE 부서번호 = 10);
-- = 10번 부서 최대 연봉보다 큰 사원

-- EXISTS: 결과 존재 여부만 판단 (TRUE/FALSE)
SELECT * FROM 부서 d
WHERE EXISTS (SELECT 1 FROM 사원 e WHERE e.부서번호 = d.부서번호);`}
          columns={['사원명', '부서번호', '연봉']}
          rows={[
            { 사원명: '김사장', 부서번호: 10, 연봉: 9000 },
            { 사원명: '이부장', 부서번호: 10, 연봉: 7000 },
            { 사원명: '박과장', 부서번호: 10, 연봉: 5000 },
            { 사원명: '최대리', 부서번호: 20, 연봉: 3500 },
            { 사원명: '정사원', 부서번호: 20, 연봉: 2800 },
          ]}
          description="서울 부서(10, 20)에 속한 사원 (IN 결과)"
        />

        <h3>다중행 연산자 정리</h3>
        <table>
          <thead>
            <tr><th>연산자</th><th>의미</th><th>&gt; ANY</th><th>&gt; ALL</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>IN</strong></td><td>목록 중 하나 일치</td><td>-</td><td>-</td></tr>
            <tr><td><strong>ANY/SOME</strong></td><td>하나라도 만족</td><td>최소값보다 큼</td><td>-</td></tr>
            <tr><td><strong>ALL</strong></td><td>모두 만족</td><td>-</td><td>최대값보다 큼</td></tr>
            <tr><td><strong>EXISTS</strong></td><td>존재 여부</td><td>-</td><td>-</td></tr>
          </tbody>
        </table>

        <h2>상관 서브쿼리 (Correlated Subquery)</h2>
        <SqlBlock
          title="상관 서브쿼리"
          sql={`-- 외부 쿼리의 컬럼을 참조하는 서브쿼리
-- 행마다 서브쿼리가 실행됨

-- 부서 평균보다 연봉이 높은 사원
SELECT * FROM 사원 e
WHERE 연봉 > (
  SELECT AVG(연봉) FROM 사원
  WHERE 부서번호 = e.부서번호  -- 외부 참조
);

-- EXISTS와 자주 함께 사용
SELECT * FROM 부서 d
WHERE EXISTS (
  SELECT 1 FROM 사원 e
  WHERE e.부서번호 = d.부서번호
  AND e.연봉 > 5000
);`}
          columns={['사원명', '부서번호', '연봉']}
          rows={[
            { 사원명: '김사장', 부서번호: 10, 연봉: 9000 },
            { 사원명: '최대리', 부서번호: 20, 연봉: 3500 },
            { 사원명: '한대리', 부서번호: 30, 연봉: 3200 },
          ]}
          description="자기 부서 평균 연봉보다 높은 사원"
        />

        <h2>다중 컬럼 서브쿼리</h2>
        <SqlBlock
          title="다중 컬럼 서브쿼리"
          sql={`-- 여러 컬럼을 동시에 비교
SELECT * FROM 사원
WHERE (부서번호, 연봉) IN (
  SELECT 부서번호, MAX(연봉)
  FROM 사원
  GROUP BY 부서번호
);`}
          columns={['사원명', '부서번호', '연봉']}
          rows={[
            { 사원명: '김사장', 부서번호: 10, 연봉: 9000 },
            { 사원명: '최대리', 부서번호: 20, 연봉: 3500 },
            { 사원명: '한대리', 부서번호: 30, 연봉: 3200 },
          ]}
          description="각 부서에서 최고 연봉인 사원"
        />

        <h2>서브쿼리 vs JOIN 비교</h2>
        <table>
          <thead>
            <tr><th>구분</th><th>서브쿼리</th><th>JOIN</th></tr>
          </thead>
          <tbody>
            <tr><td>가독성</td><td>단순한 조건에 좋음</td><td>복잡한 관계에 좋음</td></tr>
            <tr><td>성능</td><td>상관 서브쿼리는 느릴 수 있음</td><td>일반적으로 빠름</td></tr>
            <tr><td>결과 컬럼</td><td>메인 쿼리 테이블만</td><td>여러 테이블 컬럼</td></tr>
            <tr><td>중복 행</td><td>발생 안 함</td><td>1:N에서 발생 가능</td></tr>
          </tbody>
        </table>

        <h2>WITH (CTE - Common Table Expression)</h2>
        <SqlBlock
          title="CTE (WITH 절)"
          sql={`-- 서브쿼리를 미리 정의하여 재사용
WITH 부서평균 AS (
  SELECT 부서번호, AVG(연봉) AS 평균연봉
  FROM 사원
  GROUP BY 부서번호
),
전체평균 AS (
  SELECT AVG(연봉) AS 평균연봉 FROM 사원
)
SELECT e.사원명, e.연봉, d.평균연봉 AS 부서평균, t.평균연봉 AS 전체평균
FROM 사원 e
JOIN 부서평균 d ON e.부서번호 = d.부서번호
CROSS JOIN 전체평균 t
WHERE e.연봉 > d.평균연봉;`}
          columns={['사원명', '연봉', '부서평균', '전체평균']}
          rows={[
            { 사원명: '김사장', 연봉: 9000, 부서평균: 7000, 전체평균: 4714 },
            { 사원명: '최대리', 연봉: 3500, 부서평균: 3150, 전체평균: 4714 },
            { 사원명: '한대리', 연봉: 3200, 부서평균: 2850, 전체평균: 4714 },
          ]}
          description="자기 부서 평균 연봉보다 높은 사원 (CTE 사용)"
        />

        <div className="info-box">
          <strong>CTE (WITH절) 장점:</strong><br/>
          • 같은 서브쿼리를 여러 번 사용할 때 성능 향상<br/>
          • 복잡한 쿼리의 가독성 향상<br/>
          • 재귀 쿼리 작성 가능 (WITH RECURSIVE)
        </div>
      </article>

      <LessonComplete lessonId="sqlref-subquery" />
    </div>
  );
}
