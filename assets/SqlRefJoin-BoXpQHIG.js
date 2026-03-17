import{j as s}from"./index-D6MXpY7I.js";import{S as d}from"./SEOHead-CmNMTZbc.js";import{L as l}from"./LessonComplete-CHRT6r5O.js";import{S as O,a as e}from"./SampleDataPanel-CjAHazlZ.js";function i(){return s.jsxs("div",{className:"lesson-page",children:[s.jsx(d,{title:"JOIN 레퍼런스 - SQLD Study",description:"INNER, OUTER, CROSS, NATURAL, SELF JOIN 빠른 참조"}),s.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[s.jsx("h1",{children:"JOIN 레퍼런스"}),s.jsx("p",{className:"hero-subtitle",children:"INNER · OUTER · CROSS · NATURAL · SELF JOIN"})]}),s.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[s.jsx(O,{}),s.jsx("h2",{children:"JOIN 유형 총정리"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"JOIN"}),s.jsx("th",{children:"일치 행"}),s.jsx("th",{children:"불일치 행"}),s.jsx("th",{children:"NULL"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"INNER JOIN"})}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"제외"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"LEFT OUTER"})}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"왼쪽 포함"}),s.jsx("td",{children:"오른쪽 NULL"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"RIGHT OUTER"})}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"오른쪽 포함"}),s.jsx("td",{children:"왼쪽 NULL"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"FULL OUTER"})}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"양쪽 포함"}),s.jsx("td",{children:"양쪽 NULL"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"CROSS JOIN"})}),s.jsx("td",{children:"전체 조합"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"NATURAL JOIN"})}),s.jsx("td",{children:"O (동일 컬럼)"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"제외"})]})]})]}),s.jsx("h2",{children:"INNER JOIN"}),s.jsx(e,{title:"INNER JOIN",sql:`-- ANSI 표준
SELECT e.사원명, d.부서명
FROM 사원 e INNER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"}]}),s.jsx("h2",{children:"LEFT OUTER JOIN"}),s.jsx(e,{title:"LEFT OUTER JOIN",sql:`-- ANSI 표준 (모든 사원 + 부서 있으면 부서명)
SELECT e.사원명, d.부서명
FROM 사원 e LEFT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통 (+는 부족한 쪽)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"},{사원명:"강인턴",부서명:null}]}),s.jsx("h2",{children:"RIGHT OUTER JOIN"}),s.jsx(e,{title:"RIGHT OUTER JOIN",sql:`-- ANSI 표준 (모든 부서 + 사원 있으면 사원명)
SELECT e.사원명, d.부서명
FROM 사원 e RIGHT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호(+) = d.부서번호;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"},{사원명:null,부서명:"기획팀"}]}),s.jsx("h2",{children:"FULL OUTER JOIN"}),s.jsx(e,{title:"FULL OUTER JOIN",sql:`-- ANSI 표준만 가능 (Oracle (+)로는 불가)
SELECT e.사원명, d.부서명
FROM 사원 e FULL OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"},{사원명:"강인턴",부서명:null},{사원명:null,부서명:"기획팀"}]}),s.jsx("h2",{children:"CROSS JOIN"}),s.jsx(e,{title:"CROSS JOIN (일부만 표시)",sql:`-- 카테시안 곱 (M x N 행)
SELECT e.사원명, d.부서명
FROM 사원 e CROSS JOIN 부서 d;

-- Oracle 전통 (WHERE 없이)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d;`,description:"전체 8 × 4 = 32행 중 일부만 표시합니다.",columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"김사장",부서명:"인사팀"},{사원명:"김사장",부서명:"영업팀"},{사원명:"김사장",부서명:"기획팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"이부장",부서명:"인사팀"},{사원명:"...",부서명:"..."}]}),s.jsx("h2",{children:"NATURAL JOIN"}),s.jsx(e,{title:"NATURAL JOIN",sql:`-- 동일 컬럼명으로 자동 JOIN
SELECT 사원명, 부서명
FROM 사원 NATURAL JOIN 부서;

-- 주의: 동일 이름 컬럼에 테이블 별칭 사용 불가!
-- 잘못된 예: SELECT e.부서번호 FROM 사원 e NATURAL JOIN 부서 d;`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"}]}),s.jsx("h2",{children:"USING 절"}),s.jsx(e,{title:"USING 절",sql:`-- 같은 이름 컬럼 지정
SELECT 사원명, 부서명
FROM 사원 JOIN 부서
USING (부서번호);

-- USING 컬럼에 테이블 별칭 불가!
-- SELECT e.부서번호  -- 오류!
-- SELECT 부서번호    -- 정상`,columns:["사원명","부서명"],rows:[{사원명:"김사장",부서명:"개발팀"},{사원명:"이부장",부서명:"개발팀"},{사원명:"박과장",부서명:"개발팀"},{사원명:"최대리",부서명:"인사팀"},{사원명:"정사원",부서명:"인사팀"},{사원명:"한대리",부서명:"영업팀"},{사원명:"오사원",부서명:"영업팀"}]}),s.jsx("h2",{children:"SELF JOIN"}),s.jsx(e,{title:"SELF JOIN",sql:`-- 같은 테이블을 자기 자신과 JOIN
SELECT e.사원명, m.사원명 AS 관리자명
FROM 사원 e LEFT JOIN 사원 m
ON e.관리자번호 = m.사원번호;`,columns:["사원명","관리자명"],rows:[{사원명:"김사장",관리자명:null},{사원명:"이부장",관리자명:"김사장"},{사원명:"박과장",관리자명:"이부장"},{사원명:"최대리",관리자명:"이부장"},{사원명:"정사원",관리자명:"최대리"},{사원명:"한대리",관리자명:"김사장"},{사원명:"오사원",관리자명:"한대리"},{사원명:"강인턴",관리자명:"박과장"}]}),s.jsx("h2",{children:"다중 테이블 JOIN"}),s.jsx(e,{title:"다중 테이블 JOIN",sql:`-- 3개 이상 테이블 JOIN
SELECT e.사원명, d.부서명, l.지역명
FROM 사원 e
  JOIN 부서 d ON e.부서번호 = d.부서번호
  JOIN 지역 l ON d.지역번호 = l.지역번호
WHERE l.국가 = '한국';`}),s.jsx("h2",{children:"ON vs WHERE (OUTER JOIN 시 차이)"}),s.jsx(e,{title:"ON 조건 vs WHERE 조건",sql:`-- ON 조건: JOIN 전에 필터 (OUTER 결과에 영향 없음)
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호 AND d.지역 = '서울';
-- → 모든 사원 + 서울 부서만 매칭 (비서울 부서 사원도 나옴, NULL)

-- WHERE 조건: JOIN 후에 필터
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호
WHERE d.지역 = '서울';
-- → 서울 부서 사원만 (LEFT JOIN이 INNER JOIN처럼 동작)`}),s.jsxs("div",{className:"info-box",children:[s.jsx("strong",{children:"OUTER JOIN에서 ON vs WHERE:"}),s.jsx("br",{}),"• ON 조건: JOIN 대상을 제한 (OUTER 효과 유지)",s.jsx("br",{}),"• WHERE 조건: 최종 결과를 필터 (OUTER 효과 사라질 수 있음)",s.jsx("br",{}),"이 차이를 묻는 문제가 자주 출제됩니다!"]})]}),s.jsx(l,{lessonId:"sqlref-join"})]})}export{i as default};
