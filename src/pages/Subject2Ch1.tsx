import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';

export default function Subject2Ch1() {
  return (
    <div className="lesson-page">
      <SEOHead title="1장: SQL 기본 - SQLD Study" description="DDL, DML, TCL, WHERE 절, 함수, GROUP BY, ORDER BY" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>1장: SQL 기본</h1>
        <p className="hero-subtitle">DDL, DML, TCL, WHERE, 함수, GROUP BY, ORDER BY</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SampleDataPanel />

        <h2>1. SQL 개요</h2>
        <p>
          SQL(Structured Query Language)은 관계형 데이터베이스에서
          데이터를 관리하기 위한 <strong>표준 언어</strong>입니다.
        </p>

        <h3>SQL 분류</h3>
        <table>
          <thead>
            <tr><th>분류</th><th>명령어</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>DDL</strong></td><td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td><td>데이터 구조 정의</td></tr>
            <tr><td><strong>DML</strong></td><td>SELECT, INSERT, UPDATE, DELETE</td><td>데이터 조작</td></tr>
            <tr><td><strong>DCL</strong></td><td>GRANT, REVOKE</td><td>권한 관리</td></tr>
            <tr><td><strong>TCL</strong></td><td>COMMIT, ROLLBACK, SAVEPOINT</td><td>트랜잭션 제어</td></tr>
          </tbody>
        </table>

        <h2>2. DDL (Data Definition Language)</h2>

        <h3>CREATE TABLE</h3>
        <SqlBlock
          title="CREATE TABLE"
          sql={`CREATE TABLE 사원 (
  사원번호  NUMBER       PRIMARY KEY,
  사원명    VARCHAR2(20) NOT NULL,
  부서번호  NUMBER       REFERENCES 부서(부서번호),
  입사일    DATE         DEFAULT SYSDATE,
  연봉      NUMBER
);`}
        />

        <h3>주요 제약조건</h3>
        <table>
          <thead>
            <tr><th>제약조건</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>PRIMARY KEY</strong></td><td>유일 + NOT NULL (테이블당 1개)</td></tr>
            <tr><td><strong>UNIQUE</strong></td><td>유일하지만 NULL 허용</td></tr>
            <tr><td><strong>NOT NULL</strong></td><td>NULL 불허</td></tr>
            <tr><td><strong>FOREIGN KEY</strong></td><td>참조 무결성</td></tr>
            <tr><td><strong>CHECK</strong></td><td>값 범위 제한</td></tr>
            <tr><td><strong>DEFAULT</strong></td><td>기본값 설정</td></tr>
          </tbody>
        </table>

        <h3>ALTER TABLE</h3>
        <SqlBlock
          title="ALTER TABLE"
          sql={`-- 컬럼 추가
ALTER TABLE 사원 ADD (이메일 VARCHAR2(50));

-- 컬럼 수정
ALTER TABLE 사원 MODIFY (사원명 VARCHAR2(30));

-- 컬럼 삭제
ALTER TABLE 사원 DROP COLUMN 이메일;

-- 컬럼 이름 변경
ALTER TABLE 사원 RENAME COLUMN 연봉 TO 급여;`}
        />

        <h3>DROP vs TRUNCATE vs DELETE</h3>
        <table>
          <thead>
            <tr><th>명령어</th><th>분류</th><th>ROLLBACK</th><th>WHERE</th><th>저장 공간</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>DROP</strong></td><td>DDL</td><td>불가</td><td>불가</td><td>해제</td></tr>
            <tr><td><strong>TRUNCATE</strong></td><td>DDL</td><td>불가</td><td>불가</td><td>해제</td></tr>
            <tr><td><strong>DELETE</strong></td><td>DML</td><td>가능</td><td>가능</td><td>유지</td></tr>
          </tbody>
        </table>

        <h2>3. DML (Data Manipulation Language)</h2>

        <h3>SELECT</h3>
        <SqlBlock
          title="SELECT"
          sql={`SELECT 사원명, 부서번호, 연봉
FROM 사원
WHERE 부서번호 = 10
ORDER BY 연봉 DESC;`}
          columns={['사원명', '부서번호', '연봉']}
          rows={[
            { 사원명: '김사장', 부서번호: 10, 연봉: 9000 },
            { 사원명: '이부장', 부서번호: 10, 연봉: 7000 },
            { 사원명: '박과장', 부서번호: 10, 연봉: 5000 },
          ]}
        />

        <h3>INSERT</h3>
        <SqlBlock
          title="INSERT"
          sql={`-- 전체 컬럼 입력
INSERT INTO 사원 VALUES (1001, '홍길동', 10, SYSDATE, 5000);

-- 특정 컬럼만 입력
INSERT INTO 사원 (사원번호, 사원명) VALUES (1002, '김철수');`}
        />

        <h3>UPDATE</h3>
        <SqlBlock
          title="UPDATE"
          sql={`UPDATE 사원
SET 연봉 = 6000, 부서번호 = 20
WHERE 사원번호 = 1001;`}
        />

        <h3>DELETE</h3>
        <SqlBlock
          title="DELETE"
          sql={`DELETE FROM 사원
WHERE 부서번호 = 30;`}
        />

        <h2>4. WHERE 절</h2>

        <h3>비교 연산자</h3>
        <table>
          <thead>
            <tr><th>연산자</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td>=</td><td>같다</td><td>WHERE 부서 = 10</td></tr>
            <tr><td>&lt;&gt;, !=</td><td>같지 않다</td><td>WHERE 부서 &lt;&gt; 10</td></tr>
            <tr><td>BETWEEN</td><td>범위</td><td>WHERE 연봉 BETWEEN 3000 AND 5000</td></tr>
            <tr><td>IN</td><td>목록</td><td>WHERE 부서 IN (10, 20, 30)</td></tr>
            <tr><td>LIKE</td><td>패턴</td><td>WHERE 이름 LIKE &apos;김%&apos;</td></tr>
            <tr><td>IS NULL</td><td>NULL 여부</td><td>WHERE 연봉 IS NULL</td></tr>
          </tbody>
        </table>

        <h3>LIKE 패턴</h3>
        <ul>
          <li><code>%</code>: 0개 이상의 문자</li>
          <li><code>_</code>: 정확히 1개의 문자</li>
          <li><code>&apos;김%&apos;</code>: 김으로 시작</li>
          <li><code>&apos;%수&apos;</code>: 수로 끝남</li>
          <li><code>&apos;_길_&apos;</code>: 3글자, 가운데가 &apos;길&apos;</li>
        </ul>

        <h2>5. 함수 (Functions)</h2>

        <h3>문자열 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>예시</th><th>결과</th></tr>
          </thead>
          <tbody>
            <tr><td>UPPER/LOWER</td><td>대/소문자 변환</td><td>UPPER(&apos;hello&apos;)</td><td>HELLO</td></tr>
            <tr><td>SUBSTR</td><td>부분 문자열</td><td>SUBSTR(&apos;HELLO&apos;, 2, 3)</td><td>ELL</td></tr>
            <tr><td>LENGTH/LEN</td><td>문자열 길이</td><td>LENGTH(&apos;HELLO&apos;)</td><td>5</td></tr>
            <tr><td>TRIM</td><td>공백 제거</td><td>TRIM(&apos; HI &apos;)</td><td>HI</td></tr>
            <tr><td>REPLACE</td><td>문자 치환</td><td>REPLACE(&apos;ABC&apos;,&apos;B&apos;,&apos;X&apos;)</td><td>AXC</td></tr>
            <tr><td>LPAD/RPAD</td><td>패딩</td><td>LPAD(&apos;HI&apos;, 5, &apos;*&apos;)</td><td>***HI</td></tr>
          </tbody>
        </table>

        <h3>숫자 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>예시</th><th>결과</th></tr>
          </thead>
          <tbody>
            <tr><td>ROUND</td><td>반올림</td><td>ROUND(3.567, 1)</td><td>3.6</td></tr>
            <tr><td>TRUNC</td><td>버림</td><td>TRUNC(3.567, 1)</td><td>3.5</td></tr>
            <tr><td>CEIL/CEILING</td><td>올림</td><td>CEIL(3.1)</td><td>4</td></tr>
            <tr><td>FLOOR</td><td>내림</td><td>FLOOR(3.9)</td><td>3</td></tr>
            <tr><td>MOD</td><td>나머지</td><td>MOD(7, 3)</td><td>1</td></tr>
            <tr><td>ABS</td><td>절댓값</td><td>ABS(-5)</td><td>5</td></tr>
          </tbody>
        </table>

        <h3>NULL 관련 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>NVL(a, b)</strong></td><td>a가 NULL이면 b 반환</td><td>NVL(연봉, 0)</td></tr>
            <tr><td><strong>NVL2(a, b, c)</strong></td><td>a가 NULL이면 c, 아니면 b</td><td>NVL2(연봉, &apos;있음&apos;, &apos;없음&apos;)</td></tr>
            <tr><td><strong>NULLIF(a, b)</strong></td><td>a=b이면 NULL, 아니면 a</td><td>NULLIF(10, 10) → NULL</td></tr>
            <tr><td><strong>COALESCE(a,b,...)</strong></td><td>첫 번째 NOT NULL 반환</td><td>COALESCE(NULL, NULL, 3) → 3</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>NULL 연산 핵심:</strong><br/>
          • NULL + 숫자 = NULL<br/>
          • NULL = NULL → FALSE (비교 불가)<br/>
          • NULL과 비교는 반드시 IS NULL / IS NOT NULL 사용<br/>
          • COUNT(*)는 NULL 포함, COUNT(컬럼)은 NULL 제외
        </div>

        <h2>6. GROUP BY와 집계 함수</h2>

        <h3>집계 함수</h3>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>NULL 처리</th></tr>
          </thead>
          <tbody>
            <tr><td>COUNT(*)</td><td>전체 행 수</td><td>NULL 포함</td></tr>
            <tr><td>COUNT(컬럼)</td><td>NOT NULL 행 수</td><td>NULL 제외</td></tr>
            <tr><td>SUM(컬럼)</td><td>합계</td><td>NULL 제외</td></tr>
            <tr><td>AVG(컬럼)</td><td>평균</td><td>NULL 제외</td></tr>
            <tr><td>MAX(컬럼)</td><td>최대값</td><td>NULL 제외</td></tr>
            <tr><td>MIN(컬럼)</td><td>최소값</td><td>NULL 제외</td></tr>
          </tbody>
        </table>

        <h3>GROUP BY + HAVING</h3>
        <SqlBlock
          title="GROUP BY + HAVING"
          sql={`SELECT 부서번호, COUNT(*) AS 인원수, AVG(연봉) AS 평균연봉
FROM 사원
WHERE 입사일 >= '2020-01-01'
GROUP BY 부서번호
HAVING COUNT(*) >= 5
ORDER BY 평균연봉 DESC;`}
          description="입사일 조건을 만족하고 인원 5명 이상인 부서만 (현재 데이터에선 해당 없음)"
        />

        <div className="info-box">
          <strong>WHERE vs HAVING:</strong><br/>
          • WHERE: 그룹화 전에 행을 필터링 (집계함수 사용 불가)<br/>
          • HAVING: 그룹화 후에 그룹을 필터링 (집계함수 사용 가능)
        </div>

        <h2>7. ORDER BY</h2>
        <SqlBlock
          title="ORDER BY"
          sql={`SELECT 사원명, 부서번호, 연봉
FROM 사원
ORDER BY 부서번호 ASC, 연봉 DESC;

-- 컬럼 번호로도 가능
ORDER BY 2, 3 DESC;

-- NULL 정렬: Oracle에서 NULL은 가장 큰 값으로 취급
-- ASC: NULL이 마지막
-- DESC: NULL이 처음`}
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
        />

        <h2>8. TCL (Transaction Control Language)</h2>
        <table>
          <thead>
            <tr><th>명령어</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>COMMIT</strong></td><td>변경사항 영구 반영</td></tr>
            <tr><td><strong>ROLLBACK</strong></td><td>변경사항 취소</td></tr>
            <tr><td><strong>SAVEPOINT</strong></td><td>중간 저장점 설정</td></tr>
          </tbody>
        </table>

        <SqlBlock
          title="TCL 예시"
          sql={`INSERT INTO 사원 VALUES (1003, '박영희', 10, SYSDATE, 4000);
SAVEPOINT SP1;

UPDATE 사원 SET 연봉 = 5000 WHERE 사원번호 = 1003;
SAVEPOINT SP2;

DELETE FROM 사원 WHERE 사원번호 = 1003;

ROLLBACK TO SP1;  -- DELETE와 UPDATE 취소, INSERT만 유지
COMMIT;           -- INSERT 영구 반영`}
        />

        <div className="info-box">
          <strong>DDL은 Auto COMMIT:</strong> CREATE, ALTER, DROP, TRUNCATE 실행 시
          자동으로 COMMIT됩니다. ROLLBACK 불가!
        </div>
      </article>

      <LessonComplete lessonId="subject2-ch1" />
    </div>
  );
}
