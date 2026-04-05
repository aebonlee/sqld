// 기본 데이터셋 — 부서/사원 (SQLite 문법)
// 기존 sampleData.js의 Oracle SQL을 SQLite 호환으로 변환

const createSQL = `CREATE TABLE 부서 (
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
);`;

const insertSQL = `INSERT INTO 부서 VALUES (10, '개발팀', '서울');
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
INSERT INTO 사원 VALUES (1008, '강인턴', NULL, '인턴', NULL, 1003, '2023-03-01');`;

const sampleDataset = {
  id: 'department-employee',
  name: '부서/사원',
  description: '기본 실습 데이터 — 부서(4행) + 사원(8행), 계층형 관리자 구조',
  createSQL,
  insertSQL,
  tables: [
    { name: '부서', columns: ['부서번호', '부서명', '지역'] },
    { name: '사원', columns: ['사원번호', '사원명', '부서번호', '직급', '연봉', '관리자번호', '입사일'] },
  ],
  examples: [
    { title: '전체 사원 조회', sql: 'SELECT * FROM 사원;' },
    { title: '부서별 사원 수', sql: 'SELECT 부서번호, COUNT(*) AS 사원수 FROM 사원 WHERE 부서번호 IS NOT NULL GROUP BY 부서번호;' },
    { title: 'JOIN — 사원+부서', sql: 'SELECT e.사원명, d.부서명, e.직급\nFROM 사원 e JOIN 부서 d ON e.부서번호 = d.부서번호;' },
    { title: 'LEFT JOIN — 부서 없는 사원 포함', sql: 'SELECT e.사원명, d.부서명\nFROM 사원 e LEFT JOIN 부서 d ON e.부서번호 = d.부서번호;' },
    { title: '평균 연봉 이상 사원', sql: 'SELECT 사원명, 연봉\nFROM 사원\nWHERE 연봉 > (SELECT AVG(연봉) FROM 사원);' },
    { title: 'SELF JOIN — 관리자 이름', sql: 'SELECT e.사원명, m.사원명 AS 관리자명\nFROM 사원 e LEFT JOIN 사원 m ON e.관리자번호 = m.사원번호;' },
  ],
};

export default sampleDataset;
