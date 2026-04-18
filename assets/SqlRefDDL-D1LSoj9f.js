import{j as s}from"./index-CVYxwxn-.js";import{S as e}from"./SEOHead-C5i4rkVb.js";import{L as r}from"./LessonComplete-PFnrpnjC.js";import{S as l,a as d}from"./SampleDataPanel-CyeJt6gx.js";function c(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(e,{title:"DDL 레퍼런스 - SQLD Study",description:"CREATE, ALTER, DROP, TRUNCATE, RENAME 빠른 참조"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"DDL 레퍼런스"}),s.jsx("p",{className:"hero-subtitle",children:"CREATE · ALTER · DROP · TRUNCATE · RENAME"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx(l,{}),s.jsx("h2",{children:"CREATE TABLE"}),s.jsx(d,{title:"CREATE TABLE",sql:`CREATE TABLE 테이블명 (
  컬럼1  데이터타입  [제약조건],
  컬럼2  데이터타입  [DEFAULT 값],
  ...
  [CONSTRAINT 제약조건명 제약조건종류 (컬럼)]
);`}),s.jsx("h3",{children:"데이터 타입"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Oracle"}),s.jsx("th",{children:"SQL Server"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"VARCHAR2(n)"}),s.jsx("td",{children:"VARCHAR(n)"}),s.jsx("td",{children:"가변 길이 문자열"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"CHAR(n)"}),s.jsx("td",{children:"CHAR(n)"}),s.jsx("td",{children:"고정 길이 문자열"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"NUMBER(p,s)"}),s.jsx("td",{children:"DECIMAL(p,s)"}),s.jsx("td",{children:"숫자"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"DATE"}),s.jsx("td",{children:"DATETIME"}),s.jsx("td",{children:"날짜/시간"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"CLOB"}),s.jsx("td",{children:"TEXT"}),s.jsx("td",{children:"대용량 문자열"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"BLOB"}),s.jsx("td",{children:"IMAGE"}),s.jsx("td",{children:"대용량 바이너리"})]})]})]}),s.jsx("h3",{children:"제약조건"}),s.jsx(d,{title:"제약조건 예시",sql:`CREATE TABLE 사원 (
  사원번호 NUMBER       CONSTRAINT pk_emp PRIMARY KEY,
  사원명   VARCHAR2(20) NOT NULL,
  이메일   VARCHAR2(50) UNIQUE,
  부서번호 NUMBER       REFERENCES 부서(부서번호),
  급여     NUMBER       CHECK (급여 > 0),
  입사일   DATE         DEFAULT SYSDATE
);`}),s.jsx("h2",{children:"ALTER TABLE"}),s.jsx(d,{title:"ALTER TABLE",sql:`-- 컬럼 추가
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
ALTER TABLE 테이블 DROP CONSTRAINT 제약명;`}),s.jsx("h2",{children:"DROP TABLE"}),s.jsx(d,{title:"DROP TABLE",sql:`-- 테이블 삭제
DROP TABLE 테이블명;

-- CASCADE CONSTRAINTS: FK 제약조건도 함께 삭제 (Oracle)
DROP TABLE 테이블명 CASCADE CONSTRAINTS;

-- PURGE: 휴지통에 넣지 않고 완전 삭제 (Oracle)
DROP TABLE 테이블명 PURGE;`}),s.jsx("h2",{children:"TRUNCATE TABLE"}),s.jsx(d,{title:"TRUNCATE TABLE",sql:`-- 테이블 데이터 전체 삭제 (구조 유지)
TRUNCATE TABLE 테이블명;`}),s.jsx("h3",{children:"DROP vs TRUNCATE vs DELETE 비교"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"DROP"}),s.jsx("th",{children:"TRUNCATE"}),s.jsx("th",{children:"DELETE"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"분류"}),s.jsx("td",{children:"DDL"}),s.jsx("td",{children:"DDL"}),s.jsx("td",{children:"DML"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"테이블"}),s.jsx("td",{children:"삭제"}),s.jsx("td",{children:"유지"}),s.jsx("td",{children:"유지"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"데이터"}),s.jsx("td",{children:"삭제"}),s.jsx("td",{children:"삭제"}),s.jsx("td",{children:"삭제"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"저장공간"}),s.jsx("td",{children:"해제"}),s.jsx("td",{children:"해제"}),s.jsx("td",{children:"유지"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ROLLBACK"}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"WHERE"}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"로그"}),s.jsx("td",{children:"최소"}),s.jsx("td",{children:"최소"}),s.jsx("td",{children:"행 단위"})]})]})]}),s.jsx("h2",{children:"RENAME"}),s.jsx(d,{title:"RENAME",sql:`-- 테이블 이름 변경 (Oracle)
RENAME 원래테이블명 TO 새테이블명;

-- SQL Server
EXEC sp_rename '원래테이블명', '새테이블명';`}),s.jsx("h2",{children:"CREATE AS SELECT (CTAS)"}),s.jsx(d,{title:"CTAS",sql:`-- 기존 테이블 복사 (데이터 포함)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블;

-- 구조만 복사 (데이터 제외)
CREATE TABLE 새테이블 AS
SELECT * FROM 원본테이블 WHERE 1=2;`}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"CTAS 주의:"})," NOT NULL을 제외한 제약조건(PK, FK, UNIQUE, CHECK 등)은 복사되지 않습니다."]})]}),s.jsx(r,{lessonId:"sqlref-ddl"})]})}export{c as default};
