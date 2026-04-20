import{r as N,j as e}from"./index-zBmtudqN.js";function L({title:c,sql:r,columns:n,rows:a,description:d}){const[s,t]=N.useState(!1),i=async()=>{try{await navigator.clipboard.writeText(r),t(!0),setTimeout(()=>t(!1),2e3)}catch{}};return e.jsxs("div",{className:"sql-block",children:[e.jsxs("div",{className:"sql-block-header",children:[e.jsxs("span",{className:"sql-block-title",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),c||"SQL"]}),e.jsx("button",{className:`sql-block-copy${s?" copied":""}`,onClick:i,children:s?"복사 완료!":"복사"})]}),e.jsx("pre",{className:"sql-block-code",children:e.jsx("code",{children:r})}),d&&e.jsx("div",{className:"sql-block-desc",children:d}),n&&a&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sql-block-result-header",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),"실행 결과 (",a.length,"건)"]}),e.jsx("div",{className:"sql-block-table-wrap",children:e.jsxs("table",{className:"sql-block-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:n.map((l,o)=>e.jsx("th",{children:l},o))})}),e.jsx("tbody",{children:a.map((l,o)=>e.jsx("tr",{children:n.map((h,j)=>e.jsx("td",{children:l[h]===null||l[h]===void 0?e.jsx("em",{className:"sql-null",children:"(NULL)"}):String(l[h])},j))},o))})]})})]})]})}const E=[{부서번호:10,부서명:"개발팀",지역:"서울"},{부서번호:20,부서명:"인사팀",지역:"서울"},{부서번호:30,부서명:"영업팀",지역:"부산"},{부서번호:40,부서명:"기획팀",지역:"대전"}],x=[{사원번호:1001,사원명:"김사장",부서번호:10,직급:"사장",연봉:9e3,관리자번호:null,입사일:"2010-01-15"},{사원번호:1002,사원명:"이부장",부서번호:10,직급:"부장",연봉:7e3,관리자번호:1001,입사일:"2012-03-20"},{사원번호:1003,사원명:"박과장",부서번호:10,직급:"과장",연봉:5e3,관리자번호:1002,입사일:"2015-07-10"},{사원번호:1004,사원명:"최대리",부서번호:20,직급:"대리",연봉:3500,관리자번호:1002,입사일:"2018-11-05"},{사원번호:1005,사원명:"정사원",부서번호:20,직급:"사원",연봉:2800,관리자번호:1004,입사일:"2020-06-15"},{사원번호:1006,사원명:"한대리",부서번호:30,직급:"대리",연봉:3200,관리자번호:1001,입사일:"2019-01-20"},{사원번호:1007,사원명:"오사원",부서번호:30,직급:"사원",연봉:2500,관리자번호:1006,입사일:"2021-09-01"},{사원번호:1008,사원명:"강인턴",부서번호:null,직급:"인턴",연봉:null,관리자번호:1003,입사일:"2023-03-01"}],T=["부서번호","부서명","지역"],p=["사원번호","사원명","부서번호","직급","연봉","관리자번호","입사일"],S=`-- 부서 테이블
CREATE TABLE 부서 (
  부서번호 NUMBER PRIMARY KEY,
  부서명   VARCHAR2(20) NOT NULL,
  지역     VARCHAR2(20)
);

-- 사원 테이블
CREATE TABLE 사원 (
  사원번호   NUMBER PRIMARY KEY,
  사원명     VARCHAR2(20) NOT NULL,
  부서번호   NUMBER REFERENCES 부서(부서번호),
  직급       VARCHAR2(10),
  연봉       NUMBER,
  관리자번호 NUMBER REFERENCES 사원(사원번호),
  입사일     DATE DEFAULT SYSDATE
);`,R=`INSERT INTO 부서 VALUES (10, '개발팀', '서울');
INSERT INTO 부서 VALUES (20, '인사팀', '서울');
INSERT INTO 부서 VALUES (30, '영업팀', '부산');
INSERT INTO 부서 VALUES (40, '기획팀', '대전');

INSERT INTO 사원 VALUES (1001, '김사장', 10, '사장', 9000, NULL, DATE '2010-01-15');
INSERT INTO 사원 VALUES (1002, '이부장', 10, '부장', 7000, 1001, DATE '2012-03-20');
INSERT INTO 사원 VALUES (1003, '박과장', 10, '과장', 5000, 1002, DATE '2015-07-10');
INSERT INTO 사원 VALUES (1004, '최대리', 20, '대리', 3500, 1002, DATE '2018-11-05');
INSERT INTO 사원 VALUES (1005, '정사원', 20, '사원', 2800, 1004, DATE '2020-06-15');
INSERT INTO 사원 VALUES (1006, '한대리', 30, '대리', 3200, 1001, DATE '2019-01-20');
INSERT INTO 사원 VALUES (1007, '오사원', 30, '사원', 2500, 1006, DATE '2021-09-01');
INSERT INTO 사원 VALUES (1008, '강인턴', NULL, '인턴', NULL, 1003, DATE '2023-03-01');

COMMIT;`;function m(){const[c,r]=N.useState(!1),n=(a,d)=>e.jsx("div",{className:"sample-data-table-wrap",children:e.jsxs("table",{className:"sample-data-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map((s,t)=>e.jsx("th",{children:s},t))})}),e.jsx("tbody",{children:d.map((s,t)=>e.jsx("tr",{children:a.map((i,l)=>e.jsx("td",{children:s[i]===null||s[i]===void 0?e.jsx("em",{className:"sql-null",children:"(NULL)"}):String(s[i])},l))},t))})]})});return e.jsxs("div",{className:"sample-data-panel",children:[e.jsxs("button",{className:"sample-data-toggle",onClick:()=>r(!c),children:[e.jsx("span",{className:`sample-data-arrow${c?" open":""}`,children:"▶"}),e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),"샘플 데이터 (부서·사원 테이블)"]}),c&&e.jsxs("div",{className:"sample-data-content",children:[e.jsxs("h4",{children:["부서 테이블 (",E.length,"행)"]}),n(T,E),e.jsxs("h4",{children:["사원 테이블 (",x.length,"행)"]}),n(p,x)]})]})}export{S as C,R as I,m as S,L as a};
