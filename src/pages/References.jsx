import SEOHead from '../components/SEOHead';

export default function References() {
  return (
    <div className="lesson-page">
      <SEOHead title="참고자료 - SQLD Study" description="SQLD 학습에 유용한 참고자료 모음" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>참고자료</h1>
        <p className="hero-subtitle">SQLD 학습에 유용한 자료 모음</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>공식 자료</h2>
        <table>
          <thead>
            <tr><th>자료</th><th>설명</th><th>링크</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>한국데이터산업진흥원</strong></td>
              <td>시험 접수, 합격 발표, 자격증 발급</td>
              <td><a href="https://www.dataq.or.kr" target="_blank" rel="noopener noreferrer">dataq.or.kr</a></td>
            </tr>
            <tr>
              <td><strong>SQL 가이드</strong></td>
              <td>K-data 공식 SQL 가이드 (PDF)</td>
              <td><a href="https://dataonair.or.kr" target="_blank" rel="noopener noreferrer">dataonair.or.kr</a></td>
            </tr>
            <tr>
              <td><strong>DBGuide.net</strong></td>
              <td>데이터 전문가 지식포털</td>
              <td><a href="https://www.dbguide.net" target="_blank" rel="noopener noreferrer">dbguide.net</a></td>
            </tr>
          </tbody>
        </table>

        <h2>SQL 실습 환경</h2>
        <table>
          <thead>
            <tr><th>도구</th><th>설명</th><th>특징</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Oracle Live SQL</strong></td>
              <td>Oracle 웹 기반 SQL 실습</td>
              <td>설치 불필요, Oracle 문법</td>
            </tr>
            <tr>
              <td><strong>MySQL Workbench</strong></td>
              <td>MySQL 데스크톱 클라이언트</td>
              <td>무료, 로컬 설치</td>
            </tr>
            <tr>
              <td><strong>SQLite Online</strong></td>
              <td>브라우저 기반 SQLite</td>
              <td>간단한 연습용</td>
            </tr>
            <tr>
              <td><strong>DBeaver</strong></td>
              <td>다중 DB 지원 클라이언트</td>
              <td>Oracle, MySQL, PostgreSQL 등</td>
            </tr>
          </tbody>
        </table>

        <h2>추천 학습 순서</h2>
        <ol>
          <li><strong>시험 소개 읽기</strong>: 시험 구조와 합격 기준 파악</li>
          <li><strong>1과목 학습</strong>: 데이터 모델링 개념 정리 (3~5일)</li>
          <li><strong>2과목 학습</strong>: SQL 문법 학습 + 실습 (2~3주)</li>
          <li><strong>SQL 레퍼런스 활용</strong>: 헷갈리는 문법 빠른 참조</li>
          <li><strong>모의고사 풀이</strong>: 실전 감각 훈련 + 오답 분석</li>
        </ol>

        <h2>핵심 암기 정리</h2>

        <h3>SQL 실행 순서</h3>
        <pre><code>{`FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`}</code></pre>

        <h3>정규화 단계</h3>
        <pre><code>{`1NF: 원자값 (반복 그룹 제거)
2NF: 부분 함수 종속 제거
3NF: 이행 함수 종속 제거
BCNF: 모든 결정자가 후보키`}</code></pre>

        <h3>NULL 규칙</h3>
        <pre><code>{`NULL + 숫자 = NULL
NULL = NULL → FALSE
NULL 비교: IS NULL / IS NOT NULL
COUNT(*): NULL 포함
COUNT(컬럼): NULL 제외
AVG: NULL 제외 후 계산`}</code></pre>

        <h3>JOIN 정리</h3>
        <pre><code>{`INNER JOIN: 양쪽 일치만
LEFT JOIN: 왼쪽 전체 + 오른쪽 일치 (불일치 시 NULL)
RIGHT JOIN: 오른쪽 전체 + 왼쪽 일치
FULL JOIN: 양쪽 전체
CROSS JOIN: 카테시안 곱 (M × N)
NATURAL JOIN: 동일 컬럼 자동 JOIN`}</code></pre>

        <h3>순위 함수</h3>
        <pre><code>{`RANK: 1, 1, 3 (건너뜀)
DENSE_RANK: 1, 1, 2 (이어감)
ROW_NUMBER: 1, 2, 3 (순번)`}</code></pre>

        <h2>시험 체크리스트</h2>
        <ul>
          <li>신분증 (주민등록증/운전면허증/여권)</li>
          <li>수험표 (출력 또는 모바일)</li>
          <li>컴퓨터용 사인펜 (OMR 마킹)</li>
          <li>수정 테이프</li>
          <li>시계 (전자기기 불가)</li>
        </ul>
      </article>
    </div>
  );
}
