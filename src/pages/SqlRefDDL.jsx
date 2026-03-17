import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function SqlRefDDL() {
  return (
    <div className="lesson-page">
      <SEOHead title="DDL 레퍼런스 - SQLD Study" description="CREATE, ALTER, DROP, TRUNCATE, RENAME 빠른 참조" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>DDL 레퍼런스</h1>
        <p className="hero-subtitle">CREATE · ALTER · DROP · TRUNCATE · RENAME</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>CREATE TABLE</h2>
        <pre><code>{`CREATE TABLE 테이블명 (
  컬럼1  데이터타입  [제약조건],
  컬럼2  데이터타입  [DEFAULT 값],
  ...
  [CONSTRAINT 제약조건명 제약조건종류 (컬럼)]
);`}</code></pre>

        <h3>데이터 타입</h3>
        <table>
          <thead>
            <tr><th>Oracle</th><th>SQL Server</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>VARCHAR2(n)</td><td>VARCHAR(n)</td><td>가변 길이 문자열</td></tr>
            <tr><td>CHAR(n)</td><td>CHAR(n)</td><td>고정 길이 문자열</td></tr>
            <tr><td>NUMBER(p,s)</td><td>DECIMAL(p,s)</td><td>숫자</td></tr>
            <tr><td>DATE</td><td>DATETIME</td><td>날짜/시간</td></tr>
            <tr><td>CLOB</td><td>TEXT</td><td>대용량 문자열</td></tr>
            <tr><td>BLOB</td><td>IMAGE</td><td>대용량 바이너리</td></tr>
          </tbody>
        </table>

        <h3>제약조건</h3>
        <pre><code>{`CREATE TABLE 사원 (
  사원번호 NUMBER       CONSTRAINT pk_emp PRIMARY KEY,
  사원명   VARCHAR2(20) NOT NULL,
  이메일   VARCHAR2(50) UNIQUE,
  부서번호 NUMBER       REFERENCES 부서(부서번호),
  급여     NUMBER       CHECK (급여 > 0),
  입사일   DATE         DEFAULT SYSDATE
);`}</code></pre>

        <h2>ALTER TABLE</h2>
        <pre><code>{`-- 컬럼 추가
ALTER TABLE 테이블 ADD (컬럼명 데이터타입 [제약조건]);

-- 컬럼 수정 (Oracle)
ALTER TABLE 테이블 MODIFY (컬럼명 새데이터타입);

-- 컬럼 수정 (SQL Server)
ALTER TABLE 테이블 ALTER COLUMN 컬럼명 새데이터타입;

-- 컬럼 삭제
ALTER TABLE 테이블 DROP COLUMN 컬럼명;

-- 컬럼 이름 변경 (Oracle)
ALTER TABLE 테이블 RENAME COLUMN 원래이름 TO 새이름;

-- 제약조건 추가
ALTER TABLE 테이블 ADD CONSTRAINT 제약명 PRIMARY KEY (컬럼);
ALTER TABLE 테이블 ADD CONSTRAINT 제약명 FOREIGN KEY (컬럼) REFERENCES 참조테이블(참조컬럼);

-- 제약조건 삭제
ALTER TABLE 테이블 DROP CONSTRAINT 제약명;`}</code></pre>

        <h2>DROP TABLE</h2>
        <pre><code>{`-- 테이블 삭제
DROP TABLE 테이블명;

-- CASCADE CONSTRAINTS: FK 제약조건도 함께 삭제 (Oracle)
DROP TABLE 테이블명 CASCADE CONSTRAINTS;

-- PURGE: 휴지통에 넣지 않고 완전 삭제 (Oracle)
DROP TABLE 테이블명 PURGE;`}</code></pre>

        <h2>TRUNCATE TABLE</h2>
        <pre><code>{`-- 테이블 데이터 전체 삭제 (구조 유지)
TRUNCATE TABLE 테이블명;`}</code></pre>

        <h3>DROP vs TRUNCATE vs DELETE 비교</h3>
        <table>
          <thead>
            <tr><th>구분</th><th>DROP</th><th>TRUNCATE</th><th>DELETE</th></tr>
          </thead>
          <tbody>
            <tr><td>분류</td><td>DDL</td><td>DDL</td><td>DML</td></tr>
            <tr><td>테이블</td><td>삭제</td><td>유지</td><td>유지</td></tr>
            <tr><td>데이터</td><td>삭제</td><td>삭제</td><td>삭제</td></tr>
            <tr><td>저장공간</td><td>해제</td><td>해제</td><td>유지</td></tr>
            <tr><td>ROLLBACK</td><td>불가</td><td>불가</td><td>가능</td></tr>
            <tr><td>WHERE</td><td>불가</td><td>불가</td><td>가능</td></tr>
            <tr><td>로그</td><td>최소</td><td>최소</td><td>행 단위</td></tr>
          </tbody>
        </table>

        <h2>RENAME</h2>
        <pre><code>{`-- 테이블 이름 변경 (Oracle)
RENAME 원래테이블명 TO 새테이블명;

-- SQL Server
EXEC sp_rename '원래테이블명', '새테이블명';`}</code></pre>

        <h2>CREATE AS SELECT (CTAS)</h2>
        <pre><code>{`-- 기존 테이블 복사 (데이터 포함)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블;

-- 구조만 복사 (데이터 제외)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블 WHERE 1=2;`}</code></pre>

        <div className="info-box">
          <strong>CTAS 주의:</strong> NOT NULL을 제외한 제약조건(PK, FK, UNIQUE, CHECK 등)은 복사되지 않습니다.
        </div>
      </article>

      <LessonComplete lessonId="sqlref-ddl" />
    </div>
  );
}
