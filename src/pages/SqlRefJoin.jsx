import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';

export default function SqlRefJoin() {
  return (
    <div className="lesson-page">
      <SEOHead title="JOIN 레퍼런스 - SQLD Study" description="INNER, OUTER, CROSS, NATURAL, SELF JOIN 빠른 참조" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>JOIN 레퍼런스</h1>
        <p className="hero-subtitle">INNER · OUTER · CROSS · NATURAL · SELF JOIN</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SampleDataPanel />

        <h2>JOIN 유형 총정리</h2>
        <table>
          <thead>
            <tr><th>JOIN</th><th>일치 행</th><th>불일치 행</th><th>NULL</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>INNER JOIN</strong></td><td>O</td><td>X</td><td>제외</td></tr>
            <tr><td><strong>LEFT OUTER</strong></td><td>O</td><td>왼쪽 포함</td><td>오른쪽 NULL</td></tr>
            <tr><td><strong>RIGHT OUTER</strong></td><td>O</td><td>오른쪽 포함</td><td>왼쪽 NULL</td></tr>
            <tr><td><strong>FULL OUTER</strong></td><td>O</td><td>양쪽 포함</td><td>양쪽 NULL</td></tr>
            <tr><td><strong>CROSS JOIN</strong></td><td>전체 조합</td><td>-</td><td>-</td></tr>
            <tr><td><strong>NATURAL JOIN</strong></td><td>O (동일 컬럼)</td><td>X</td><td>제외</td></tr>
          </tbody>
        </table>

        <h2>INNER JOIN</h2>
        <SqlBlock
          title="INNER JOIN"
          sql={`-- ANSI 표준
SELECT e.사원명, d.부서명
FROM 사원 e INNER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;`}
          columns={['사원명', '부서명']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀' },
            { 사원명: '이부장', 부서명: '개발팀' },
            { 사원명: '박과장', 부서명: '개발팀' },
            { 사원명: '최대리', 부서명: '인사팀' },
            { 사원명: '정사원', 부서명: '인사팀' },
            { 사원명: '한대리', 부서명: '영업팀' },
            { 사원명: '오사원', 부서명: '영업팀' },
          ]}
        />

        <h2>LEFT OUTER JOIN</h2>
        <SqlBlock
          title="LEFT OUTER JOIN"
          sql={`-- ANSI 표준 (모든 사원 + 부서 있으면 부서명)
SELECT e.사원명, d.부서명
FROM 사원 e LEFT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통 (+는 부족한 쪽)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`}
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

        <h2>RIGHT OUTER JOIN</h2>
        <SqlBlock
          title="RIGHT OUTER JOIN"
          sql={`-- ANSI 표준 (모든 부서 + 사원 있으면 사원명)
SELECT e.사원명, d.부서명
FROM 사원 e RIGHT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호(+) = d.부서번호;`}
          columns={['사원명', '부서명']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀' },
            { 사원명: '이부장', 부서명: '개발팀' },
            { 사원명: '박과장', 부서명: '개발팀' },
            { 사원명: '최대리', 부서명: '인사팀' },
            { 사원명: '정사원', 부서명: '인사팀' },
            { 사원명: '한대리', 부서명: '영업팀' },
            { 사원명: '오사원', 부서명: '영업팀' },
            { 사원명: null, 부서명: '기획팀' },
          ]}
        />

        <h2>FULL OUTER JOIN</h2>
        <SqlBlock
          title="FULL OUTER JOIN"
          sql={`-- ANSI 표준만 가능 (Oracle (+)로는 불가)
SELECT e.사원명, d.부서명
FROM 사원 e FULL OUTER JOIN 부서 d
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
            { 사원명: null, 부서명: '기획팀' },
          ]}
        />

        <h2>CROSS JOIN</h2>
        <SqlBlock
          title="CROSS JOIN (일부만 표시)"
          sql={`-- 카테시안 곱 (M x N 행)
SELECT e.사원명, d.부서명
FROM 사원 e CROSS JOIN 부서 d;

-- Oracle 전통 (WHERE 없이)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d;`}
          description="전체 8 × 4 = 32행 중 일부만 표시합니다."
          columns={['사원명', '부서명']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀' },
            { 사원명: '김사장', 부서명: '인사팀' },
            { 사원명: '김사장', 부서명: '영업팀' },
            { 사원명: '김사장', 부서명: '기획팀' },
            { 사원명: '이부장', 부서명: '개발팀' },
            { 사원명: '이부장', 부서명: '인사팀' },
            { 사원명: '...', 부서명: '...' },
          ]}
        />

        <h2>NATURAL JOIN</h2>
        <SqlBlock
          title="NATURAL JOIN"
          sql={`-- 동일 컬럼명으로 자동 JOIN
SELECT 사원명, 부서명
FROM 사원 NATURAL JOIN 부서;

-- 주의: 동일 이름 컬럼에 테이블 별칭 사용 불가!
-- 잘못된 예: SELECT e.부서번호 FROM 사원 e NATURAL JOIN 부서 d;`}
          columns={['사원명', '부서명']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀' },
            { 사원명: '이부장', 부서명: '개발팀' },
            { 사원명: '박과장', 부서명: '개발팀' },
            { 사원명: '최대리', 부서명: '인사팀' },
            { 사원명: '정사원', 부서명: '인사팀' },
            { 사원명: '한대리', 부서명: '영업팀' },
            { 사원명: '오사원', 부서명: '영업팀' },
          ]}
        />

        <h2>USING 절</h2>
        <SqlBlock
          title="USING 절"
          sql={`-- 같은 이름 컬럼 지정
SELECT 사원명, 부서명
FROM 사원 JOIN 부서
USING (부서번호);

-- USING 컬럼에 테이블 별칭 불가!
-- SELECT e.부서번호  -- 오류!
-- SELECT 부서번호    -- 정상`}
          columns={['사원명', '부서명']}
          rows={[
            { 사원명: '김사장', 부서명: '개발팀' },
            { 사원명: '이부장', 부서명: '개발팀' },
            { 사원명: '박과장', 부서명: '개발팀' },
            { 사원명: '최대리', 부서명: '인사팀' },
            { 사원명: '정사원', 부서명: '인사팀' },
            { 사원명: '한대리', 부서명: '영업팀' },
            { 사원명: '오사원', 부서명: '영업팀' },
          ]}
        />

        <h2>SELF JOIN</h2>
        <SqlBlock
          title="SELF JOIN"
          sql={`-- 같은 테이블을 자기 자신과 JOIN
SELECT e.사원명, m.사원명 AS 관리자명
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

        <h2>다중 테이블 JOIN</h2>
        <SqlBlock
          title="다중 테이블 JOIN"
          sql={`-- 3개 이상 테이블 JOIN
SELECT e.사원명, d.부서명, l.지역명
FROM 사원 e
  JOIN 부서 d ON e.부서번호 = d.부서번호
  JOIN 지역 l ON d.지역번호 = l.지역번호
WHERE l.국가 = '한국';`}
        />

        <h2>ON vs WHERE (OUTER JOIN 시 차이)</h2>
        <SqlBlock
          title="ON 조건 vs WHERE 조건"
          sql={`-- ON 조건: JOIN 전에 필터 (OUTER 결과에 영향 없음)
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호 AND d.지역 = '서울';
-- → 모든 사원 + 서울 부서만 매칭 (비서울 부서 사원도 나옴, NULL)

-- WHERE 조건: JOIN 후에 필터
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호
WHERE d.지역 = '서울';
-- → 서울 부서 사원만 (LEFT JOIN이 INNER JOIN처럼 동작)`}
        />

        <div className="info-box">
          <strong>OUTER JOIN에서 ON vs WHERE:</strong><br/>
          • ON 조건: JOIN 대상을 제한 (OUTER 효과 유지)<br/>
          • WHERE 조건: 최종 결과를 필터 (OUTER 효과 사라질 수 있음)<br/>
          이 차이를 묻는 문제가 자주 출제됩니다!
        </div>
      </article>

      <LessonComplete lessonId="sqlref-join" />
    </div>
  );
}
