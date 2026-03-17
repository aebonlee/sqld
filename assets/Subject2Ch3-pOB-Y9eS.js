import{j as s}from"./index-CKSbWWVe.js";import{S as e}from"./SEOHead-B-ITYhk4.js";import{L as r}from"./LessonComplete-hyQiy6b5.js";function i(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(e,{title:"3장: 관리 구문 - SQLD Study",description:"MERGE, TCL, 제약조건, DCL"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"3장: 관리 구문"}),s.jsx("p",{className:"hero-subtitle",children:"MERGE, TCL, 제약조건, DCL"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx("h2",{children:"1. MERGE 문"}),s.jsxs("p",{children:["MERGE는 ",s.jsx("strong",{children:"INSERT와 UPDATE를 동시에"})," 수행하는 DML입니다. 대상 테이블에 데이터가 있으면 UPDATE, 없으면 INSERT합니다."]}),s.jsx("pre",{children:s.jsx("code",{children:`MERGE INTO 대상테이블 T
USING 소스테이블 S
ON (T.키 = S.키)
WHEN MATCHED THEN
  UPDATE SET T.컬럼1 = S.컬럼1, T.컬럼2 = S.컬럼2
WHEN NOT MATCHED THEN
  INSERT (T.키, T.컬럼1, T.컬럼2)
  VALUES (S.키, S.컬럼1, S.컬럼2);`})}),s.jsx("h3",{children:"MERGE 활용 예시"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 일별 매출 집계 테이블 갱신
MERGE INTO 일매출 T
USING (SELECT 매장코드, TRUNC(SYSDATE) AS 매출일,
              SUM(금액) AS 총매출
       FROM 매출상세
       WHERE 매출일자 = TRUNC(SYSDATE)
       GROUP BY 매장코드) S
ON (T.매장코드 = S.매장코드 AND T.매출일 = S.매출일)
WHEN MATCHED THEN
  UPDATE SET T.총매출 = S.총매출
WHEN NOT MATCHED THEN
  INSERT (매장코드, 매출일, 총매출)
  VALUES (S.매장코드, S.매출일, S.총매출);`})}),s.jsx("h2",{children:"2. TCL 심화 (Transaction Control)"}),s.jsx("h3",{children:"트랜잭션의 ACID 특성"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"특성"}),s.jsx("th",{children:"영어"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"원자성"})}),s.jsx("td",{children:"Atomicity"}),s.jsx("td",{children:"전부 실행 또는 전부 취소 (All or Nothing)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"일관성"})}),s.jsx("td",{children:"Consistency"}),s.jsx("td",{children:"트랜잭션 전후 데이터 일관성 유지"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"격리성"})}),s.jsx("td",{children:"Isolation"}),s.jsx("td",{children:"동시 실행 트랜잭션 간 간섭 없음"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"지속성"})}),s.jsx("td",{children:"Durability"}),s.jsx("td",{children:"COMMIT 후 결과 영구 보존"})]})]})]}),s.jsx("h3",{children:"트랜잭션 격리 수준"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"격리 수준"}),s.jsx("th",{children:"Dirty Read"}),s.jsx("th",{children:"Non-Repeatable Read"}),s.jsx("th",{children:"Phantom Read"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"READ UNCOMMITTED"}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"O"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"READ COMMITTED"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"O"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"REPEATABLE READ"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"O"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"SERIALIZABLE"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"X"})]})]})]}),s.jsx("h3",{children:"읽기 이상 현상"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Dirty Read"}),": 커밋되지 않은 데이터를 읽음"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Non-Repeatable Read"}),": 같은 쿼리 반복 시 결과가 다름 (UPDATE)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Phantom Read"}),": 같은 쿼리 반복 시 행이 추가/삭제됨 (INSERT/DELETE)"]})]}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"Oracle 기본 격리 수준:"})," READ COMMITTED",s.jsx("br",{}),s.jsx("strong",{children:"SQL Server 기본 격리 수준:"})," READ COMMITTED"]}),s.jsx("h2",{children:"3. 제약조건 심화"}),s.jsx("h3",{children:"FOREIGN KEY 옵션"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"옵션"}),s.jsx("th",{children:"부모 삭제 시"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"RESTRICT"})}),s.jsx("td",{children:"삭제 불가"}),s.jsx("td",{children:"자식 있으면 부모 삭제 거부 (기본값)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"CASCADE"})}),s.jsx("td",{children:"자식도 삭제"}),s.jsx("td",{children:"부모 삭제 시 관련 자식 모두 삭제"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SET NULL"})}),s.jsx("td",{children:"자식 FK = NULL"}),s.jsx("td",{children:"부모 삭제 시 자식 FK를 NULL로 변경"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SET DEFAULT"})}),s.jsx("td",{children:"자식 FK = 기본값"}),s.jsx("td",{children:"부모 삭제 시 자식 FK를 기본값으로"})]})]})]}),s.jsx("pre",{children:s.jsx("code",{children:`CREATE TABLE 주문 (
  주문번호 NUMBER PRIMARY KEY,
  고객번호 NUMBER REFERENCES 고객(고객번호)
    ON DELETE CASCADE,      -- 고객 삭제 시 주문도 삭제
  주문일자 DATE
);`})}),s.jsx("h3",{children:"제약조건 관리"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 제약조건 추가
ALTER TABLE 사원 ADD CONSTRAINT pk_사원
  PRIMARY KEY (사원번호);

ALTER TABLE 사원 ADD CONSTRAINT fk_부서
  FOREIGN KEY (부서번호) REFERENCES 부서(부서번호);

-- 제약조건 삭제
ALTER TABLE 사원 DROP CONSTRAINT pk_사원;

-- 제약조건 비활성화/활성화
ALTER TABLE 사원 DISABLE CONSTRAINT fk_부서;
ALTER TABLE 사원 ENABLE CONSTRAINT fk_부서;`})}),s.jsx("h2",{children:"4. DCL (Data Control Language)"}),s.jsx("h3",{children:"GRANT - 권한 부여"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 시스템 권한 부여
GRANT CREATE TABLE, CREATE VIEW TO user1;

-- 객체 권한 부여
GRANT SELECT, INSERT ON 사원 TO user1;

-- WITH GRANT OPTION: 받은 권한을 다른 사용자에게 줄 수 있음
GRANT SELECT ON 사원 TO user1 WITH GRANT OPTION;`})}),s.jsx("h3",{children:"REVOKE - 권한 회수"}),s.jsx("pre",{children:s.jsx("code",{children:`REVOKE SELECT ON 사원 FROM user1;

-- CASCADE: WITH GRANT OPTION으로 전파된 권한도 함께 회수
REVOKE SELECT ON 사원 FROM user1 CASCADE;`})}),s.jsx("h3",{children:"ROLE - 권한 그룹"}),s.jsx("pre",{children:s.jsx("code",{children:`-- ROLE 생성 및 권한 부여
CREATE ROLE manager_role;
GRANT SELECT, INSERT, UPDATE ON 사원 TO manager_role;

-- 사용자에게 ROLE 부여
GRANT manager_role TO user1, user2;`})}),s.jsx("h2",{children:"5. VIEW (뷰)"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 뷰 생성
CREATE OR REPLACE VIEW 서울사원 AS
SELECT 사원번호, 사원명, 부서번호
FROM 사원
WHERE 지역 = '서울'
WITH CHECK OPTION;  -- 뷰 조건 위반 DML 방지

-- 뷰 삭제
DROP VIEW 서울사원;`})}),s.jsx("h3",{children:"뷰의 특징"}),s.jsxs("ul",{children:[s.jsx("li",{children:"논리적인 가상 테이블 (데이터 저장 X)"}),s.jsx("li",{children:"기본 테이블의 보안 관리에 활용"}),s.jsx("li",{children:"복잡한 쿼리 단순화"}),s.jsxs("li",{children:[s.jsx("strong",{children:"단순 뷰"}),": DML 가능 (하나의 테이블, 함수/GROUP BY 없음)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"복합 뷰"}),": DML 제한 (JOIN, 함수, GROUP BY 포함)"]})]}),s.jsx("h2",{children:"6. 기타 객체"}),s.jsx("h3",{children:"시퀀스 (SEQUENCE)"}),s.jsx("pre",{children:s.jsx("code",{children:`CREATE SEQUENCE emp_seq
  START WITH 1
  INCREMENT BY 1
  MAXVALUE 99999
  NOCYCLE
  NOCACHE;

-- 사용
INSERT INTO 사원 (사원번호) VALUES (emp_seq.NEXTVAL);
SELECT emp_seq.CURRVAL FROM DUAL;`})}),s.jsx("h3",{children:"인덱스 (INDEX)"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 인덱스 생성
CREATE INDEX idx_사원_부서 ON 사원(부서번호);

-- 유니크 인덱스
CREATE UNIQUE INDEX idx_사원_이메일 ON 사원(이메일);

-- 인덱스 삭제
DROP INDEX idx_사원_부서;`})}),s.jsx("h3",{children:"인덱스 사용이 유리한 경우"}),s.jsxs("ul",{children:[s.jsx("li",{children:"WHERE 절에 자주 사용되는 컬럼"}),s.jsx("li",{children:"JOIN 조건에 사용되는 컬럼"}),s.jsx("li",{children:"ORDER BY에 자주 사용되는 컬럼"}),s.jsx("li",{children:"데이터 분포가 넓은(Cardinality가 높은) 컬럼"})]}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"인덱스가 불리한 경우:"}),s.jsx("br",{}),"• DML이 빈번한 테이블 (INSERT/UPDATE/DELETE 성능 저하)",s.jsx("br",{}),"• 데이터가 적은 테이블",s.jsx("br",{}),"• 대부분의 행을 조회하는 경우 (Full Scan이 유리)"]})]}),s.jsx(r,{lessonId:"subject2-ch3"})]})}export{i as default};
