import{j as s}from"./index-CVYxwxn-.js";import{S as r}from"./SEOHead-C5i4rkVb.js";import{L as e}from"./LessonComplete-PFnrpnjC.js";import{S as n,a as d}from"./SampleDataPanel-CyeJt6gx.js";function t(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(r,{title:"2장: SQL 활용 - SQLD Study",description:"JOIN, 서브쿼리, 집합연산, 윈도우 함수, 계층형 쿼리"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"2장: SQL 활용"}),s.jsx("p",{className:"hero-subtitle",children:"JOIN, 서브쿼리, 윈도우 함수, 계층형 쿼리"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx(n,{}),s.jsx("h2",{children:"1. JOIN"}),s.jsxs("p",{children:["JOIN은 두 개 이상의 테이블을 ",s.jsx("strong",{children:"연결"}),"하여 데이터를 조회하는 방법입니다."]}),s.jsx("h3",{children:"JOIN 유형 비교"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"JOIN 유형"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"NULL 매칭"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"INNER JOIN"})}),s.jsx("td",{children:"양쪽 모두 일치하는 행만"}),s.jsx("td",{children:"제외"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LEFT OUTER JOIN"})}),s.jsx("td",{children:"왼쪽 테이블 전체 + 오른쪽 일치"}),s.jsx("td",{children:"오른쪽 NULL 포함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"RIGHT OUTER JOIN"})}),s.jsx("td",{children:"오른쪽 테이블 전체 + 왼쪽 일치"}),s.jsx("td",{children:"왼쪽 NULL 포함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"FULL OUTER JOIN"})}),s.jsx("td",{children:"양쪽 모두 전체"}),s.jsx("td",{children:"양쪽 NULL 포함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"CROSS JOIN"})}),s.jsx("td",{children:"카테시안 곱 (모든 조합)"}),s.jsx("td",{children:"조건 없음"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"NATURAL JOIN"})}),s.jsx("td",{children:"같은 이름 컬럼으로 자동 JOIN"}),s.jsx("td",{children:"제외"})]})]})]}),s.jsx("h3",{children:"표준 JOIN 문법 (ANSI)"}),s.jsx(d,{title:"ANSI JOIN",sql:`-- INNER JOIN
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
ON e.부서번호 = d.부서번호;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"}],description:"INNER JOIN 결과 (부서 없는 강인턴 제외)"}),s.jsx("h3",{children:"Oracle 전용 JOIN 문법"}),s.jsx(d,{title:"Oracle JOIN",sql:`-- INNER JOIN (Oracle)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;

-- LEFT OUTER JOIN (Oracle) - (+)는 부족한 쪽에
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"Oracle (+) 기호 주의:"}),s.jsx("br",{}),"(+)는 데이터가 부족한 쪽에 붙입니다.",s.jsx("br",{}),"LEFT JOIN: 오른쪽에 (+) → WHERE a.id = b.id(+)",s.jsx("br",{}),"RIGHT JOIN: 왼쪽에 (+) → WHERE a.id(+) = b.id"]}),s.jsx("h3",{children:"USING과 ON의 차이"}),s.jsx(d,{title:"ON vs USING",sql:`-- ON: 컬럼명이 다를 때도 사용 가능
SELECT * FROM 사원 e JOIN 부서 d
ON e.부서번호 = d.부서코드;

-- USING: 컬럼명이 같을 때만 사용
SELECT * FROM 사원 JOIN 부서
USING (부서번호);
-- USING 사용 시 테이블 별칭 불가 (부서번호에 별칭 X)`}),s.jsx("h2",{children:"2. 서브쿼리 (Subquery)"}),s.jsxs("p",{children:["서브쿼리는 SQL 안에 포함된 ",s.jsx("strong",{children:"또 다른 SQL"}),"입니다. 위치에 따라 종류가 나뉩니다."]}),s.jsx("h3",{children:"서브쿼리 위치별 분류"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"위치"}),s.jsx("th",{children:"이름"}),s.jsx("th",{children:"특징"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SELECT 절"})}),s.jsx("td",{children:"스칼라 서브쿼리"}),s.jsx("td",{children:"반드시 1행 1열 반환"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"FROM 절"})}),s.jsx("td",{children:"인라인 뷰"}),s.jsx("td",{children:"가상 테이블처럼 사용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"WHERE 절"})}),s.jsx("td",{children:"중첩 서브쿼리"}),s.jsx("td",{children:"조건절에서 사용"})]})]})]}),s.jsx("h3",{children:"스칼라 서브쿼리"}),s.jsx(d,{title:"스칼라 서브쿼리",sql:`SELECT 사원명,
       (SELECT 부서명 FROM 부서 d
        WHERE d.부서번호 = e.부서번호) AS 부서명
FROM 사원 e;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"},{사원명:"강인턴",부서명:null}]}),s.jsx("h3",{children:"인라인 뷰"}),s.jsx(d,{title:"인라인 뷰 (TOP-N)",sql:`SELECT *
FROM (SELECT 사원명, 연봉,
             RANK() OVER (ORDER BY 연봉 DESC) AS 순위
      FROM 사원) t
WHERE t.순위 <= 5;`,columns:["사원명","연봉","순위"],rows:[{사원명:"김사장",연봉:9e3,순위:1},{사원명:"이부장",연봉:7e3,순위:2},{사원명:"박과장",연봉:5e3,순위:3},{사원명:"최대리",연봉:3500,순위:4},{사원명:"한대리",연봉:3200,순위:5}],description:"RANK에서 NULL 연봉 제외 시 기준 (NULL은 가장 큰 값)"}),s.jsx("h3",{children:"중첩 서브쿼리"}),s.jsx(d,{title:"중첩 서브쿼리",sql:`-- 단일행 서브쿼리 (=, >, < 사용)
SELECT * FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);

-- 다중행 서브쿼리 (IN, ANY, ALL, EXISTS 사용)
SELECT * FROM 사원
WHERE 부서번호 IN (SELECT 부서번호 FROM 부서
                   WHERE 지역 = '서울');

-- 상관 서브쿼리 (외부 테이블 참조)
SELECT * FROM 사원 e
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원
              WHERE 부서번호 = e.부서번호);`,columns:["사원명","연봉"],rows:[{사원명:"김사장",연봉:9e3},{사원명:"이부장",연봉:7e3},{사원명:"박과장",연봉:5e3}],description:"AVG(연봉) ≈ 4714 보다 큰 사원 (NULL 제외 계산)"}),s.jsx("h3",{children:"다중행 연산자"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산자"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"IN"})}),s.jsx("td",{children:"목록 중 하나와 일치"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ANY/SOME"})}),s.jsx("td",{children:"하나라도 만족 (> ANY = 최소값보다 큼)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ALL"})}),s.jsx("td",{children:"모두 만족 (> ALL = 최대값보다 큼)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"EXISTS"})}),s.jsx("td",{children:"서브쿼리 결과 존재 여부 (TRUE/FALSE)"})]})]})]}),s.jsx("h2",{children:"3. 집합 연산자"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"연산자"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"중복"}),s.jsx("th",{children:"정렬"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"UNION"})}),s.jsx("td",{children:"합집합"}),s.jsx("td",{children:"중복 제거"}),s.jsx("td",{children:"자동 정렬"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"UNION ALL"})}),s.jsx("td",{children:"합집합"}),s.jsx("td",{children:"중복 포함"}),s.jsx("td",{children:"정렬 안 함"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"INTERSECT"})}),s.jsx("td",{children:"교집합"}),s.jsx("td",{children:"중복 제거"}),s.jsx("td",{children:"자동 정렬"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"MINUS/EXCEPT"})}),s.jsx("td",{children:"차집합"}),s.jsx("td",{children:"중복 제거"}),s.jsx("td",{children:"자동 정렬"})]})]})]}),s.jsx(d,{title:"UNION ALL",sql:`-- 부서 10과 20의 사원 합집합
