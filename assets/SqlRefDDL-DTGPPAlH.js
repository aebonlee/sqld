import{j as d}from"./index-C3WyhbPM.js";import{S as e}from"./SEOHead-DbPs0jTL.js";import{L as s}from"./LessonComplete-CfvQuTk8.js";function h(){return d.jsxs("div",{className:"lesson-page",children:[d.jsx(e,{title:"DDL 레퍼런스 - SQLD Study",description:"CREATE, ALTER, DROP, TRUNCATE, RENAME 빠른 참조"}),d.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[d.jsx("h1",{children:"DDL 레퍼런스"}),d.jsx("p",{className:"hero-subtitle",children:"CREATE · ALTER · DROP · TRUNCATE · RENAME"})]}),d.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[d.jsx("h2",{children:"CREATE TABLE"}),d.jsx("pre",{children:d.jsx("code",{children:`CREATE TABLE 테이블명 (
  컬럼1  데이터타입  [제약조건],
  컬럼2  데이터타입  [DEFAULT 값],
  ...
  [CONSTRAINT 제약조건명 제약조건종류 (컬럼)]
);`})}),d.jsx("h3",{children:"데이터 타입"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Oracle"}),d.jsx("th",{children:"SQL Server"}),d.jsx("th",{children:"설명"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"VARCHAR2(n)"}),d.jsx("td",{children:"VARCHAR(n)"}),d.jsx("td",{children:"가변 길이 문자열"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"CHAR(n)"}),d.jsx("td",{children:"CHAR(n)"}),d.jsx("td",{children:"고정 길이 문자열"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"NUMBER(p,s)"}),d.jsx("td",{children:"DECIMAL(p,s)"}),d.jsx("td",{children:"숫자"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"DATE"}),d.jsx("td",{children:"DATETIME"}),d.jsx("td",{children:"날짜/시간"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"CLOB"}),d.jsx("td",{children:"TEXT"}),d.jsx("td",{children:"대용량 문자열"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"BLOB"}),d.jsx("td",{children:"IMAGE"}),d.jsx("td",{children:"대용량 바이너리"})]})]})]}),d.jsx("h3",{children:"제약조건"}),d.jsx("pre",{children:d.jsx("code",{children:`CREATE TABLE 사원 (
  사원번호 NUMBER       CONSTRAINT pk_emp PRIMARY KEY,
  사원명   VARCHAR2(20) NOT NULL,
  이메일   VARCHAR2(50) UNIQUE,
  부서번호 NUMBER       REFERENCES 부서(부서번호),
  급여     NUMBER       CHECK (급여 > 0),
  입사일   DATE         DEFAULT SYSDATE
);`})}),d.jsx("h2",{children:"ALTER TABLE"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 컬럼 추가
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
ALTER TABLE 테이블 DROP CONSTRAINT 제약명;`})}),d.jsx("h2",{children:"DROP TABLE"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 테이블 삭제
DROP TABLE 테이블명;

-- CASCADE CONSTRAINTS: FK 제약조건도 함께 삭제 (Oracle)
DROP TABLE 테이블명 CASCADE CONSTRAINTS;

-- PURGE: 휴지통에 넣지 않고 완전 삭제 (Oracle)
DROP TABLE 테이블명 PURGE;`})}),d.jsx("h2",{children:"TRUNCATE TABLE"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 테이블 데이터 전체 삭제 (구조 유지)
TRUNCATE TABLE 테이블명;`})}),d.jsx("h3",{children:"DROP vs TRUNCATE vs DELETE 비교"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"구분"}),d.jsx("th",{children:"DROP"}),d.jsx("th",{children:"TRUNCATE"}),d.jsx("th",{children:"DELETE"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"분류"}),d.jsx("td",{children:"DDL"}),d.jsx("td",{children:"DDL"}),d.jsx("td",{children:"DML"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"테이블"}),d.jsx("td",{children:"삭제"}),d.jsx("td",{children:"유지"}),d.jsx("td",{children:"유지"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"데이터"}),d.jsx("td",{children:"삭제"}),d.jsx("td",{children:"삭제"}),d.jsx("td",{children:"삭제"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"저장공간"}),d.jsx("td",{children:"해제"}),d.jsx("td",{children:"해제"}),d.jsx("td",{children:"유지"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"ROLLBACK"}),d.jsx("td",{children:"불가"}),d.jsx("td",{children:"불가"}),d.jsx("td",{children:"가능"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"WHERE"}),d.jsx("td",{children:"불가"}),d.jsx("td",{children:"불가"}),d.jsx("td",{children:"가능"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"로그"}),d.jsx("td",{children:"최소"}),d.jsx("td",{children:"최소"}),d.jsx("td",{children:"행 단위"})]})]})]}),d.jsx("h2",{children:"RENAME"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 테이블 이름 변경 (Oracle)
RENAME 원래테이블명 TO 새테이블명;

-- SQL Server
EXEC sp_rename '원래테이블명', '새테이블명';`})}),d.jsx("h2",{children:"CREATE AS SELECT (CTAS)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 기존 테이블 복사 (데이터 포함)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블;

-- 구조만 복사 (데이터 제외)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블 WHERE 1=2;`})}),d.jsxs("div",{className:"info-box",children:[d.jsx("strong",{children:"CTAS 주의:"})," NOT NULL을 제외한 제약조건(PK, FK, UNIQUE, CHECK 등)은 복사되지 않습니다."]})]}),d.jsx(s,{lessonId:"sqlref-ddl"})]})}export{h as default};
