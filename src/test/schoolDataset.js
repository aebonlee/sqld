// 변형 데이터셋 2 — 학생/과목/수강 (School)

const createSQL = `CREATE TABLE 학생 (
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
);`;

const insertSQL = `INSERT INTO 학생 VALUES (2001, '홍길동', '컴퓨터공학', 3, 'Y');
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
INSERT INTO 수강 VALUES (2006, 'MA301', 65, '2024');`;

const schoolDataset = {
  id: 'school',
  name: '학생/수강/과목',
  description: '학사 데이터 — 학생(6행) + 과목(5행) + 수강(10행), N:M 관계',
  createSQL,
  insertSQL,
  tables: [
    { name: '학생', columns: ['학번', '이름', '학과', '학년', '장학금여부'] },
    { name: '과목', columns: ['과목코드', '과목명', '학점', '담당교수'] },
    { name: '수강', columns: ['학번', '과목코드', '성적', '수강년도'] },
  ],
  examples: [
    { title: '학생별 수강 과목', sql: 'SELECT s.이름, c.과목명, e.성적\nFROM 수강 e\nJOIN 학생 s ON e.학번 = s.학번\nJOIN 과목 c ON e.과목코드 = c.과목코드\nORDER BY s.이름;' },
    { title: '과목별 평균 성적', sql: 'SELECT c.과목명, ROUND(AVG(e.성적), 1) AS 평균성적\nFROM 수강 e JOIN 과목 c ON e.과목코드 = c.과목코드\nGROUP BY c.과목명;' },
    { title: '성적 90점 이상 학생', sql: 'SELECT s.이름, c.과목명, e.성적\nFROM 수강 e\nJOIN 학생 s ON e.학번 = s.학번\nJOIN 과목 c ON e.과목코드 = c.과목코드\nWHERE e.성적 >= 90;' },
    { title: '수강 과목이 2개 이상인 학생', sql: 'SELECT s.이름, COUNT(*) AS 수강수\nFROM 수강 e JOIN 학생 s ON e.학번 = s.학번\nGROUP BY s.이름\nHAVING COUNT(*) >= 2;' },
    { title: '교수별 수강 학생 수', sql: 'SELECT c.담당교수, COUNT(DISTINCT e.학번) AS 학생수\nFROM 수강 e JOIN 과목 c ON e.과목코드 = c.과목코드\nGROUP BY c.담당교수;' },
    { title: '장학생의 평균 성적', sql: "SELECT s.이름, ROUND(AVG(e.성적), 1) AS 평균성적\nFROM 수강 e JOIN 학생 s ON e.학번 = s.학번\nWHERE s.장학금여부 = 'Y'\nGROUP BY s.이름;" },
  ],
};

export default schoolDataset;
