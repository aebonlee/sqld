import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject2Ch3() {
  return (
    <div className="lesson-page">
      <SEOHead title="3장: 관리 구문 - SQLD Study" description="MERGE, TCL, 제약조건, DCL" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>3장: 관리 구문</h1>
        <p className="hero-subtitle">MERGE, TCL, 제약조건, DCL</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>1. MERGE 문</h2>
        <p>
          MERGE는 <strong>INSERT와 UPDATE를 동시에</strong> 수행하는 DML입니다.
          대상 테이블에 데이터가 있으면 UPDATE, 없으면 INSERT합니다.
        </p>

        <pre><code>{`MERGE INTO 대상테이블 T
USING 소스테이블 S
ON (T.키 = S.키)
WHEN MATCHED THEN
  UPDATE SET T.컬럼1 = S.컬럼1, T.컬럼2 = S.컬럼2
WHEN NOT MATCHED THEN
  INSERT (T.키, T.컬럼1, T.컬럼2)
  VALUES (S.키, S.컬럼1, S.컬럼2);`}</code></pre>

        <h3>MERGE 활용 예시</h3>
        <pre><code>{`-- 일별 매출 집계 테이블 갱신
MERGE INTO 일매출 T
USING (SELECT 매장코드, TRUNC(SYSDATE) AS 매출일,
              SUM(금액) AS 총매출
       FROM 매출상세
       WHERE 매출일자 = TRUNC(SYSDATE)
       GROUP BY 매장코드) S
ON (T.매장코드 = S.매장코드 AND T.매출일 = S.매출일)
WHEN MATCHED THEN
  UPDATE SET T.총매출 = S.총매출
WHEN NOT MATCHED THEN
  INSERT (매장코드, 매출일, 총매출)
  VALUES (S.매장코드, S.매출일, S.총매출);`}</code></pre>

        <h2>2. TCL 심화 (Transaction Control)</h2>

        <h3>트랜잭션의 ACID 특성</h3>
        <table>
          <thead>
            <tr><th>특성</th><th>영어</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>원자성</strong></td><td>Atomicity</td><td>전부 실행 또는 전부 취소 (All or Nothing)</td></tr>
            <tr><td><strong>일관성</strong></td><td>Consistency</td><td>트랜잭션 전후 데이터 일관성 유지</td></tr>
            <tr><td><strong>격리성</strong></td><td>Isolation</td><td>동시 실행 트랜잭션 간 간섭 없음</td></tr>
            <tr><td><strong>지속성</strong></td><td>Durability</td><td>COMMIT 후 결과 영구 보존</td></tr>
          </tbody>
        </table>

        <h3>트랜잭션 격리 수준</h3>
        <table>
          <thead>
            <tr><th>격리 수준</th><th>Dirty Read</th><th>Non-Repeatable Read</th><th>Phantom Read</th></tr>
          </thead>
          <tbody>
            <tr><td>READ UNCOMMITTED</td><td>O</td><td>O</td><td>O</td></tr>
            <tr><td>READ COMMITTED</td><td>X</td><td>O</td><td>O</td></tr>
            <tr><td>REPEATABLE READ</td><td>X</td><td>X</td><td>O</td></tr>
            <tr><td>SERIALIZABLE</td><td>X</td><td>X</td><td>X</td></tr>
          </tbody>
        </table>

        <h3>읽기 이상 현상</h3>
        <ul>
          <li><strong>Dirty Read</strong>: 커밋되지 않은 데이터를 읽음</li>
          <li><strong>Non-Repeatable Read</strong>: 같은 쿼리 반복 시 결과가 다름 (UPDATE)</li>
          <li><strong>Phantom Read</strong>: 같은 쿼리 반복 시 행이 추가/삭제됨 (INSERT/DELETE)</li>
        </ul>

        <div className="info-box">
          <strong>Oracle 기본 격리 수준:</strong> READ COMMITTED<br/>
          <strong>SQL Server 기본 격리 수준:</strong> READ COMMITTED
        </div>

        <h2>3. 제약조건 심화</h2>

        <h3>FOREIGN KEY 옵션</h3>
        <table>
          <thead>
            <tr><th>옵션</th><th>부모 삭제 시</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>RESTRICT</strong></td><td>삭제 불가</td><td>자식 있으면 부모 삭제 거부 (기본값)</td></tr>
            <tr><td><strong>CASCADE</strong></td><td>자식도 삭제</td><td>부모 삭제 시 관련 자식 모두 삭제</td></tr>
            <tr><td><strong>SET NULL</strong></td><td>자식 FK = NULL</td><td>부모 삭제 시 자식 FK를 NULL로 변경</td></tr>
            <tr><td><strong>SET DEFAULT</strong></td><td>자식 FK = 기본값</td><td>부모 삭제 시 자식 FK를 기본값으로</td></tr>
          </tbody>
        </table>

        <pre><code>{`CREATE TABLE 주문 (
  주문번호 NUMBER PRIMARY KEY,
  고객번호 NUMBER REFERENCES 고객(고객번호)
    ON DELETE CASCADE,      -- 고객 삭제 시 주문도 삭제
  주문일자 DATE
);`}</code></pre>

        <h3>제약조건 관리</h3>
        <pre><code>{`-- 제약조건 추가
ALTER TABLE 사원 ADD CONSTRAINT pk_사원
  PRIMARY KEY (사원번호);

ALTER TABLE 사원 ADD CONSTRAINT fk_부서
  FOREIGN KEY (부서번호) REFERENCES 부서(부서번호);

-- 제약조건 삭제
ALTER TABLE 사원 DROP CONSTRAINT pk_사원;

-- 제약조건 비활성화/활성화
ALTER TABLE 사원 DISABLE CONSTRAINT fk_부서;
ALTER TABLE 사원 ENABLE CONSTRAINT fk_부서;`}</code></pre>

        <h2>4. DCL (Data Control Language)</h2>

        <h3>GRANT - 권한 부여</h3>
        <pre><code>{`-- 시스템 권한 부여
GRANT CREATE TABLE, CREATE VIEW TO user1;

-- 객체 권한 부여
GRANT SELECT, INSERT ON 사원 TO user1;

-- WITH GRANT OPTION: 받은 권한을 다른 사용자에게 줄 수 있음
GRANT SELECT ON 사원 TO user1 WITH GRANT OPTION;`}</code></pre>

        <h3>REVOKE - 권한 회수</h3>
        <pre><code>{`REVOKE SELECT ON 사원 FROM user1;

-- CASCADE: WITH GRANT OPTION으로 전파된 권한도 함께 회수
REVOKE SELECT ON 사원 FROM user1 CASCADE;`}</code></pre>

        <h3>ROLE - 권한 그룹</h3>
        <pre><code>{`-- ROLE 생성 및 권한 부여
CREATE ROLE manager_role;
GRANT SELECT, INSERT, UPDATE ON 사원 TO manager_role;

-- 사용자에게 ROLE 부여
GRANT manager_role TO user1, user2;`}</code></pre>

        <h2>5. VIEW (뷰)</h2>
        <pre><code>{`-- 뷰 생성
CREATE OR REPLACE VIEW 서울사원 AS
SELECT 사원번호, 사원명, 부서번호
FROM 사원
WHERE 지역 = '서울'
WITH CHECK OPTION;  -- 뷰 조건 위반 DML 방지

-- 뷰 삭제
DROP VIEW 서울사원;`}</code></pre>

        <h3>뷰의 특징</h3>
        <ul>
          <li>논리적인 가상 테이블 (데이터 저장 X)</li>
          <li>기본 테이블의 보안 관리에 활용</li>
          <li>복잡한 쿼리 단순화</li>
          <li><strong>단순 뷰</strong>: DML 가능 (하나의 테이블, 함수/GROUP BY 없음)</li>
          <li><strong>복합 뷰</strong>: DML 제한 (JOIN, 함수, GROUP BY 포함)</li>
        </ul>

        <h2>6. 기타 객체</h2>

        <h3>시퀀스 (SEQUENCE)</h3>
        <pre><code>{`CREATE SEQUENCE emp_seq
  START WITH 1
  INCREMENT BY 1
  MAXVALUE 99999
  NOCYCLE
  NOCACHE;

-- 사용
INSERT INTO 사원 (사원번호) VALUES (emp_seq.NEXTVAL);
SELECT emp_seq.CURRVAL FROM DUAL;`}</code></pre>

        <h3>인덱스 (INDEX)</h3>
        <pre><code>{`-- 인덱스 생성
CREATE INDEX idx_사원_부서 ON 사원(부서번호);

-- 유니크 인덱스
CREATE UNIQUE INDEX idx_사원_이메일 ON 사원(이메일);

-- 인덱스 삭제
DROP INDEX idx_사원_부서;`}</code></pre>

        <h3>인덱스 사용이 유리한 경우</h3>
        <ul>
          <li>WHERE 절에 자주 사용되는 컬럼</li>
          <li>JOIN 조건에 사용되는 컬럼</li>
          <li>ORDER BY에 자주 사용되는 컬럼</li>
          <li>데이터 분포가 넓은(Cardinality가 높은) 컬럼</li>
        </ul>

        <div className="info-box">
          <strong>인덱스가 불리한 경우:</strong><br/>
          • DML이 빈번한 테이블 (INSERT/UPDATE/DELETE 성능 저하)<br/>
          • 데이터가 적은 테이블<br/>
          • 대부분의 행을 조회하는 경우 (Full Scan이 유리)
        </div>
      </article>

      <LessonComplete lessonId="subject2-ch3" />
    </div>
  );
}