SELECT 사원명 FROM 사원 WHERE 부서번호 = 10
UNION ALL
SELECT 사원명 FROM 사원 WHERE 부서번호 = 20;`,columns:["사원명"],rows:[{사원명:"김사장"},{사원명:"이부장"},{사원명:"박과장"},{사원명:"최대리"},{사원명:"정사원"}]}),s.jsx("h2",{children:"4. 윈도우 함수 (Window Function)"}),s.jsxs("p",{children:["행 간의 관계를 정의하여 ",s.jsx("strong",{children:"그룹 내 순위, 누적, 비율"})," 등을 계산합니다. GROUP BY와 달리 행이 줄어들지 않습니다."]}),s.jsx("h3",{children:"기본 문법"}),s.jsx(d,{title:"윈도우 함수 문법",sql:`함수명() OVER (
  [PARTITION BY 그룹컬럼]
  [ORDER BY 정렬컬럼]
  [ROWS/RANGE BETWEEN ... AND ...]
)`}),s.jsx("h3",{children:"순위 함수"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"함수"}),s.jsx("th",{children:"동일 순위 처리"}),s.jsx("th",{children:"예시 (값: 100,100,90)"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"RANK()"})}),s.jsx("td",{children:"동순위 후 건너뜀"}),s.jsx("td",{children:"1, 1, 3"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"DENSE_RANK()"})}),s.jsx("td",{children:"동순위 후 이어감"}),s.jsx("td",{children:"1, 1, 2"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ROW_NUMBER()"})}),s.jsx("td",{children:"무조건 순번"}),s.jsx("td",{children:"1, 2, 3"})]})]})]}),s.jsx(d,{title:"순위 함수",sql:`SELECT 사원명, 연봉,
       RANK() OVER (ORDER BY 연봉 DESC) AS RANK순위,
       DENSE_RANK() OVER (ORDER BY 연봉 DESC) AS DENSE순위,
       ROW_NUMBER() OVER (ORDER BY 연봉 DESC) AS ROW순위
