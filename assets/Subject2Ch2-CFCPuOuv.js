import{j as d}from"./index-UbOHZ8bG.js";import{S as s}from"./SEOHead-C2dZwiVT.js";import{L as r}from"./LessonComplete-Czz1y6dc.js";function c(){return d.jsxs("div",{className:"lesson-page",children:[d.jsx(s,{title:"2장: SQL 활용 - SQLD Study",description:"JOIN, 서브쿼리, 집합연산, 윈도우 함수, 계층형 쿼리"}),d.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[d.jsx("h1",{children:"2장: SQL 활용"}),d.jsx("p",{className:"hero-subtitle",children:"JOIN, 서브쿼리, 윈도우 함수, 계층형 쿼리"})]}),d.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[d.jsx("h2",{children:"1. JOIN"}),d.jsxs("p",{children:["JOIN은 두 개 이상의 테이블을 ",d.jsx("strong",{children:"연결"}),"하여 데이터를 조회하는 방법입니다."]}),d.jsx("h3",{children:"JOIN 유형 비교"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"JOIN 유형"}),d.jsx("th",{children:"설명"}),d.jsx("th",{children:"NULL 매칭"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"INNER JOIN"})}),d.jsx("td",{children:"양쪽 모두 일치하는 행만"}),d.jsx("td",{children:"제외"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"LEFT OUTER JOIN"})}),d.jsx("td",{children:"왼쪽 테이블 전체 + 오른쪽 일치"}),d.jsx("td",{children:"오른쪽 NULL 포함"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"RIGHT OUTER JOIN"})}),d.jsx("td",{children:"오른쪽 테이블 전체 + 왼쪽 일치"}),d.jsx("td",{children:"왼쪽 NULL 포함"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"FULL OUTER JOIN"})}),d.jsx("td",{children:"양쪽 모두 전체"}),d.jsx("td",{children:"양쪽 NULL 포함"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"CROSS JOIN"})}),d.jsx("td",{children:"카테시안 곱 (모든 조합)"}),d.jsx("td",{children:"조건 없음"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"NATURAL JOIN"})}),d.jsx("td",{children:"같은 이름 컬럼으로 자동 JOIN"}),d.jsx("td",{children:"제외"})]})]})]}),d.jsx("h3",{children:"표준 JOIN 문법 (ANSI)"}),d.jsx("pre",{children:d.jsx("code",{children:`-- INNER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e INNER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- LEFT OUTER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e LEFT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- FULL OUTER JOIN
SELECT e.사원명, d.부서명
FROM 사원 e FULL OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;`})}),d.jsx("h3",{children:"Oracle 전용 JOIN 문법"}),d.jsx("pre",{children:d.jsx("code",{children:`-- INNER JOIN (Oracle)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;

-- LEFT OUTER JOIN (Oracle) - (+)는 부족한 쪽에
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`})}),d.jsxs("div",{className:"info-box",children:[d.jsx("strong",{children:"Oracle (+) 기호 주의:"}),d.jsx("br",{}),"(+)는 데이터가 부족한 쪽에 붙입니다.",d.jsx("br",{}),"LEFT JOIN: 오른쪽에 (+) → WHERE a.id = b.id(+)",d.jsx("br",{}),"RIGHT JOIN: 왼쪽에 (+) → WHERE a.id(+) = b.id"]}),d.jsx("h3",{children:"USING과 ON의 차이"}),d.jsx("pre",{children:d.jsx("code",{children:`-- ON: 컬럼명이 다를 때도 사용 가능
SELECT * FROM 사원 e JOIN 부서 d
ON e.부서번호 = d.부서코드;

-- USING: 컬럼명이 같을 때만 사용
SELECT * FROM 사원 JOIN 부서
USING (부서번호);
-- USING 사용 시 테이블 별칭 불가 (부서번호에 별칭 X)`})}),d.jsx("h2",{children:"2. 서브쿼리 (Subquery)"}),d.jsxs("p",{children:["서브쿼리는 SQL 안에 포함된 ",d.jsx("strong",{children:"또 다른 SQL"}),"입니다. 위치에 따라 종류가 나뉩니다."]}),d.jsx("h3",{children:"서브쿼리 위치별 분류"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"위치"}),d.jsx("th",{children:"이름"}),d.jsx("th",{children:"특징"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"SELECT 절"})}),d.jsx("td",{children:"스칼라 서브쿼리"}),d.jsx("td",{children:"반드시 1행 1열 반환"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"FROM 절"})}),d.jsx("td",{children:"인라인 뷰"}),d.jsx("td",{children:"가상 테이블처럼 사용"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"WHERE 절"})}),d.jsx("td",{children:"중첩 서브쿼리"}),d.jsx("td",{children:"조건절에서 사용"})]})]})]}),d.jsx("h3",{children:"스칼라 서브쿼리"}),d.jsx("pre",{children:d.jsx("code",{children:`SELECT 사원명,
       (SELECT 부서명 FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명
FROM 사원 e;`})}),d.jsx("h3",{children:"인라인 뷰"}),d.jsx("pre",{children:d.jsx("code",{children:`SELECT *
FROM (SELECT 사원명, 연봉,
             RANK() OVER (ORDER BY 연봉 DESC) AS 순위
      FROM 사원) t
WHERE t.순위 <= 5;`})}),d.jsx("h3",{children:"중첩 서브쿼리"}),d.jsx("pre",{children:d.jsx("code",{children:`-- 단일행 서브쿼리 (=, >, < 사용)
SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);

-- 다중행 서브쿼리 (IN, ANY, ALL, EXISTS 사용)
SELECT * FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서
                   WHERE 지역 = '서울');

-- 상관 서브쿼리 (외부 테이블 참조)
SELECT * FROM 사원 e
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원
              WHERE 부서번호 = e.부서번호);`})}),d.jsx("h3",{children:"다중행 연산자"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"연산자"}),d.jsx("th",{children:"설명"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"IN"})}),d.jsx("td",{children:"목록 중 하나와 일치"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ANY/SOME"})}),d.jsx("td",{children:"하나라도 만족 (> ANY = 최소값보다 큼)"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ALL"})}),d.jsx("td",{children:"모두 만족 (> ALL = 최대값보다 큼)"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"EXISTS"})}),d.jsx("td",{children:"서브쿼리 결과 존재 여부 (TRUE/FALSE)"})]})]})]}),d.jsx("h2",{children:"3. 집합 연산자"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"연산자"}),d.jsx("th",{children:"설명"}),d.jsx("th",{children:"중복"}),d.jsx("th",{children:"정렬"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"UNION"})}),d.jsx("td",{children:"합집합"}),d.jsx("td",{children:"중복 제거"}),d.jsx("td",{children:"자동 정렬"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"UNION ALL"})}),d.jsx("td",{children:"합집합"}),d.jsx("td",{children:"중복 포함"}),d.jsx("td",{children:"정렬 안 함"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"INTERSECT"})}),d.jsx("td",{children:"교집합"}),d.jsx("td",{children:"중복 제거"}),d.jsx("td",{children:"자동 정렬"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"MINUS/EXCEPT"})}),d.jsx("td",{children:"차집합"}),d.jsx("td",{children:"중복 제거"}),d.jsx("td",{children:"자동 정렬"})]})]})]}),d.jsx("pre",{children:d.jsx("code",{children:`-- 부서 10과 20의 사원 합집합
SELECT 사원명 FROM 사원 WHERE 부서번호 = 10
UNION ALL
SELECT 사원명 FROM 사원 WHERE 부서번호 = 20;`})}),d.jsx("h2",{children:"4. 윈도우 함수 (Window Function)"}),d.jsxs("p",{children:["행 간의 관계를 정의하여 ",d.jsx("strong",{children:"그룹 내 순위, 누적, 비율"})," 등을 계산합니다. GROUP BY와 달리 행이 줄어들지 않습니다."]}),d.jsx("h3",{children:"기본 문법"}),d.jsx("pre",{children:d.jsx("code",{children:`함수명() OVER (
  [PARTITION BY 그룹컬럼]
  [ORDER BY 정렬컬럼]
  [ROWS/RANGE BETWEEN ... AND ...]
)`})}),d.jsx("h3",{children:"순위 함수"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"함수"}),d.jsx("th",{children:"동일 순위 처리"}),d.jsx("th",{children:"예시 (값: 100,100,90)"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"RANK()"})}),d.jsx("td",{children:"동순위 후 건너뜀"}),d.jsx("td",{children:"1, 1, 3"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"DENSE_RANK()"})}),d.jsx("td",{children:"동순위 후 이어감"}),d.jsx("td",{children:"1, 1, 2"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ROW_NUMBER()"})}),d.jsx("td",{children:"무조건 순번"}),d.jsx("td",{children:"1, 2, 3"})]})]})]}),d.jsx("pre",{children:d.jsx("code",{children:`SELECT 사원명, 연봉,
       RANK() OVER (ORDER BY 연봉 DESC) AS RANK순위,
       DENSE_RANK() OVER (ORDER BY 연봉 DESC) AS DENSE순위,
       ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS ROW순위
FROM 사원;`})}),d.jsx("h3",{children:"집계 윈도우 함수"}),d.jsx("pre",{children:d.jsx("code",{children:`SELECT 사원명, 부서번호, 연봉,
       SUM(연봉) OVER (PARTITION BY 부서번호) AS 부서합계,
       AVG(연봉) OVER (PARTITION BY 부서번호) AS 부서평균,
       SUM(연봉) OVER (ORDER BY 입사일) AS 누적합계
FROM 사원;`})}),d.jsx("h3",{children:"행 순서 함수"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"함수"}),d.jsx("th",{children:"설명"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"LAG(컬럼, n)"})}),d.jsx("td",{children:"n행 이전 값 (기본 1)"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"LEAD(컬럼, n)"})}),d.jsx("td",{children:"n행 이후 값 (기본 1)"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"FIRST_VALUE"})}),d.jsx("td",{children:"파티션 내 첫 번째 값"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"LAST_VALUE"})}),d.jsx("td",{children:"파티션 내 마지막 값"})]})]})]}),d.jsx("h2",{children:"5. 계층형 쿼리 (Oracle)"}),d.jsx("pre",{children:d.jsx("code",{children:`SELECT LEVEL, LPAD(' ', (LEVEL-1)*2) || 사원명 AS 조직도,
       사원번호, 관리자번호
FROM 사원
START WITH 관리자번호 IS NULL    -- 루트 노드
CONNECT BY PRIOR 사원번호 = 관리자번호  -- 부모→자식 방향
ORDER SIBLINGS BY 사원명;        -- 같은 레벨 내 정렬`})}),d.jsx("h3",{children:"계층형 쿼리 키워드"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"키워드"}),d.jsx("th",{children:"설명"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"START WITH"})}),d.jsx("td",{children:"루트 노드 조건"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"CONNECT BY PRIOR"})}),d.jsx("td",{children:"부모-자식 관계 정의"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"LEVEL"})}),d.jsx("td",{children:"현재 계층 깊이"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ORDER SIBLINGS BY"})}),d.jsx("td",{children:"같은 레벨 내 정렬"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"PRIOR"})}),d.jsx("td",{children:"이전 행 참조"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"CONNECT_BY_ISLEAF"})}),d.jsx("td",{children:"리프 노드 여부 (0/1)"})]})]})]}),d.jsxs("div",{className:"info-box",children:[d.jsx("strong",{children:"PRIOR 위치 핵심:"}),d.jsx("br",{}),"• PRIOR 자식 = 부모 → 순방향 (위→아래, 부모에서 자식으로)",d.jsx("br",{}),"• PRIOR 부모 = 자식 → 역방향 (아래→위, 자식에서 부모로)"]}),d.jsx("h2",{children:"6. PIVOT / UNPIVOT"}),d.jsx("pre",{children:d.jsx("code",{children:`-- PIVOT: 행 → 열 변환
SELECT *
FROM (SELECT 부서번호, 직급, 연봉 FROM 사원)
PIVOT (SUM(연봉) FOR 직급 IN ('과장', '대리', '사원'));

-- UNPIVOT: 열 → 행 변환
SELECT *
FROM 매출테이블
UNPIVOT (매출액 FOR 분기 IN (Q1, Q2, Q3, Q4));`})}),d.jsx("h2",{children:"7. 정규 표현식 함수"}),d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"함수"}),d.jsx("th",{children:"설명"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"REGEXP_LIKE"}),d.jsx("td",{children:"패턴 매칭 여부"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"REGEXP_SUBSTR"}),d.jsx("td",{children:"패턴에 맞는 문자열 추출"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"REGEXP_REPLACE"}),d.jsx("td",{children:"패턴에 맞는 문자열 치환"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"REGEXP_INSTR"}),d.jsx("td",{children:"패턴 위치 반환"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"REGEXP_COUNT"}),d.jsx("td",{children:"패턴 매칭 횟수"})]})]})]})]}),d.jsx(r,{lessonId:"subject2-ch2"})]})}export{c as default};
