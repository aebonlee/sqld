import{j as s}from"./index-UbOHZ8bG.js";import{S as d}from"./SEOHead-C2dZwiVT.js";import{L as e}from"./LessonComplete-Czz1y6dc.js";function c(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(d,{title:"DML 레퍼런스 - SQLD Study",description:"SELECT, INSERT, UPDATE, DELETE, MERGE 빠른 참조"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"DML 레퍼런스"}),s.jsx("p",{className:"hero-subtitle",children:"SELECT · INSERT · UPDATE · DELETE · MERGE"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx("h2",{children:"SELECT"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 기본 구문
SELECT [DISTINCT] 컬럼1, 컬럼2, ...
FROM 테이블
[WHERE 조건]
[GROUP BY 컬럼]
[HAVING 그룹조건]
[ORDER BY 컬럼 [ASC|DESC]];

-- 실행 순서
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`})}),s.jsx("h3",{children:"SELECT 주요 키워드"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"키워드"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"예시"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"DISTINCT"})}),s.jsx("td",{children:"중복 제거"}),s.jsx("td",{children:"SELECT DISTINCT 부서"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ALL"})}),s.jsx("td",{children:"중복 포함 (기본값)"}),s.jsx("td",{children:"SELECT ALL 부서"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"AS"})}),s.jsx("td",{children:"별칭 (Alias)"}),s.jsx("td",{children:"SELECT 이름 AS 사원명"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"*"})}),s.jsx("td",{children:"전체 컬럼"}),s.jsx("td",{children:"SELECT *"})]})]})]}),s.jsx("h3",{children:"별칭 (Alias) 규칙"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 컬럼 별칭
SELECT 사원명 AS "사원 이름",   -- 공백 포함 시 큰따옴표
       연봉 * 12 연봉합계,       -- AS 생략 가능
       부서번호 부서              -- AS 생략 가능

-- 테이블 별칭
FROM 사원 e, 부서 d              -- AS 생략 (Oracle은 테이블에 AS 사용 불가)`})}),s.jsx("h2",{children:"INSERT"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 단일 행 삽입
INSERT INTO 테이블 (컬럼1, 컬럼2, ...)
VALUES (값1, 값2, ...);

-- 전체 컬럼 삽입 (컬럼 목록 생략)
INSERT INTO 테이블
VALUES (값1, 값2, ...);

-- SELECT 결과 삽입
INSERT INTO 대상테이블 (컬럼1, 컬럼2)
SELECT 컬럼A, 컬럼B FROM 소스테이블
WHERE 조건;`})}),s.jsx("h2",{children:"UPDATE"}),s.jsx("pre",{children:s.jsx("code",{children:`UPDATE 테이블
SET 컬럼1 = 값1,
    컬럼2 = 값2
[WHERE 조건];

-- 서브쿼리 활용
UPDATE 사원
SET 부서명 = (SELECT 부서명 FROM 부서
              WHERE 부서.부서번호 = 사원.부서번호)
WHERE EXISTS (SELECT 1 FROM 부서
              WHERE 부서.부서번호 = 사원.부서번호);`})}),s.jsx("h2",{children:"DELETE"}),s.jsx("pre",{children:s.jsx("code",{children:`DELETE [FROM] 테이블
[WHERE 조건];

-- 서브쿼리 활용
DELETE FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서
                   WHERE 지역 = '제주');`})}),s.jsx("h2",{children:"MERGE"}),s.jsx("pre",{children:s.jsx("code",{children:`MERGE INTO 대상테이블 T
USING 소스테이블 S
ON (T.키 = S.키)
WHEN MATCHED THEN
  UPDATE SET T.컬럼1 = S.컬럼1
  [DELETE WHERE 조건]
WHEN NOT MATCHED THEN
  INSERT (T.키, T.컬럼1)
  VALUES (S.키, S.컬럼1);`})}),s.jsx("h2",{children:"WHERE 절 연산자"}),s.jsx("h3",{children:"비교 연산자"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산자"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"=, <>, !=, <, >, <=, >="}),s.jsx("td",{children:"비교"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"BETWEEN a AND b"}),s.jsx("td",{children:"a 이상 b 이하"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"IN (값1, 값2, ...)"}),s.jsx("td",{children:"목록 중 하나"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"LIKE '패턴'"}),s.jsx("td",{children:"패턴 매칭 (%: 0+문자, _: 1문자)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"IS NULL / IS NOT NULL"}),s.jsx("td",{children:"NULL 판별"})]})]})]}),s.jsx("h3",{children:"논리 연산자"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산자"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"우선순위"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"NOT"})}),s.jsx("td",{children:"부정"}),s.jsx("td",{children:"1 (가장 높음)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"AND"})}),s.jsx("td",{children:"그리고"}),s.jsx("td",{children:"2"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"OR"})}),s.jsx("td",{children:"또는"}),s.jsx("td",{children:"3 (가장 낮음)"})]})]})]}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"연산자 우선순위:"})," NOT > AND > OR",s.jsx("br",{}),"괄호를 사용하여 우선순위를 명확히 하는 것이 좋습니다."]}),s.jsx("h2",{children:"ORDER BY"}),s.jsx("pre",{children:s.jsx("code",{children:`-- 기본 정렬
ORDER BY 컬럼1 ASC, 컬럼2 DESC;

-- 컬럼 번호로 정렬
ORDER BY 2, 3 DESC;

-- NULL 정렬 제어
ORDER BY 컬럼 NULLS FIRST;  -- NULL을 처음에
ORDER BY 컬럼 NULLS LAST;   -- NULL을 마지막에

-- Oracle: NULL은 가장 큰 값 (ASC→마지막, DESC→처음)
-- SQL Server: NULL은 가장 작은 값 (ASC→처음, DESC→마지막)`})})]}),s.jsx(e,{lessonId:"sqlref-dml"})]})}export{c as default};