FROM 사원;`,columns:["사원명","연봉","RANK순위","DENSE순위","ROW순위"],rows:[{사원명:"강인턴",연봉:null,RANK순위:1,DENSE순위:1,ROW순위:1},{사원명:"김사장",연봉:9e3,RANK순위:2,DENSE순위:2,ROW순위:2},{사원명:"이부장",연봉:7e3,RANK순위:3,DENSE순위:3,ROW순위:3},{사원명:"박과장",연봉:5e3,RANK순위:4,DENSE순위:4,ROW순위:4},{사원명:"최대리",연봉:3500,RANK순위:5,DENSE순위:5,ROW순위:5},{사원명:"한대리",연봉:3200,RANK순위:6,DENSE순위:6,ROW순위:6},{사원명:"정사원",연봉:2800,RANK순위:7,DENSE순위:7,ROW순위:7},{사원명:"오사원",연봉:2500,RANK순위:8,DENSE순위:8,ROW순위:8}],description:"Oracle에서 NULL은 DESC 시 가장 처음에 옵니다"}),s.jsx("h3",{children:"집계 윈도우 함수"}),s.jsx(d,{title:"집계 윈도우 함수",sql:`SELECT 사원명, 부서번호, 연봉,
       SUM(연봉) OVER (PARTITION BY 부서번호) AS 부서합계,
       AVG(연봉) OVER (PARTITION BY 부서번호) AS 부서평균,
       SUM(연봉) OVER (ORDER BY 입사일) AS 누적합계
FROM 사원;`,columns:["사원명","부서번호","연봉","부서합계"],rows:[{사원명:"김사장",부서번호:10,연봉:9e3,부서합계:21e3},{사원명:"이부장",부서번호:10,연봉:7e3,부서합계:21e3},{사원명:"박과장",부서번호:10,연봉:5e3,부서합계:21e3},{사원명:"최대리",부서번호:20,연봉:3500,부서합계:6300},{사원명:"정사원",부서번호:20,연봉:2800,부서합계:6300},{사원명:"한대리",부서번호:30,연봉:3200,부서합계:5700},{사원명:"오사원",부서번호:30,연봉:2500,부서합계:5700}],description:"NULL 부서(강인턴)는 별도 파티션으로 처리"}),s.jsx("h3",{children:"행 순서 함수"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"함수"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LAG(컬럼, n)"})}),s.jsx("td",{children:"n행 이전 값 (기본 1)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LEAD(컬럼, n)"})}),s.jsx("td",{children:"n행 이후 값 (기본 1)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"FIRST_VALUE"})}),s.jsx("td",{children:"파티션 내 첫 번째 값"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LAST_VALUE"})}),s.jsx("td",{children:"파티션 내 마지막 값"})]})]})]}),s.jsx("h2",{children:"5. 계층형 쿼리 (Oracle)"}),s.jsx(d,{title:"계층형 쿼리",sql:`SELECT LEVEL, LPAD(' ', (LEVEL-1)*2) || 사원명 AS 조직도,
       사원번호, 관리자번호
