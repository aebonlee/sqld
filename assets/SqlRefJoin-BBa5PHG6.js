import{j as e}from"./index-Cek5hyV7.js";import{S as d}from"./SEOHead-DoctwCeQ.js";import{L as s}from"./LessonComplete-C3vWPCaE.js";function n(){return e.jsxs("div",{className:"lesson-page",children:[e.jsx(d,{title:"JOIN 레퍼런스 - SQLD Study",description:"INNER, OUTER, CROSS, NATURAL, SELF JOIN 빠른 참조"}),e.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[e.jsx("h1",{children:"JOIN 레퍼런스"}),e.jsx("p",{className:"hero-subtitle",children:"INNER · OUTER · CROSS · NATURAL · SELF JOIN"})]}),e.jsxs("article",{className:"content-card","data-aos":"fade-up",children:[e.jsx("h2",{children:"JOIN 유형 총정리"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"JOIN"}),e.jsx("th",{children:"일치 행"}),e.jsx("th",{children:"불일치 행"}),e.jsx("th",{children:"NULL"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"INNER JOIN"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"제외"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"LEFT OUTER"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"왼쪽 포함"}),e.jsx("td",{children:"오른쪽 NULL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RIGHT OUTER"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"오른쪽 포함"}),e.jsx("td",{children:"왼쪽 NULL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"FULL OUTER"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"양쪽 포함"}),e.jsx("td",{children:"양쪽 NULL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"CROSS JOIN"})}),e.jsx("td",{children:"전체 조합"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"NATURAL JOIN"})}),e.jsx("td",{children:"O (동일 컬럼)"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"제외"})]})]})]}),e.jsx("h2",{children:"INNER JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- ANSI 표준
SELECT e.사원명, d.부서명
FROM 사원 e INNER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호;`})}),e.jsx("h2",{children:"LEFT OUTER JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- ANSI 표준 (모든 사원 + 부서 있으면 부서명)
SELECT e.사원명, d.부서명
FROM 사원 e LEFT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통 (+는 부족한 쪽)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호 = d.부서번호(+);`})}),e.jsx("h2",{children:"RIGHT OUTER JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- ANSI 표준 (모든 부서 + 사원 있으면 사원명)
SELECT e.사원명, d.부서명
FROM 사원 e RIGHT OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;

-- Oracle 전통
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d
WHERE e.부서번호(+) = d.부서번호;`})}),e.jsx("h2",{children:"FULL OUTER JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- ANSI 표준만 가능 (Oracle (+)로는 불가)
SELECT e.사원명, d.부서명
FROM 사원 e FULL OUTER JOIN 부서 d
ON e.부서번호 = d.부서번호;`})}),e.jsx("h2",{children:"CROSS JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- 카테시안 곱 (M x N 행)
SELECT e.사원명, d.부서명
FROM 사원 e CROSS JOIN 부서 d;

-- Oracle 전통 (WHERE 없이)
SELECT e.사원명, d.부서명
FROM 사원 e, 부서 d;`})}),e.jsx("h2",{children:"NATURAL JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- 동일 컬럼명으로 자동 JOIN
SELECT 사원명, 부서명
FROM 사원 NATURAL JOIN 부서;

-- 주의: 동일 이름 컬럼에 테이블 별칭 사용 불가!
-- 잘못된 예: SELECT e.부서번호 FROM 사원 e NATURAL JOIN 부서 d;`})}),e.jsx("h2",{children:"USING 절"}),e.jsx("pre",{children:e.jsx("code",{children:`-- 같은 이름 컬럼 지정
SELECT 사원명, 부서명
FROM 사원 JOIN 부서
USING (부서번호);

-- USING 컬럼에 테이블 별칭 불가!
-- SELECT e.부서번호  -- 오류!
-- SELECT 부서번호    -- 정상`})}),e.jsx("h2",{children:"SELF JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- 같은 테이블을 자기 자신과 JOIN
SELECT e.사원명, m.사원명 AS 관리자명
FROM 사원 e LEFT JOIN 사원 m
ON e.관리자번호 = m.사원번호;`})}),e.jsx("h2",{children:"다중 테이블 JOIN"}),e.jsx("pre",{children:e.jsx("code",{children:`-- 3개 이상 테이블 JOIN
SELECT e.사원명, d.부서명, l.지역명
FROM 사원 e
  JOIN 부서 d ON e.부서번호 = d.부서번호
  JOIN 지역 l ON d.지역번호 = l.지역번호
WHERE l.국가 = '한국';`})}),e.jsx("h2",{children:"ON vs WHERE (OUTER JOIN 시 차이)"}),e.jsx("pre",{children:e.jsx("code",{children:`-- ON 조건: JOIN 전에 필터 (OUTER 결과에 영향 없음)
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호 AND d.지역 = '서울';
-- → 모든 사원 + 서울 부서만 매칭 (비서울 부서 사원도 나옴, NULL)

-- WHERE 조건: JOIN 후에 필터
SELECT *
FROM 사원 e LEFT JOIN 부서 d
ON e.부서번호 = d.부서번호
WHERE d.지역 = '서울';
-- → 서울 부서 사원만 (LEFT JOIN이 INNER JOIN처럼 동작)`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"OUTER JOIN에서 ON vs WHERE:"}),e.jsx("br",{}),"• ON 조건: JOIN 대상을 제한 (OUTER 효과 유지)",e.jsx("br",{}),"• WHERE 조건: 최종 결과를 필터 (OUTER 효과 사라질 수 있음)",e.jsx("br",{}),"이 차이를 묻는 문제가 자주 출제됩니다!"]})]}),e.jsx(s,{lessonId:"sqlref-join"})]})}export{n as default};
