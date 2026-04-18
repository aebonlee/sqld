const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sql-wasm-browser-B9f7AkqH.js","assets/_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{r as t,_ as q,j as e}from"./index-B29e8-HH.js";import{S as G}from"./SEOHead-DS668P13.js";function Y({datasets:u}){const[R,V]=t.useState(0),[o,i]=t.useState(""),[r,N]=t.useState(null),[m,E]=t.useState(""),[U,T]=t.useState(null),[L,f]=t.useState([]),[j,O]=t.useState(!1),[p,g]=t.useState(!1),[h,y]=t.useState(!0),c=t.useRef(null),d=t.useRef(null),A=t.useRef(null),S=u[R];t.useEffect(()=>{let s=!1;return(async()=>{try{const n=(await q(async()=>{const{default:a}=await import("./sql-wasm-browser-B9f7AkqH.js").then(I=>I.s);return{default:a}},__vite__mapDeps([0,1]))).default,l=await n({locateFile:()=>"/sql-wasm.wasm"});s||(d.current=l,x(l,u[R]))}catch(n){s||E("sql.js 초기화 실패: "+n.message)}})(),()=>{s=!0}},[]);const x=t.useCallback((s,n)=>{y(!0),N(null),E(""),T(null);try{c.current&&c.current.close();const l=new s.Database;l.run(n.createSQL),n.insertSQL.split(";").filter(a=>a.trim()).forEach(a=>l.run(a+";")),c.current=l}catch(l){E("DB 초기화 실패: "+l.message)}y(!1)},[]),v=s=>{V(s),i(""),N(null),E(""),T(null),O(!1),g(!1),d.current&&x(d.current,u[s])},C=t.useCallback(()=>{if(!c.current||!o.trim())return;E(""),N(null);const s=performance.now();try{const n=c.current.exec(o),l=performance.now();T(l-s),n.length>0?N(n[0]):N({columns:[],values:[]}),f(a=>[{sql:o.trim(),time:new Date().toLocaleTimeString()},...a].slice(0,5))}catch(n){const l=performance.now();T(l-s),E(n.message)}},[o]),b=()=>{d.current&&x(d.current,S),i(""),N(null),E(""),T(null)},M=s=>{(s.ctrlKey||s.metaKey)&&s.key==="Enter"&&(s.preventDefault(),C())},F=s=>{i(s),O(!1),A.current?.focus()},w=()=>{if(!c.current||!S)return null;const s=[];for(const n of S.tables)try{const l=c.current.exec(`SELECT * FROM ${n.name};`);s.push({name:n.name,columns:n.columns,rows:l[0]?.values||[]})}catch{s.push({name:n.name,columns:n.columns,rows:[]})}return s};return e.jsxs("div",{className:"playground-wrap",children:[e.jsx("div",{className:"playground-tabs",children:u.map((s,n)=>e.jsx("button",{className:`playground-tab${n===R?" active":""}`,onClick:()=>v(n),children:s.name},s.id))}),e.jsxs("div",{className:"playground-desc-row",children:[e.jsx("p",{className:"playground-desc",children:S.description}),e.jsxs("div",{className:"playground-examples-wrap",children:[e.jsx("button",{className:"playground-btn playground-btn-examples",onClick:()=>O(!j),children:"예제 SQL ▾"}),j&&e.jsx("div",{className:"playground-examples-dropdown",children:S.examples.map((s,n)=>e.jsx("button",{onClick:()=>F(s.sql),children:s.title},n))})]})]}),e.jsxs("div",{className:"playground-schema-section",children:[e.jsxs("button",{className:"playground-schema-toggle",onClick:()=>g(!p),children:[e.jsx("span",{className:`playground-arrow${p?" open":""}`,children:"▶"}),e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),"현재 데이터셋 테이블 보기"]}),p&&!h&&e.jsx("div",{className:"playground-schema-content",children:(w()||[]).map(s=>e.jsxs("div",{className:"playground-schema-table",children:[e.jsxs("h4",{children:[s.name," (",s.rows.length,"행)"]}),e.jsx("div",{className:"playground-table-wrap",children:e.jsxs("table",{className:"playground-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:s.columns.map((n,l)=>e.jsx("th",{children:n},l))})}),e.jsx("tbody",{children:s.rows.map((n,l)=>e.jsx("tr",{children:n.map((a,I)=>e.jsx("td",{children:a==null?e.jsx("em",{className:"sql-null",children:"(NULL)"}):String(a)},I))},l))})]})})]},s.name))})]}),e.jsxs("div",{className:"playground-editor-section",children:[e.jsxs("div",{className:"playground-editor-header",children:[e.jsx("span",{children:"SQL 입력"}),e.jsx("span",{className:"playground-shortcut",children:"Ctrl + Enter로 실행"})]}),e.jsx("textarea",{ref:A,className:"playground-editor",value:o,onChange:s=>i(s.target.value),onKeyDown:M,placeholder:"SELECT * FROM 부서;",rows:6,spellCheck:!1})]}),e.jsx("div",{className:"playground-toolbar",children:e.jsxs("div",{className:"playground-toolbar-left",children:[e.jsxs("button",{className:"playground-btn playground-btn-run",onClick:C,disabled:h||!o.trim(),children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8 5v14l11-7z"})}),"실행"]}),e.jsx("button",{className:"playground-btn playground-btn-reset",onClick:b,children:"초기화"})]})}),h&&e.jsxs("div",{className:"playground-loading",children:[e.jsx("div",{className:"loading-spinner"})," 데이터베이스 초기화 중..."]}),m&&e.jsxs("div",{className:"playground-error",children:[e.jsx("strong",{children:"Error:"})," ",m]}),r&&!m&&e.jsxs("div",{className:"playground-result",children:[e.jsxs("div",{className:"playground-result-header",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),"실행 결과",r.values?` (${r.values.length}건)`:" (0건)",U!==null&&e.jsxs("span",{className:"playground-elapsed",children:[" — ",U.toFixed(1),"ms"]})]}),r.columns&&r.columns.length>0?e.jsx("div",{className:"playground-table-wrap",children:e.jsxs("table",{className:"playground-table playground-result-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.columns.map((s,n)=>e.jsx("th",{children:s},n))})}),e.jsx("tbody",{children:r.values.map((s,n)=>e.jsx("tr",{children:s.map((l,a)=>e.jsx("td",{children:l==null?e.jsx("em",{className:"sql-null",children:"(NULL)"}):String(l)},a))},n))})]})}):e.jsx("div",{className:"playground-no-result",children:"쿼리가 성공적으로 실행되었습니다 (반환된 행 없음)."})]}),L.length>0&&e.jsxs("div",{className:"playground-history",children:[e.jsxs("div",{className:"playground-history-title",children:["실행 히스토리 (최근 ",L.length,"개)"]}),e.jsx("ul",{children:L.map((s,n)=>e.jsx("li",{children:e.jsxs("button",{className:"playground-history-item",onClick:()=>{i(s.sql),A.current?.focus()},children:[e.jsx("code",{children:s.sql.length>80?s.sql.slice(0,80)+"...":s.sql}),e.jsx("span",{className:"playground-history-time",children:s.time})]})},n))})]})]})}const P=`CREATE TABLE 부서 (
  부서번호 INTEGER PRIMARY KEY,
  부서명   TEXT NOT NULL,
  지역     TEXT
);

CREATE TABLE 사원 (
  사원번호   INTEGER PRIMARY KEY,
  사원명     TEXT NOT NULL,
  부서번호   INTEGER REFERENCES 부서(부서번호),
  직급       TEXT,
  연봉       INTEGER,
  관리자번호 INTEGER REFERENCES 사원(사원번호),
  입사일     TEXT DEFAULT (date('now'))
);`,B=`INSERT INTO 부서 VALUES (10, '개발팀', '서울');
INSERT INTO 부서 VALUES (20, '인사팀', '서울');
INSERT INTO 부서 VALUES (30, '영업팀', '부산');
INSERT INTO 부서 VALUES (40, '기획팀', '대전');

INSERT INTO 사원 VALUES (1001, '김사장', 10, '사장', 9000, NULL, '2010-01-15');
INSERT INTO 사원 VALUES (1002, '이부장', 10, '부장', 7000, 1001, '2012-03-20');
INSERT INTO 사원 VALUES (1003, '박과장', 10, '과장', 5000, 1002, '2015-07-10');
INSERT INTO 사원 VALUES (1004, '최대리', 20, '대리', 3500, 1002, '2018-11-05');
INSERT INTO 사원 VALUES (1005, '정사원', 20, '사원', 2800, 1004, '2020-06-15');
INSERT INTO 사원 VALUES (1006, '한대리', 30, '대리', 3200, 1001, '2019-01-20');
INSERT INTO 사원 VALUES (1007, '오사원', 30, '사원', 2500, 1006, '2021-09-01');
INSERT INTO 사원 VALUES (1008, '강인턴', NULL, '인턴', NULL, 1003, '2023-03-01');`,D={id:"department-employee",name:"부서/사원",description:"기본 실습 데이터 — 부서(4행) + 사원(8행), 계층형 관리자 구조",createSQL:P,insertSQL:B,tables:[{name:"부서",columns:["부서번호","부서명","지역"]},{name:"사원",columns:["사원번호","사원명","부서번호","직급","연봉","관리자번호","입사일"]}],examples:[{title:"전체 사원 조회",sql:"SELECT * FROM 사원;"},{title:"부서별 사원 수",sql:"SELECT 부서번호, COUNT(*) AS 사원수 FROM 사원 WHERE 부서번호 IS NOT NULL GROUP BY 부서번호;"},{title:"JOIN — 사원+부서",sql:`SELECT e.사원명, d.부서명, e.직급
FROM 사원 e JOIN 부서 d ON e.부서번호 = d.부서번호;`},{title:"LEFT JOIN — 부서 없는 사원 포함",sql:`SELECT e.사원명, d.부서명
FROM 사원 e LEFT JOIN 부서 d ON e.부서번호 = d.부서번호;`},{title:"평균 연봉 이상 사원",sql:`SELECT 사원명, 연봉
FROM 사원
WHERE 연봉 > (SELECT AVG(연봉) FROM 사원);`},{title:"SELF JOIN — 관리자 이름",sql:`SELECT e.사원명, m.사원명 AS 관리자명
FROM 사원 e LEFT JOIN 사원 m ON e.관리자번호 = m.사원번호;`}]},J=[D],Q=`CREATE TABLE 고객 (
  고객번호 INTEGER PRIMARY KEY,
  고객명   TEXT NOT NULL,
  지역     TEXT,
  등급     TEXT,
  가입일   TEXT
);

CREATE TABLE 상품 (
  상품번호   INTEGER PRIMARY KEY,
  상품명     TEXT NOT NULL,
  카테고리   TEXT,
  가격       INTEGER,
  재고       INTEGER
);

CREATE TABLE 주문 (
  주문번호   INTEGER PRIMARY KEY,
  고객번호   INTEGER REFERENCES 고객(고객번호),
  상품번호   INTEGER REFERENCES 상품(상품번호),
  수량       INTEGER,
  주문일     TEXT
);`,X=`INSERT INTO 고객 VALUES (1, '김철수', '서울', 'VIP', '2022-01-10');
INSERT INTO 고객 VALUES (2, '이영희', '부산', '일반', '2022-03-15');
INSERT INTO 고객 VALUES (3, '박민수', '서울', 'VIP', '2021-11-20');
INSERT INTO 고객 VALUES (4, '최지은', '대전', '일반', '2023-06-01');
INSERT INTO 고객 VALUES (5, '정하늘', '광주', '우수', '2023-01-25');

INSERT INTO 상품 VALUES (101, '노트북', '전자기기', 1500000, 30);
INSERT INTO 상품 VALUES (102, '키보드', '주변기기', 85000, 100);
INSERT INTO 상품 VALUES (103, '모니터', '전자기기', 450000, 50);
INSERT INTO 상품 VALUES (104, '마우스', '주변기기', 45000, 200);
INSERT INTO 상품 VALUES (105, '헤드셋', '주변기기', 120000, 80);
INSERT INTO 상품 VALUES (106, '태블릿', '전자기기', 800000, 25);

INSERT INTO 주문 VALUES (1001, 1, 101, 1, '2024-01-05');
INSERT INTO 주문 VALUES (1002, 1, 102, 2, '2024-01-05');
INSERT INTO 주문 VALUES (1003, 2, 103, 1, '2024-01-10');
INSERT INTO 주문 VALUES (1004, 3, 101, 1, '2024-01-15');
INSERT INTO 주문 VALUES (1005, 3, 104, 3, '2024-01-15');
INSERT INTO 주문 VALUES (1006, 4, 105, 1, '2024-02-01');
INSERT INTO 주문 VALUES (1007, 5, 106, 1, '2024-02-10');
INSERT INTO 주문 VALUES (1008, 2, 102, 1, '2024-02-15');`,k={id:"ecommerce",name:"상품/주문/고객",description:"E-Commerce 데이터 — 고객(5행) + 상품(6행) + 주문(8행)",createSQL:Q,insertSQL:X,tables:[{name:"고객",columns:["고객번호","고객명","지역","등급","가입일"]},{name:"상품",columns:["상품번호","상품명","카테고리","가격","재고"]},{name:"주문",columns:["주문번호","고객번호","상품번호","수량","주문일"]}],examples:[{title:"전체 주문 내역",sql:`SELECT o.주문번호, c.고객명, p.상품명, o.수량, o.주문일
FROM 주문 o
JOIN 고객 c ON o.고객번호 = c.고객번호
JOIN 상품 p ON o.상품번호 = p.상품번호;`},{title:"고객별 주문 금액 합계",sql:`SELECT c.고객명, SUM(p.가격 * o.수량) AS 총주문금액
FROM 주문 o
JOIN 고객 c ON o.고객번호 = c.고객번호
JOIN 상품 p ON o.상품번호 = p.상품번호
GROUP BY c.고객명
ORDER BY 총주문금액 DESC;`},{title:"카테고리별 판매 수량",sql:`SELECT p.카테고리, SUM(o.수량) AS 총수량
FROM 주문 o JOIN 상품 p ON o.상품번호 = p.상품번호
GROUP BY p.카테고리;`},{title:"VIP 고객의 주문",sql:`SELECT c.고객명, p.상품명, o.수량
FROM 주문 o
JOIN 고객 c ON o.고객번호 = c.고객번호
JOIN 상품 p ON o.상품번호 = p.상품번호
WHERE c.등급 = 'VIP';`},{title:"주문 없는 상품",sql:`SELECT p.상품명
FROM 상품 p LEFT JOIN 주문 o ON p.상품번호 = o.상품번호
WHERE o.주문번호 IS NULL;`},{title:"평균 가격 이상 상품",sql:`SELECT 상품명, 가격
FROM 상품
WHERE 가격 >= (SELECT AVG(가격) FROM 상품);`}]},_=`CREATE TABLE 학생 (
  학번       INTEGER PRIMARY KEY,
  이름       TEXT NOT NULL,
  학과       TEXT,
  학년       INTEGER,
  장학금여부 TEXT DEFAULT 'N'
);

CREATE TABLE 과목 (
  과목코드   TEXT PRIMARY KEY,
  과목명     TEXT NOT NULL,
  학점       INTEGER,
  담당교수   TEXT
);

CREATE TABLE 수강 (
  학번       INTEGER REFERENCES 학생(학번),
  과목코드   TEXT REFERENCES 과목(과목코드),
  성적       INTEGER,
  수강년도   TEXT,
  PRIMARY KEY (학번, 과목코드, 수강년도)
);`,K=`INSERT INTO 학생 VALUES (2001, '홍길동', '컴퓨터공학', 3, 'Y');
INSERT INTO 학생 VALUES (2002, '김영수', '컴퓨터공학', 2, 'N');
INSERT INTO 학생 VALUES (2003, '이민지', '경영학', 4, 'Y');
INSERT INTO 학생 VALUES (2004, '박서준', '경영학', 1, 'N');
INSERT INTO 학생 VALUES (2005, '최유리', '수학', 3, 'Y');
INSERT INTO 학생 VALUES (2006, '정태현', '수학', 2, 'N');

INSERT INTO 과목 VALUES ('CS101', '데이터베이스', 3, '김교수');
INSERT INTO 과목 VALUES ('CS102', '알고리즘', 3, '이교수');
INSERT INTO 과목 VALUES ('BA201', '마케팅원론', 2, '박교수');
INSERT INTO 과목 VALUES ('MA301', '선형대수', 3, '최교수');
INSERT INTO 과목 VALUES ('CS201', '운영체제', 3, '김교수');

INSERT INTO 수강 VALUES (2001, 'CS101', 95, '2024');
INSERT INTO 수강 VALUES (2001, 'CS102', 88, '2024');
INSERT INTO 수강 VALUES (2002, 'CS101', 78, '2024');
INSERT INTO 수강 VALUES (2002, 'CS201', 82, '2024');
INSERT INTO 수강 VALUES (2003, 'BA201', 91, '2024');
INSERT INTO 수강 VALUES (2003, 'CS101', 85, '2024');
INSERT INTO 수강 VALUES (2004, 'BA201', 72, '2024');
INSERT INTO 수강 VALUES (2005, 'MA301', 97, '2024');
INSERT INTO 수강 VALUES (2005, 'CS102', 90, '2024');
INSERT INTO 수강 VALUES (2006, 'MA301', 65, '2024');`,H={id:"school",name:"학생/수강/과목",description:"학사 데이터 — 학생(6행) + 과목(5행) + 수강(10행), N:M 관계",createSQL:_,insertSQL:K,tables:[{name:"학생",columns:["학번","이름","학과","학년","장학금여부"]},{name:"과목",columns:["과목코드","과목명","학점","담당교수"]},{name:"수강",columns:["학번","과목코드","성적","수강년도"]}],examples:[{title:"학생별 수강 과목",sql:`SELECT s.이름, c.과목명, e.성적
FROM 수강 e
JOIN 학생 s ON e.학번 = s.학번
JOIN 과목 c ON e.과목코드 = c.과목코드
ORDER BY s.이름;`},{title:"과목별 평균 성적",sql:`SELECT c.과목명, ROUND(AVG(e.성적), 1) AS 평균성적
FROM 수강 e JOIN 과목 c ON e.과목코드 = c.과목코드
GROUP BY c.과목명;`},{title:"성적 90점 이상 학생",sql:`SELECT s.이름, c.과목명, e.성적
FROM 수강 e
JOIN 학생 s ON e.학번 = s.학번
JOIN 과목 c ON e.과목코드 = c.과목코드
WHERE e.성적 >= 90;`},{title:"수강 과목이 2개 이상인 학생",sql:`SELECT s.이름, COUNT(*) AS 수강수
FROM 수강 e JOIN 학생 s ON e.학번 = s.학번
GROUP BY s.이름
HAVING COUNT(*) >= 2;`},{title:"교수별 수강 학생 수",sql:`SELECT c.담당교수, COUNT(DISTINCT e.학번) AS 학생수
FROM 수강 e JOIN 과목 c ON e.과목코드 = c.과목코드
GROUP BY c.담당교수;`},{title:"장학생의 평균 성적",sql:`SELECT s.이름, ROUND(AVG(e.성적), 1) AS 평균성적
FROM 수강 e JOIN 학생 s ON e.학번 = s.학번
WHERE s.장학금여부 = 'Y'
GROUP BY s.이름;`}]},W=[k,H],$=[...J,...W];function ee(){return e.jsxs("div",{className:"lesson-page",children:[e.jsx(G,{title:"SQL Playground - SQLD Study",description:"브라우저에서 직접 SQL을 작성하고 실행 결과를 확인하세요"}),e.jsxs("section",{className:"hero-compact","data-aos":"fade-up",children:[e.jsx("h1",{children:"SQL Playground"}),e.jsx("p",{className:"hero-subtitle",children:"브라우저에서 직접 SQL을 작성하고 실행 결과를 즉시 확인하세요"})]}),e.jsx("article",{className:"content-card","data-aos":"fade-up",children:e.jsx(Y,{datasets:$})})]})}export{ee as default};
