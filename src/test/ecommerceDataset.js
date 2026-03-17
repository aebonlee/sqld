// 변형 데이터셋 1 — 고객/상품/주문 (E-Commerce)

const createSQL = `CREATE TABLE 고객 (
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
);`;

const insertSQL = `INSERT INTO 고객 VALUES (1, '김철수', '서울', 'VIP', '2022-01-10');
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
INSERT INTO 주문 VALUES (1008, 2, 102, 1, '2024-02-15');`;

const ecommerceDataset = {
  id: 'ecommerce',
  name: '상품/주문/고객',
  description: 'E-Commerce 데이터 — 고객(5행) + 상품(6행) + 주문(8행)',
  createSQL,
  insertSQL,
  tables: [
    { name: '고객', columns: ['고객번호', '고객명', '지역', '등급', '가입일'] },
    { name: '상품', columns: ['상품번호', '상품명', '카테고리', '가격', '재고'] },
    { name: '주문', columns: ['주문번호', '고객번호', '상품번호', '수량', '주문일'] },
  ],
  examples: [
    { title: '전체 주문 내역', sql: 'SELECT o.주문번호, c.고객명, p.상품명, o.수량, o.주문일\nFROM 주문 o\nJOIN 고객 c ON o.고객번호 = c.고객번호\nJOIN 상품 p ON o.상품번호 = p.상품번호;' },
    { title: '고객별 주문 금액 합계', sql: 'SELECT c.고객명, SUM(p.가격 * o.수량) AS 총주문금액\nFROM 주문 o\nJOIN 고객 c ON o.고객번호 = c.고객번호\nJOIN 상품 p ON o.상품번호 = p.상품번호\nGROUP BY c.고객명\nORDER BY 총주문금액 DESC;' },
    { title: '카테고리별 판매 수량', sql: 'SELECT p.카테고리, SUM(o.수량) AS 총수량\nFROM 주문 o JOIN 상품 p ON o.상품번호 = p.상품번호\nGROUP BY p.카테고리;' },
    { title: 'VIP 고객의 주문', sql: "SELECT c.고객명, p.상품명, o.수량\nFROM 주문 o\nJOIN 고객 c ON o.고객번호 = c.고객번호\nJOIN 상품 p ON o.상품번호 = p.상품번호\nWHERE c.등급 = 'VIP';" },
    { title: '주문 없는 상품', sql: 'SELECT p.상품명\nFROM 상품 p LEFT JOIN 주문 o ON p.상품번호 = o.상품번호\nWHERE o.주문번호 IS NULL;' },
    { title: '평균 가격 이상 상품', sql: 'SELECT 상품명, 가격\nFROM 상품\nWHERE 가격 >= (SELECT AVG(가격) FROM 상품);' },
  ],
};

export default ecommerceDataset;
