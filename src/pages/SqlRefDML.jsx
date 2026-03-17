import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';

export default function SqlRefDML() {
  return (
    <div className="lesson-page">
      <SEOHead title="DML 레퍼런스 - SQLD Study" description="SELECT, INSERT, UPDATE, DELETE, MERGE 빠른 참조" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>DML 레퍼런스</h1>
        <p className="hero-subtitle">SELECT · INSERT · UPDATE · DELETE · MERGE</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SampleDataPanel />

        <h2>SELECT</h2>
        <SqlBlock
          title="SELECT 기본 구문"
          sql={`-- 기본 구문
SELECT [DISTINCT] 컬럼1, 컬럼2, ...
FROM 테이블
[WHERE 조건]
[GROUP BY 컬럼]
[HAVING 그룹조건]
[ORDER BY 컬럼 [ASC|DESC]];

-- 실행 순서
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`}
          columns={['사원명', '부서번호', '연봉']}
          rows={[
            { 사원명: '김사장', 부서번호: 10, 연봉: 9000 },
            { 사원명: '이부장', 부서번호: 10, 연봉: 7000 },
            { 사원명: '박과장', 부서번호: 10, 연봉: 5000 },
            { 사원명: '최대리', 부서번호: 20, 연봉: 3500 },
            { 사원명: '정사원', 부서번호: 20, 연봉: 2800 },
            { 사원명: '한대리', 부서번호: 30, 연봉: 3200 },
            { 사원명: '오사원', 부서번호: 30, 연봉: 2500 },
            { 사원명: '강인턴', 부서번호: null, 연봉: null },
          ]}
          description="SELECT * FROM 사원 실행 결과"
        />

        <h3>SELECT 주요 키워드</h3>
        <table>
          <thead>
            <tr><th>키워드</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>DISTINCT</strong></td><td>중복 제거</td><td>SELECT DISTINCT 부서</td></tr>
            <tr><td><strong>ALL</strong></td><td>중복 포함 (기본값)</td><td>SELECT ALL 부서</td></tr>
            <tr><td><strong>AS</strong></td><td>별칭 (Alias)</td><td>SELECT 이름 AS 사원명</td></tr>
            <tr><td><strong>*</strong></td><td>전체 컬럼</td><td>SELECT *</td></tr>
          </tbody>
        </table>

        <h3>별칭 (Alias) 규칙</h3>
        <SqlBlock
          title="Alias"
          sql={`-- 컬럼 별칭
SELECT 사원명 AS "사원 이름",   -- 공백 포함 시 큰따옴표
       연봉 * 12 연봉합계,       -- AS 생략 가능
       부서번호 부서              -- AS 생략 가능

-- 테이블 별칭
FROM 사원 e, 부서 d              -- AS 생략 (Oracle은 테이블에 AS 사용 불가)`}
        />

        <h2>INSERT</h2>
        <SqlBlock
          title="INSERT"
          sql={`-- 단일 행 삽입
INSERT INTO 테이블 (컬럼1, 컬럼2, ...)
VALUES (값1, 값2, ...);

-- 전체 컬럼 삽입 (컬럼 목록 생략)
INSERT INTO 테이블
VALUES (값1, 값2, ...);

-- SELECT 결과 삽입
INSERT INTO 대상테이블 (컬럼1, 컬럼2)
SELECT 컬럼A, 컬럼B FROM 소스테이블
WHERE 조건;`}
        />

        <h2>UPDATE</h2>
        <SqlBlock
          title="UPDATE"
          sql={`UPDATE 테이블
SET 컬럼1 = 값1,
    컬럼2 = 값2
[WHERE 조건];

-- 서브쿼리 활용
UPDATE 사원
SET 부서명 = (SELECT 부서명 FROM 부서
              WHERE 부서.부서번호 = 사원.부서번호)
WHERE EXISTS (SELECT 1 FROM 부서
              WHERE 부서.부서번호 = 사원.부서번호);`}
        />

        <h2>DELETE</h2>
        <SqlBlock
          title="DELETE"
          sql={`DELETE [FROM] 테이블
[WHERE 조건];

-- 서브쿼리 활용
DELETE FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서
                   WHERE 지역 = '제주');`}
        />

        <h2>MERGE</h2>
        <SqlBlock
          title="MERGE"
          sql={`MERGE INTO 대상테이블 T
USING 소스테이블 S
ON (T.키 = S.키)
WHEN MATCHED THEN
  UPDATE SET T.컬럼1 = S.컬럼1
  [DELETE WHERE 조건]
WHEN NOT MATCHED THEN
  INSERT (T.키, T.컬럼1)
  VALUES (S.키, S.컬럼1);`}
        />

        <h2>WHERE 절 연산자</h2>

        <h3>비교 연산자</h3>
        <table>
          <thead>
            <tr><th>연산자</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>=, &lt;&gt;, !=, &lt;, &gt;, &lt;=, &gt;=</td><td>비교</td></tr>
            <tr><td>BETWEEN a AND b</td><td>a 이상 b 이하</td></tr>
            <tr><td>IN (값1, 값2, ...)</td><td>목록 중 하나</td></tr>
            <tr><td>LIKE &apos;패턴&apos;</td><td>패턴 매칭 (%: 0+문자, _: 1문자)</td></tr>
            <tr><td>IS NULL / IS NOT NULL</td><td>NULL 판별</td></tr>
          </tbody>
        </table>

        <h3>논리 연산자</h3>
        <table>
          <thead>
            <tr><th>연산자</th><th>설명</th><th>우선순위</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>NOT</strong></td><td>부정</td><td>1 (가장 높음)</td></tr>
            <tr><td><strong>AND</strong></td><td>그리고</td><td>2</td></tr>
            <tr><td><strong>OR</strong></td><td>또는</td><td>3 (가장 낮음)</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>연산자 우선순위:</strong> NOT &gt; AND &gt; OR<br/>
          괄호를 사용하여 우선순위를 명확히 하는 것이 좋습니다.
        </div>

        <h2>ORDER BY</h2>
        <SqlBlock
          title="ORDER BY"
          sql={`-- 기본 정렬
ORDER BY 컬럼1 ASC, 컬럼2 DESC;

-- 컬럼 번호로 정렬
ORDER BY 2, 3 DESC;

-- NULL 정렬 제어
ORDER BY 컬럼 NULLS FIRST;  -- NULL을 처음에
ORDER BY 컬럼 NULLS LAST;   -- NULL을 마지막에

-- Oracle: NULL은 가장 큰 값 (ASC→마지막, DESC→처음)
-- SQL Server: NULL은 가장 작은 값 (ASC→처음, DESC→마지막)`}
          columns={['사원명', '연봉']}
          rows={[
            { 사원명: '김사장', 연봉: 9000 },
            { 사원명: '이부장', 연봉: 7000 },
            { 사원명: '박과장', 연봉: 5000 },
            { 사원명: '최대리', 연봉: 3500 },
            { 사원명: '한대리', 연봉: 3200 },
            { 사원명: '정사원', 연봉: 2800 },
            { 사원명: '오사원', 연봉: 2500 },
            { 사원명: '강인턴', 연봉: null },
          ]}
          description="ORDER BY 연봉 DESC 결과 (Oracle: NULL이 처음)"
        />
      </article>

      <LessonComplete lessonId="sqlref-dml" />
    </div>
  );
}
