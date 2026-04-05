import SEOHead from '../components/SEOHead';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';
import { CREATE_TABLE_SQL, INSERT_DATA_SQL } from '../data/sampleData';

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
        <SampleDataPanel />

        <SqlBlock title="테이블 생성 (DDL)" sql={CREATE_TABLE_SQL} />
        <SqlBlock title="데이터 삽입 (DML)" sql={INSERT_DATA_SQL} />

        <h2>연습 문제</h2>

        <h3>기본 문제</h3>
        <div className="info-box">
          <strong>Q1.</strong> 모든 사원의 이름과 연봉을 연봉 내림차순으로 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q1 정답"
              sql={`SELECT 사원명, 연봉
FROM 사원
ORDER BY 연봉 DESC;`}
              columns={['사원명', '연봉']}
              rows={[
                { 사원명: '강인턴', 연봉: null },
                { 사원명: '김사장', 연봉: 9000 },
                { 사원명: '이부장', 연봉: 7000 },
                { 사원명: '박과장', 연봉: 5000 },
                { 사원명: '최대리', 연봉: 3500 },
                { 사원명: '한대리', 연봉: 3200 },
                { 사원명: '정사원', 연봉: 2800 },
                { 사원명: '오사원', 연봉: 2500 },
              ]}
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q2.</strong> 부서번호가 10인 사원들의 이름과 직급을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q2 정답"
              sql={`SELECT 사원명, 직급
FROM 사원
WHERE 부서번호 = 10;`}
              columns={['사원명', '직급']}
              rows={[
                { 사원명: '김사장', 직급: '사장' },
                { 사원명: '이부장', 직급: '부장' },
                { 사원명: '박과장', 직급: '과장' },
              ]}
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q3.</strong> 연봉이 NULL인 사원의 이름과 직급을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q3 정답"
              sql={`SELECT 사원명, 직급
FROM 사원
WHERE 연봉 IS NULL;`}
              columns={['사원명', '직급']}
              rows={[
                { 사원명: '강인턴', 직급: '인턴' },
              ]}
            />
          </details>
        </div>

        <h3>JOIN 문제</h3>
        <div className="info-box">
          <strong>Q4.</strong> 사원 이름과 소속 부서명을 함께 조회하세요. 부서가 없는 사원도 포함하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q4 정답"
              sql={`SELECT e.사원명, d.부서명
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호;`}
              columns={['사원명', '부서명']}
              rows={[
                { 사원명: '김사장', 부서명: '개발팀' },
                { 사원명: '이부장', 부서명: '개발팀' },
                { 사원명: '박과장', 부서명: '개발팀' },
                { 사원명: '최대리', 부서명: '인사팀' },
                { 사원명: '정사원', 부서명: '인사팀' },
                { 사원명: '한대리', 부서명: '영업팀' },
                { 사원명: '오사원', 부서명: '영업팀' },
                { 사원명: '강인턴', 부서명: null },
              ]}
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q5.</strong> 사원이 없는 부서를 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q5 정답"
              sql={`SELECT d.부서명
FROM 부서 d LEFT JOIN 사원 e
ON d.부서번호 = e.부서번호
WHERE e.사원번호 IS NULL;`}
              columns={['부서명']}
              rows={[
                { 부서명: '기획팀' },
              ]}
            />
          </details>
        </div>

        <h3>서브쿼리 & 집계 문제</h3>
        <div className="info-box">
          <strong>Q6.</strong> 부서별 평균 연봉을 구하세요 (NULL 제외).
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q6 정답"
              sql={`SELECT 부서번호, AVG(연봉) AS 평균연봉
FROM 사원
WHERE 연봉 IS NOT NULL
GROUP BY 부서번호;`}
              columns={['부서번호', '평균연봉']}
              rows={[
                { 부서번호: 10, 평균연봉: 7000 },
                { 부서번호: 20, 평균연봉: 3150 },
                { 부서번호: 30, 평균연봉: 2850 },
              ]}
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q7.</strong> 전체 평균 연봉보다 높은 연봉을 받는 사원을 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q7 정답"
              sql={`SELECT 사원명, 연봉
FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`}
              columns={['사원명', '연봉']}
              rows={[
                { 사원명: '김사장', 연봉: 9000 },
                { 사원명: '이부장', 연봉: 7000 },
                { 사원명: '박과장', 연봉: 5000 },
              ]}
              description="AVG(연봉) = 33000/7 ≈ 4714 (NULL 제외)"
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q8.</strong> 각 사원의 연봉 순위를 RANK, DENSE_RANK, ROW_NUMBER로 구하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q8 정답"
              sql={`SELECT 사원명, 연봉,
       RANK() OVER (ORDER BY 연봉 DESC) AS "RANK",
       DENSE_RANK() OVER (ORDER BY 연봉 DESC) AS "DENSE_RANK",
       ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS "ROW_NUMBER"
FROM 사원
WHERE 연봉 IS NOT NULL;`}
              columns={['사원명', '연봉', 'RANK', 'DENSE_RANK', 'ROW_NUMBER']}
              rows={[
                { 사원명: '김사장', 연봉: 9000, RANK: 1, DENSE_RANK: 1, ROW_NUMBER: 1 },
                { 사원명: '이부장', 연봉: 7000, RANK: 2, DENSE_RANK: 2, ROW_NUMBER: 2 },
                { 사원명: '박과장', 연봉: 5000, RANK: 3, DENSE_RANK: 3, ROW_NUMBER: 3 },
                { 사원명: '최대리', 연봉: 3500, RANK: 4, DENSE_RANK: 4, ROW_NUMBER: 4 },
                { 사원명: '한대리', 연봉: 3200, RANK: 5, DENSE_RANK: 5, ROW_NUMBER: 5 },
                { 사원명: '정사원', 연봉: 2800, RANK: 6, DENSE_RANK: 6, ROW_NUMBER: 6 },
                { 사원명: '오사원', 연봉: 2500, RANK: 7, DENSE_RANK: 7, ROW_NUMBER: 7 },
              ]}
            />
          </details>
        </div>

        <h3>SELF JOIN & 계층형 문제</h3>
        <div className="info-box">
          <strong>Q9.</strong> 각 사원의 이름과 관리자 이름을 함께 조회하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q9 정답"
              sql={`SELECT e.사원명, m.사원명 AS 관리자명
FROM 사원 e LEFT JOIN 사원 m
ON e.관리자번호 = m.사원번호;`}
              columns={['사원명', '관리자명']}
              rows={[
                { 사원명: '김사장', 관리자명: null },
                { 사원명: '이부장', 관리자명: '김사장' },
                { 사원명: '박과장', 관리자명: '이부장' },
                { 사원명: '최대리', 관리자명: '이부장' },
                { 사원명: '정사원', 관리자명: '최대리' },
                { 사원명: '한대리', 관리자명: '김사장' },
                { 사원명: '오사원', 관리자명: '한대리' },
                { 사원명: '강인턴', 관리자명: '박과장' },
              ]}
            />
          </details>
        </div>

        <div className="info-box">
          <strong>Q10.</strong> 연봉이 NULL인 사원의 연봉을 0으로 치환하여 전체 사원의 연봉 합계를 구하세요.
          <details style={{ marginTop: '8px' }}>
            <summary>정답 보기</summary>
            <SqlBlock
              title="Q10 정답"
              sql={`SELECT SUM(NVL(연봉, 0)) AS 연봉합계
FROM 사원;`}
              columns={['연봉합계']}
              rows={[
                { 연봉합계: 33000 },
              ]}
              description="NVL(NULL, 0) = 0 → 9000+7000+5000+3500+2800+3200+2500+0 = 33000"
            />
          </details>
        </div>
      </article>
    </div>
  );
}
