import{j as s}from"./index-C8_a9JOR.js";import{S as d}from"./SEOHead---Zfi6W4.js";import{L as r}from"./LessonComplete-CMxZzBIO.js";import{S as l,a as e}from"./SampleDataPanel-B2GkeDSb.js";function h(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(d,{title:"서브쿼리 레퍼런스 - SQLD Study",description:"스칼라, 인라인뷰, 중첩, 상관 서브쿼리 빠른 참조"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"서브쿼리 레퍼런스"}),s.jsx("p",{className:"hero-subtitle",children:"스칼라 · 인라인뷰 · 중첩 · 상관 서브쿼리"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx(l,{}),s.jsx("h2",{children:"서브쿼리 위치별 분류"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"위치"}),s.jsx("th",{children:"이름"}),s.jsx("th",{children:"반환"}),s.jsx("th",{children:"특징"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SELECT"})}),s.jsx("td",{children:"스칼라 서브쿼리"}),s.jsx("td",{children:"1행 1열"}),s.jsx("td",{children:"단일 값만 반환"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"FROM"})}),s.jsx("td",{children:"인라인 뷰"}),s.jsx("td",{children:"다중 행/열"}),s.jsx("td",{children:"가상 테이블"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"WHERE"})}),s.jsx("td",{children:"중첩 서브쿼리"}),s.jsx("td",{children:"단일/다중"}),s.jsx("td",{children:"조건절 비교"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"HAVING"})}),s.jsx("td",{children:"중첩 서브쿼리"}),s.jsx("td",{children:"단일/다중"}),s.jsx("td",{children:"그룹 조건 비교"})]})]})]}),s.jsx("h2",{children:"스칼라 서브쿼리 (SELECT 절)"}),s.jsx(e,{title:"스칼라 서브쿼리",sql:`-- 반드시 1행 1열만 반환해야 함
SELECT 사원명,
       (SELECT 부서명
        FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명,
       (SELECT COUNT(*)
        FROM 사원 s
        WHERE s.부서번호 = e.부서번호) AS 부서인원
FROM 사원 e;

-- 2행 이상 반환 시 오류 발생!`,columns:["사원명","부서명","부서인원"],rows:[{사원명:"김사장",부서명:"개발팀",부서인원:3},{사원명:"이부장",부서명:"개발팀",부서인원:3},{사원명:"박과장",부서명:"개발팀",부서인원:3},{사원명:"최대리",부서명:"인사팀",부서인원:2},{사원명:"정사원",부서명:"인사팀",부서인원:2},{사원명:"한대리",부서명:"영업팀",부서인원:2},{사원명:"오사원",부서명:"영업팀",부서인원:2},{사원명:"강인턴",부서명:null,부서인원:1}]}),s.jsx("h2",{children:"인라인 뷰 (FROM 절)"}),s.jsx(e,{title:"인라인 뷰 — TOP-N",sql:`-- TOP-N 쿼리
SELECT *
FROM (
  SELECT 사원명, 연봉,
         ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS RN
  FROM 사원
) T
WHERE T.RN <= 10;`,columns:["사원명","연봉","RN"],rows:[{사원명:"강인턴",연봉:null,RN:1},{사원명:"김사장",연봉:9e3,RN:2},{사원명:"이부장",연봉:7e3,RN:3},{사원명:"박과장",연봉:5e3,RN:4},{사원명:"최대리",연봉:3500,RN:5},{사원명:"한대리",연봉:3200,RN:6},{사원명:"정사원",연봉:2800,RN:7},{사원명:"오사원",연봉:2500,RN:8}],description:"Oracle에서 NULL은 DESC 시 최상위 (NULLS FIRST)"}),s.jsx(e,{title:"인라인 뷰 — 부서 평균 비교",sql:`-- 부서별 평균 연봉과 비교
SELECT e.사원명, e.연봉, d.평균연봉
FROM 사원 e
JOIN (
  SELECT 부서번호, AVG(연봉) AS 평균연봉
  FROM 사원
  GROUP BY 부서번호
) d ON e.부서번호 = d.부서번호
WHERE e.연봉 > d.평균연봉;`,columns:["사원명","연봉","평균연봉"],rows:[{사원명:"김사장",연봉:9e3,평균연봉:7e3},{사원명:"최대리",연봉:3500,평균연봉:3150},{사원명:"한대리",연봉:3200,평균연봉:2850}]}),s.jsx("h2",{children:"중첩 서브쿼리 (WHERE 절)"}),s.jsx("h3",{children:"단일행 서브쿼리"}),s.jsx(e,{title:"단일행 서브쿼리",sql:`-- 비교 연산자 사용: =, <>, <, >, <=, >=
SELECT * FROM 사원
WHERE 연봉 = (SELECT MAX(연봉) FROM 사원);

SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`,columns:["사원명","연봉"],rows:[{사원명:"김사장",연봉:9e3}],description:"MAX(연봉) = 9000인 사원"}),s.jsx("h3",{children:"다중행 서브쿼리"}),s.jsx(e,{title:"다중행 서브쿼리",sql:`-- IN: 목록 중 하나와 일치
SELECT * FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서 WHERE 지역 = '서울');

-- ANY (= SOME): 하나라도 만족
SELECT * FROM 사원
WHERE 연봉 > ANY (SELECT 연봉 FROM 사원 WHERE 부서번호 = 10);
-- = 10번 부서 최소 연봉보다 큰 사원

-- ALL: 모두 만족
SELECT * FROM 사원
WHERE 연봉 > ALL (SELECT 연봉 FROM 사원 WHERE 부서번호 = 10);
-- = 10번 부서 최대 연봉보다 큰 사원

-- EXISTS: 결과 존재 여부만 판단 (TRUE/FALSE)
SELECT * FROM 부서 d
WHERE EXISTS (SELECT 1 FROM 사원 e WHERE e.부서번호 = d.부서번호);`,columns:["사원명","부서번호","연봉"],rows:[{사원명:"김사장",부서번호:10,연봉:9e3},{사원명:"이부장",부서번호:10,연봉:7e3},{사원명:"박과장",부서번호:10,연봉:5e3},{사원명:"최대리",부서번호:20,연봉:3500},{사원명:"정사원",부서번호:20,연봉:2800}],description:"서울 부서(10, 20)에 속한 사원 (IN 결과)"}),s.jsx("h3",{children:"다중행 연산자 정리"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산자"}),s.jsx("th",{children:"의미"}),s.jsx("th",{children:"> ANY"}),s.jsx("th",{children:"> ALL"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"IN"})}),s.jsx("td",{children:"목록 중 하나 일치"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ANY/SOME"})}),s.jsx("td",{children:"하나라도 만족"}),s.jsx("td",{children:"최소값보다 큼"}),s.jsx("td",{children:"-"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ALL"})}),s.jsx("td",{children:"모두 만족"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"최대값보다 큼"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"EXISTS"})}),s.jsx("td",{children:"존재 여부"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"})]})]})]}),s.jsx("h2",{children:"상관 서브쿼리 (Correlated Subquery)"}),s.jsx(e,{title:"상관 서브쿼리",sql:`-- 외부 쿼리의 컬럼을 참조하는 서브쿼리
-- 행마다 서브쿼리가 실행됨

-- 부서 평균보다 연봉이 높은 사원
SELECT * FROM 사원 e
WHERE 연봉 > (
  SELECT AVG(연봉) FROM 사원
  WHERE 부서번호 = e.부서번호  -- 외부 참조
);

-- EXISTS와 자주 함께 사용
SELECT * FROM 부서 d
WHERE EXISTS (
  SELECT 1 FROM 사원 e
  WHERE e.부서번호 = d.부서번호
  AND e.연봉 > 5000
);`,columns:["사원명","부서번호","연봉"],rows:[{사원명:"김사장",부서번호:10,연봉:9e3},{사원명:"최대리",부서번호:20,연봉:3500},{사원명:"한대리",부서번호:30,연봉:3200}],description:"자기 부서 평균 연봉보다 높은 사원"}),s.jsx("h2",{children:"다중 컬럼 서브쿼리"}),s.jsx(e,{title:"다중 컬럼 서브쿼리",sql:`-- 여러 컬럼을 동시에 비교
SELECT * FROM 사원
WHERE (부서번호, 연봉) IN (
  SELECT 부서번호, MAX(연봉)
  FROM 사원
  GROUP BY 부서번호
);`,columns:["사원명","부서번호","연봉"],rows:[{사원명:"김사장",부서번호:10,연봉:9e3},{사원명:"최대리",부서번호:20,연봉:3500},{사원명:"한대리",부서번호:30,연봉:3200}],description:"각 부서에서 최고 연봉인 사원"}),s.jsx("h2",{children:"서브쿼리 vs JOIN 비교"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"서브쿼리"}),s.jsx("th",{children:"JOIN"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"가독성"}),s.jsx("td",{children:"단순한 조건에 좋음"}),s.jsx("td",{children:"복잡한 관계에 좋음"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"성능"}),s.jsx("td",{children:"상관 서브쿼리는 느릴 수 있음"}),s.jsx("td",{children:"일반적으로 빠름"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"결과 컬럼"}),s.jsx("td",{children:"메인 쿼리 테이블만"}),s.jsx("td",{children:"여러 테이블 컬럼"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"중복 행"}),s.jsx("td",{children:"발생 안 함"}),s.jsx("td",{children:"1:N에서 발생 가능"})]})]})]}),s.jsx("h2",{children:"WITH (CTE - Common Table Expression)"}),s.jsx(e,{title:"CTE (WITH 절)",sql:`-- 서브쿼리를 미리 정의하여 재사용
WITH 부서평균 AS (
  SELECT 부서번호, AVG(연봉) AS 평균연봉
  FROM 사원
  GROUP BY 부서번호
),
전체평균 AS (
  SELECT AVG(연봉) AS 평균연봉 FROM 사원
)
SELECT e.사원명, e.연봉, d.평균연봉 AS 부서평균, t.평균연봉 AS 전체평균
FROM 사원 e
JOIN 부서평균 d ON e.부서번호 = d.부서번호
CROSS JOIN 전체평균 t
WHERE e.연봉 > d.평균연봉;`,columns:["사원명","연봉","부서평균","전체평균"],rows:[{사원명:"김사장",연봉:9e3,부서평균:7e3,전체평균:4714},{사원명:"최대리",연봉:3500,부서평균:3150,전체평균:4714},{사원명:"한대리",연봉:3200,부서평균:2850,전체평균:4714}],description:"자기 부서 평균 연봉보다 높은 사원 (CTE 사용)"}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"CTE (WITH절) 장점:"}),s.jsx("br",{}),"• 같은 서브쿼리를 여러 번 사용할 때 성능 향상",s.jsx("br",{}),"• 복잡한 쿼리의 가독성 향상",s.jsx("br",{}),"• 재귀 쿼리 작성 가능 (WITH RECURSIVE)"]})]}),s.jsx(r,{lessonId:"sqlref-subquery"})]})}export{h as default};
