import{j as d}from"./index-Cek5hyV7.js";import{S as e}from"./SEOHead-DoctwCeQ.js";import{L as s}from"./LessonComplete-C3vWPCaE.js";function c(){return d.jsxs("div",{className:"lesson-page",children:[d.jsx(e,{title:"서브쿼리 레퍼런스 - SQLD Study",description:"스칼라, 인라인뷰, 중첩, 상관 서브쿼리 빠른 참조"}),d.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[d.jsx("h1",{children:"서브쿼리 레퍼런스"}),d.jsx("p",{className:"hero-subtitle",children:"스칼라 · 인라인뷰 · 중첩 · 상관 서브쿼리"})]}),d.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[d.jsx("h2",{children:"서브쿼리 위치별 분류"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"위치"}),d.jsx("th",{children:"이름"}),d.jsx("th",{children:"반환"}),d.jsx("th",{children:"특징"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"SELECT"})}),d.jsx("td",{children:"스칼라 서브쿼리"}),d.jsx("td",{children:"1행 1열"}),d.jsx("td",{children:"단일 값만 반환"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"FROM"})}),d.jsx("td",{children:"인라인 뷰"}),d.jsx("td",{children:"다중 행/열"}),d.jsx("td",{children:"가상 테이블"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"WHERE"})}),d.jsx("td",{children:"중첩 서브쿼리"}),d.jsx("td",{children:"단일/다중"}),d.jsx("td",{children:"조건절 비교"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"HAVING"})}),d.jsx("td",{children:"중첩 서브쿼리"}),d.jsx("td",{children:"단일/다중"}),d.jsx("td",{children:"그룹 조건 비교"})]})]})]}),d.jsx("h2",{children:"스칼라 서브쿼리 (SELECT 절)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 반드시 1행 1열만 반환해야 함
SELECT 사원명,
       (SELECT 부서명
        FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명,
       (SELECT COUNT(*)
        FROM 사원 s
        WHERE s.부서번호 = e.부서번호) AS 부서인원
FROM 사원 e;

-- 2행 이상 반환 시 오류 발생!`})}),d.jsx("h2",{children:"인라인 뷰 (FROM 절)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- TOP-N 쿼리
SELECT *
FROM (
  SELECT 사원명, 연봉,
         ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS RN
  FROM 사원
) T
WHERE T.RN <= 10;

-- 부서별 평균 연봉과 비교
SELECT e.사원명, e.연봉, d.평균연봉
FROM 사원 e
JOIN (
  SELECT 부서번호, AVG(연봉) AS 평균연봉
  FROM 사원
  GROUP BY 부서번호
) d ON e.부서번호 = d.부서번호
WHERE e.연봉 > d.평균연봉;`})}),d.jsx("h2",{children:"중첩 서브쿼리 (WHERE 절)"}),d.jsx("h3",{children:"단일행 서브쿼리"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 비교 연산자 사용: =, <>, <, >, <=, >=
SELECT * FROM 사원
WHERE 연봉 = (SELECT MAX(연봉) FROM 사원);

SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`})}),d.jsx("h3",{children:"다중행 서브쿼리"}),d.jsx("pre",{children:d.jsx("code",{children:`-- IN: 목록 중 하나와 일치
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
WHERE EXISTS (SELECT 1 FROM 사원 e WHERE e.부서번호 = d.부서번호);`})}),d.jsx("h3",{children:"다중행 연산자 정리"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"연산자"}),d.jsx("th",{children:"의미"}),d.jsx("th",{children:"> ANY"}),d.jsx("th",{children:"> ALL"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"IN"})}),d.jsx("td",{children:"목록 중 하나 일치"}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"-"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ANY/SOME"})}),d.jsx("td",{children:"하나라도 만족"}),d.jsx("td",{children:"최소값보다 큼"}),d.jsx("td",{children:"-"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ALL"})}),d.jsx("td",{children:"모두 만족"}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"최대값보다 큼"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"EXISTS"})}),d.jsx("td",{children:"존재 여부"}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"-"})]})]})]}),d.jsx("h2",{children:"상관 서브쿼리 (Correlated Subquery)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 외부 쿼리의 컬럼을 참조하는 서브쿼리
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
);`})}),d.jsx("h2",{children:"다중 컬럼 서브쿼리"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 여러 컬럼을 동시에 비교
SELECT * FROM 사원
WHERE (부서번호, 연봉) IN (
  SELECT 부서번호, MAX(연봉)
  FROM 사원
  GROUP BY 부서번호
);`})}),d.jsx("h2",{children:"서브쿼리 vs JOIN 비교"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"구분"}),d.jsx("th",{children:"서브쿼리"}),d.jsx("th",{children:"JOIN"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"가독성"}),d.jsx("td",{children:"단순한 조건에 좋음"}),d.jsx("td",{children:"복잡한 관계에 좋음"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"성능"}),d.jsx("td",{children:"상관 서브쿼리는 느릴 수 있음"}),d.jsx("td",{children:"일반적으로 빠름"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"결과 컬럼"}),d.jsx("td",{children:"메인 쿼리 테이블만"}),d.jsx("td",{children:"여러 테이블 컬럼"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"중복 행"}),d.jsx("td",{children:"발생 안 함"}),d.jsx("td",{children:"1:N에서 발생 가능"})]})]})]}),d.jsx("h2",{children:"WITH (CTE - Common Table Expression)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 서브쿼리를 미리 정의하여 재사용
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
WHERE e.연봉 > d.평균연봉;`})}),d.jsxs("div",{className:"info-box",children:[d.jsx("strong",{children:"CTE (WITH절) 장점:"}),d.jsx("br",{}),"• 같은 서브쿼리를 여러 번 사용할 때 성능 향상",d.jsx("br",{}),"• 복잡한 쿼리의 가독성 향상",d.jsx("br",{}),"• 재귀 쿼리 작성 가능 (WITH RECURSIVE)"]})]}),d.jsx(s,{lessonId:"sqlref-subquery"})]})}export{c as default};