FROM 사원
START WITH 관리자번호 IS NULL    -- 루트 노드
CONNECT BY PRIOR 사원번호 = 관리자번호  -- 부모→자식 방향
ORDER SIBLINGS BY 사원명;        -- 같은 레벨 내 정렬`,columns:["LEVEL","조직도","사원번호","관리자번호"],rows:[{LEVEL:1,조직도:"김사장",사원번호:1001,관리자번호:null},{LEVEL:2,조직도:"  이부장",사원번호:1002,관리자번호:1001},{LEVEL:3,조직도:"    박과장",사원번호:1003,관리자번호:1002},{LEVEL:4,조직도:"      강인턴",사원번호:1008,관리자번호:1003},{LEVEL:3,조직도:"    최대리",사원번호:1004,관리자번호:1002},{LEVEL:4,조직도:"      정사원",사원번호:1005,관리자번호:1004},{LEVEL:2,조직도:"  한대리",사원번호:1006,관리자번호:1001},{LEVEL:3,조직도:"    오사원",사원번호:1007,관리자번호:1006}]}),s.jsx("h3",{children:"계층형 쿼리 키워드"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"키워드"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"START WITH"})}),s.jsx("td",{children:"루트 노드 조건"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"CONNECT BY PRIOR"})}),s.jsx("td",{children:"부모-자식 관계 정의"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LEVEL"})}),s.jsx("td",{children:"현재 계층 깊이"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ORDER SIBLINGS BY"})}),s.jsx("td",{children:"같은 레벨 내 정렬"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"PRIOR"})}),s.jsx("td",{children:"이전 행 참조"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"CONNECT_BY_ISLEAF"})}),s.jsx("td",{children:"리프 노드 여부 (0/1)"})]})]})]}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"PRIOR 위치 핵심:"}),s.jsx("br",{}),"• PRIOR 자식 = 부모 → 순방향 (위→아래, 부모에서 자식으로)",s.jsx("br",{}),"• PRIOR 부모 = 자식 → 역방향 (아래→위, 자식에서 부모로)"]}),s.jsx("h2",{children:"6. PIVOT / UNPIVOT"}),s.jsx(d,{title:"PIVOT / UNPIVOT",sql:`-- PIVOT: 행 → 열 변환
SELECT *
FROM (SELECT 부서번호, 직급, 연봉 FROM 사원)
PIVOT (SUM(연봉) FOR 직급 IN ('과장', '대리', '사원'));

-- UNPIVOT: 열 → 행 변환
SELECT *
FROM 매출테이블
UNPIVOT (매출액 FOR 분기 IN (Q1, Q2, Q3, Q4));`}),s.jsx("h2",{children:"7. 정규 표현식 함수"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"함수"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"REGEXP_LIKE"}),s.jsx("td",{children:"패턴 매칭 여부"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"REGEXP_SUBSTR"}),s.jsx("td",{children:"패턴에 맞는 문자열 추출"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"REGEXP_REPLACE"}),s.jsx("td",{children:"패턴에 맞는 문자열 치환"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"REGEXP_INSTR"}),s.jsx("td",{children:"패턴 위치 반환"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"REGEXP_COUNT"}),s.jsx("td",{children:"패턴 매칭 횟수"})]})]})]})]}),s.jsx(e,{lessonId:"subject2-ch2"})]})}export{t as default};
