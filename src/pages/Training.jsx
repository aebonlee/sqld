import SEOHead from '../components/SEOHead';

export default function Training() {
  return (
    <div className="lesson-page">
      <SEOHead title="SQL 실습 - SQLD Study" description="SQL 실습 가이드와 연습 문제" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>SQL 실습</h1>
        <p className="hero-subtitle">직접 SQL을 작성하며 실력을 키우세요</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>실습 환경 설정</h2>
        <p>
          SQL을 직접 실행해보는 것이 가장 효과적인 학습 방법입니다.
          아래 환경 중 하나를 선택하여 실습하세요.
        </p>

        <h3>1. Oracle Live SQL (추천)</h3>
        <ul>
          <li>설치 없이 웹 브라우저에서 바로 사용</li>
          <li>SQLD 시험이 Oracle 기준이므로 가장 적합</li>
          <li>Oracle 계정 필요 (무료)</li>
        </ul>

        <h3>2. MySQL (로컬 설치)</h3>
        <ul>
          <li>무료로 설치 가능</li>
          <li>일부 함수/문법이 Oracle과 다름에 주의</li>
          <li>MySQL Workbench와 함께 사용 추천</li>
        </ul>

        <h2>실습용 테이블 생성</h2>
        <pre><code>{`-- 부서 테이블
CREATE TABLE 부서 (
  부서번호 NUMBER PRIMARY KEY,
  부서명   VARCHAR2(20) NOT NULL,
  지역     VARCHAR2(20)
);

-- 사원 테이블
CREATE TABLE 사원 (
  사원번호   NUMBER PRIMARY KEY,
  사원명     VARCHAR2(20) NOT NULL,
  부서번호   NUMBER REFERENCES 부서(부서번호),
  직급       VARCHAR2(10),
  연봉       NUMBER,
  관리자번호 NUMBER REFERENCES 사원(사원번호),
  입사일     DATE DEFAULT SYSDATE
);

-- 샘플 데이터 삽입
INSERT INTO 부서 VALUES (10, '개발팀', '서울');
INSERT INTO 부서 VALUES (20, '인사팀', '서울');
INSERT INTO 부서 VALUES (30, '영업팀', '부산');
INSERT INTO 부서 VALUES (40, '기획팀', '대전');

INSERT INTO 사원 VALUES (1001, '김사장', 10, '사장', 9000, NULL, DATE '2010-01-15');
INSERT INTO 사원 VALUES (1002, '이부장', 10, '부장', 7000, 1001, DATE '2012-03-20');
INSERT INTO 사원 VALUES (1003, '박과장', 10, '과장', 5000, 1002, DATE '2015-07-10');
INSERT INTO 사원 VALUES (1004, '최대리', 20, '대리', 3500, 1002, DATE '2018-11-05');
INSERT INTO 사원 VALUES (1005, '정사원', 20, '사원', 2800, 1004, DATE '2020-06-15');
INSERT INTO 사원 VALUES (1006, '한대리', 30, '대리', 3200, 1001, DATE '2019-01-20');
INSERT INTO 사원 VALUES (1007, '오사원', 30, '사원', 2500, 1006, DATE '2021-09-01');
INSERT INTO 사원 VALUES (1008, '강인턴', NULL, '인턴', NULL, 1003, DATE '2023-03-01');

COMMIT;`}</code></pre>

        <h2>연습 문제</h2>

        <h3>기본 문제</h3>
        <div className="info-box">
          <strong>Q1.</strong> 모든 사원의 이름과 연봉을 연봉 내림차순으로 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 사원명, 연봉
FROM 사원
ORDER BY 연봉 DESC;`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q2.</strong> 부서번호가 10인 사원들의 이름과 직급을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 사원명, 직급
FROM 사원
WHERE 부서번호 = 10;`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q3.</strong> 연봉이 NULL인 사원의 이름과 직급을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 사원명, 직급
FROM 사원
WHERE 연봉 IS NULL;`}</code></pre>
          </details>
        </div>

        <h3>JOIN 문제</h3>
        <div className="info-box">
          <strong>Q4.</strong> 사원 이름과 소속 부서명을 함께 조회하세요. 부서가 없는 사원도 포함하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT e.사원명, d.부서명
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호;`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q5.</strong> 사원이 없는 부서를 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT d.부서명
FROM 부서 d LEFT JOIN 사원 e
ON d.부서번호 = e.부서번호
WHERE e.사원번호 IS NULL;`}</code></pre>
          </details>
        </div>

        <h3>서브쿼리 & 집계 문제</h3>
        <div className="info-box">
          <strong>Q6.</strong> 부서별 평균 연봉을 구하세요 (NULL 제외).
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 부서번호, AVG(연봉) AS 평균연봉
FROM 사원
WHERE 연봉 IS NOT NULL
GROUP BY 부서번호;`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q7.</strong> 전체 평균 연봉보다 높은 연봉을 받는 사원을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 사원명, 연봉
FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q8.</strong> 각 사원의 연봉 순위를 RANK, DENSE_RANK, ROW_NUMBER로 구하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT 사원명, 연봉,
       RANK() OVER (ORDER BY 연봉 DESC) AS "RANK",
       DENSE_RANK() OVER (ORDER BY 연봉 DESC) AS "DENSE_RANK",
       ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS "ROW_NUMBER"
FROM 사원
WHERE 연봉 IS NOT NULL;`}</code></pre>
          </details>
        </div>

        <h3>SELF JOIN & 계층형 문제</h3>
        <div className="info-box">
          <strong>Q9.</strong> 각 사원의 이름과 관리자 이름을 함께 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT e.사원명, m.사원명 AS 관리자명
FROM 사원 e LEFT JOIN 사원 m
ON e.관리자번호 = m.사원번호;`}</code></pre>
          </details>
        </div>

        <div className="info-box">
          <strong>Q10.</strong> 연봉이 NULL인 사원의 연봉을 0으로 치환하여 전체 사원의 연봉 합계를 구하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <pre><code>{`SELECT SUM(NVL(연봉, 0)) AS 연봉합계
FROM 사원;`}</code></pre>
          </details>
        </div>
      </article>
    </div>
  );
}
