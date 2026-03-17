import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject2Ch2() {
  return (
    <div className="lesson-page">
      <SEOHead title="2장: SQL 활용 - SQLD Study" description="JOIN, 서브쿼리, 집합연산, 윈도우 함수, 계층형 쿼리" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>2장: SQL 활용</h1>
        <p className="hero-subtitle">JOIN, 서브쿼리, 윈도우 함수, 계층형 쿼리</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>1. JOIN</h2>
        <p>
          JOIN은 두 개 이상의 테이블을 <strong>연결</strong>하여 데이터를 조회하는 방법입니다.
        </p>

        <h3>JOIN 유형 비교</h3>
        <table>
          <thead>
            <tr><th>JOIN 유형</th><th>설명</th><th>NULL 매칭</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>INNER JOIN</strong></td><td>양쪽 모두 일치하는 행만</td><td>제외</td></tr>
            <tr><td><strong>LEFT OUTER JOIN</strong></td><td>왼쪽 테이블 전체 + 오른쪽 일치</td><td>오른쪽 NULL 포함</td></tr>
            <tr><td><strong>RIGHT OUTER JOIN</strong></td><td>오른쪽 테이블 전체 + 왼쪽 일치</td><td>왼쪽 NULL 포함</td></tr>
            <tr><td><strong>FULL OUTER JOIN</strong></td><td>양쪽 모두 전체</td><td>양쪽 NULL 포함</td></tr>
            <tr><td><strong>CROSS JOIN</strong></td><td>카테시안 곱 (모든 조합)</td><td>조건 없음</td></tr>
            <tr><td><strong>NATURAL JOIN</strong></td><td>같은 이름 컬럼으로 자동 JOIN</td><td>제외</td></tr>
          </tbody>
        </table>

        <h3>표준 JOIN 문법 (ANSI)</h3>
        <pre><code>{`-- INNER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e INNER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- LEFT OUTER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e LEFT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- FULL OUTER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e FULL OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;`}</code></pre>

        <h3>Oracle 전용 JOIN 문법</h3>
        <pre><code>{`-- INNER JOIN (Oracle)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;

-- LEFT OUTER JOIN (Oracle) - (+)는 부족한 쪽에
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`}</code></pre>

        <div className="info-box">
          <strong>Oracle (+) 기호 주의:</strong><br/>
          (+)는 데이터가 부족한 쪽에 붙입니다.<br/>
          LEFT JOIN: 오른쪽에 (+) → WHERE a.id = b.id(+)<br/>
          RIGHT JOIN: 왼쪽에 (+) → WHERE a.id(+) = b.id
        </div>

        <h3>USING과 ON의 차이</h3>
        <pre><code>{`-- ON: 컬럼명이 다를 때도 사용 가능
SELECT * FROM 사원 e JOIN 부서 d
ON e.부서번호 = d.부서코드;

-- USING: 컬럼명이 같을 때만 사용
SELECT * FROM 사원 JOIN 부서
USING (부서번호);
-- USING 사용 시 테이블 별칭 불가 (부서번호에 별칭 X)`}</code></pre>

        <h2>2. 서브쿼리 (Subquery)</h2>
        <p>
          서브쿼리는 SQL 안에 포함된 <strong>또 다른 SQL</strong>입니다.
          위치에 따라 종류가 나뉩니다.
        </p>

        <h3>서브쿼리 위치별 분류</h3>
        <table>
          <thead>
            <tr><th>위치</th><th>이름</th><th>특징</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>SELECT 절</strong></td><td>스칼라 서브쿼리</td><td>반드시 1행 1열 반환</td></tr>
            <tr><td><strong>FROM 절</strong></td><td>인라인 뷰</td><td>가상 테이블처럼 사용</td></tr>
            <tr><td><strong>WHERE 절</strong></td><td>중첩 서브쿼리</td><td>조건절에서 사용</td></tr>
          </tbody>
        </table>

        <h3>스칼라 서브쿼리</h3>
        <pre><code>{`SELECT 사원명,
       (SELECT 부서명 FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명
FROM 사원 e;`}</code></pre>

        <h3>인라인 뷰</h3>
        <pre><code>{`SELECT *
FROM (SELECT 사원명, 연봉,
             RANK() OVER (ORDER BY 연봉 DESC) AS 순위
      FROM 사원) t
WHERE t.순위 <= 5;`}</code></pre>

        <h3>중첩 서브쿼리</h3>
        <pre><code>{`-- 단일행 서브쿼리 (=, >, < 사용)
SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);

-- 다중행 서브쿼리 (IN, ANY, ALL, EXISTS 사용)
SELECT * FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서
                   WHERE 지역 = '서울');

-- 상관 서브쿼리 (외부 테이블 참조)
SELECT * FROM 사원 e
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원
              WHERE 부서번호 = e.부서번호);`}</code></pre>

        <h3>다중행 연산자</h3>
        <table>
          <thead>
            <tr><th>연산자</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>IN</strong></td><td>목록 중 하나와 일치</td></tr>
            <tr><td><strong>ANY/SOME</strong></td><td>하나라도 만족 (&gt; ANY = 최소값보다 큼)</td></tr>
            <tr><td><strong>ALL</strong></td><td>모두 만족 (&gt; ALL = 최대값보다 큼)</td></tr>
            <tr><td><strong>EXISTS</strong></td><td>서브쿼리 결과 존재 여부 (TRUE/FALSE)</td></tr>
          </tbody>
        </table>

        <h2>3. 집합 연산자</h2>
        <table>
          <thead>
            <tr><th>연산자</th><th>설명</th><th>중복</th><th>정렬</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>UNION</strong></td><td>합집합</td><td>중복 제거</td><td>자동 정렬</td></tr>
            <tr><td><strong>UNION ALL</strong></td><td>합집합</td><td>중복 포함</td><td>정렬 안 함</td></tr>
            <tr><td><strong>INTERSECT</strong></td><td>교집합</td><td>중복 제거</td><td>자동 정렬</td></tr>
            <tr><td><strong>MINUS/EXCEPT</strong></td><td>차집합</td><td>중복 제거</td><td>자동 정렬</td></tr>
          </tbody>
        </table>

        <pre><code>{`-- 부서 10과 20의 사원 합집합
SELECT 사원명 FROM 사원 WHERE 부서번호 = 10
UNION ALL
SELECT 사원명 FROM 사원 WHERE 부서번호 = 20;`}</code></pre>

        <h2>4. 윈도우 함수 (Window Function)</h2>
        <p>
          행 간의 관계를 정의하여 <strong>그룹 내 순위, 누적, 비율</strong> 등을 계산합니다.
          GROUP BY와 달리 행이 줄어들지 않습니다.
        </p>

        <h3>기본 문법</h3>
        <pre><code>{`함수명() OVER (
  [PARTITION BY 그룹컬럼]
  [ORDER BY 정렬컬럼]
  [ROWS/RANGE BETWEEN ... AND ...]
)`}</code></pre>

        <h3>순위 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>동일 순위 처리</th><th>예시 (값: 100,100,90)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>RANK()</strong></td><td>동순위 후 건너뜀</td><td>1, 1, 3</td></tr>
            <tr><td><strong>DENSE_RANK()</strong></td><td>동순위 후 이어감</td><td>1, 1, 2</td></tr>
            <tr><td><strong>ROW_NUMBER()</strong></td><td>무조건 순번</td><td>1, 2, 3</td></tr>
          </tbody>
        </table>

        <pre><code>{`SELECT 사원명, 연봉,
       RANK() OVER (ORDER BY 연봉 DESC) AS RANK순위,
       DENSE_RANK() OVER (ORDER BY 연봉 DESC) AS DENSE순위,
       ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS ROW순위
FROM 사원;`}</code></pre>

        <h3>집계 윈도우 함수</h3>
        <pre><code>{`SELECT 사원명, 부서번호, 연봉,
       SUM(연봉) OVER (PARTITION BY 부서번호) AS 부서합계,
       AVG(연봉) OVER (PARTITION BY 부서번호) AS 부서평균,
       SUM(연봉) OVER (ORDER BY 입사일) AS 누적합계
FROM 사원;`}</code></pre>

        <h3>행 순서 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>LAG(컬럼, n)</strong></td><td>n행 이전 값 (기본 1)</td></tr>
            <tr><td><strong>LEAD(컬럼, n)</strong></td><td>n행 이후 값 (기본 1)</td></tr>
            <tr><td><strong>FIRST_VALUE</strong></td><td>파티션 내 첫 번째 값</td></tr>
            <tr><td><strong>LAST_VALUE</strong></td><td>파티션 내 마지막 값</td></tr>
          </tbody>
        </table>

        <h2>5. 계층형 쿼리 (Oracle)</h2>
        <pre><code>{`SELECT LEVEL, LPAD(' ', (LEVEL-1)*2) || 사원명 AS 조직도,
       사원번호, 관리자번호
FROM 사원
START WITH 관리자번호 IS NULL    -- 루트 노드
CONNECT BY PRIOR 사원번호 = 관리자번호  -- 부모→자식 방향
ORDER SIBLINGS BY 사원명;        -- 같은 레벨 내 정렬`}</code></pre>

        <h3>계층형 쿼리 키워드</h3>
        <table>
          <thead>
            <tr><th>키워드</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>START WITH</strong></td><td>루트 노드 조건</td></tr>
            <tr><td><strong>CONNECT BY PRIOR</strong></td><td>부모-자식 관계 정의</td></tr>
            <tr><td><strong>LEVEL</strong></td><td>현재 계층 깊이</td></tr>
            <tr><td><strong>ORDER SIBLINGS BY</strong></td><td>같은 레벨 내 정렬</td></tr>
            <tr><td><strong>PRIOR</strong></td><td>이전 행 참조</td></tr>
            <tr><td><strong>CONNECT_BY_ISLEAF</strong></td><td>리프 노드 여부 (0/1)</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>PRIOR 위치 핵심:</strong><br/>
          • PRIOR 자식 = 부모 → 순방향 (위→아래, 부모에서 자식으로)<br/>
          • PRIOR 부모 = 자식 → 역방향 (아래→위, 자식에서 부모로)
        </div>

        <h2>6. PIVOT / UNPIVOT</h2>
        <pre><code>{`-- PIVOT: 행 → 열 변환
SELECT *
FROM (SELECT 부서번호, 직급, 연봉 FROM 사원)
PIVOT (SUM(연봉) FOR 직급 IN ('과장', '대리', '사원'));

-- UNPIVOT: 열 → 행 변환
SELECT *
FROM 매출테이블
UNPIVOT (매출액 FOR 분기 IN (Q1, Q2, Q3, Q4));`}</code></pre>

        <h2>7. 정규 표현식 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>REGEXP_LIKE</td><td>패턴 매칭 여부</td></tr>
            <tr><td>REGEXP_SUBSTR</td><td>패턴에 맞는 문자열 추출</td></tr>
            <tr><td>REGEXP_REPLACE</td><td>패턴에 맞는 문자열 치환</td></tr>
            <tr><td>REGEXP_INSTR</td><td>패턴 위치 반환</td></tr>
            <tr><td>REGEXP_COUNT</td><td>패턴 매칭 횟수</td></tr>
          </tbody>
        </table>
      </article>

      <LessonComplete lessonId="subject2-ch2" />
    </div>
  );
}
