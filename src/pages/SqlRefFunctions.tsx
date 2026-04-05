import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';
import SqlBlock from '../components/SqlBlock';
import SampleDataPanel from '../components/SampleDataPanel';

export default function SqlRefFunctions() {
  return (
    <div className="lesson-page">
      <SEOHead title="SQL 함수 레퍼런스 - SQLD Study" description="문자열, 숫자, 날짜, 변환, NULL 함수 빠른 참조" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>SQL 함수 레퍼런스</h1>
        <p className="hero-subtitle">문자열 · 숫자 · 날짜 · 변환 · NULL · 집계 함수</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <SampleDataPanel />

        <h2>문자열 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>Oracle</th><th>SQL Server</th><th>예시</th><th>결과</th></tr>
          </thead>
          <tbody>
            <tr><td>대문자</td><td>UPPER(s)</td><td>UPPER(s)</td><td>UPPER(&apos;hello&apos;)</td><td>HELLO</td></tr>
            <tr><td>소문자</td><td>LOWER(s)</td><td>LOWER(s)</td><td>LOWER(&apos;HELLO&apos;)</td><td>hello</td></tr>
            <tr><td>첫글자 대문자</td><td>INITCAP(s)</td><td>-</td><td>INITCAP(&apos;hello world&apos;)</td><td>Hello World</td></tr>
            <tr><td>부분 문자열</td><td>SUBSTR(s,m,n)</td><td>SUBSTRING(s,m,n)</td><td>SUBSTR(&apos;ABCDE&apos;,2,3)</td><td>BCD</td></tr>
            <tr><td>길이</td><td>LENGTH(s)</td><td>LEN(s)</td><td>LENGTH(&apos;ABC&apos;)</td><td>3</td></tr>
            <tr><td>연결</td><td>CONCAT(a,b) 또는 ||</td><td>CONCAT(a,b) 또는 +</td><td>&apos;A&apos; || &apos;B&apos;</td><td>AB</td></tr>
            <tr><td>공백 제거</td><td>TRIM(s)</td><td>RTRIM(LTRIM(s))</td><td>TRIM(&apos; hi &apos;)</td><td>hi</td></tr>
            <tr><td>왼쪽 패딩</td><td>LPAD(s,n,c)</td><td>-</td><td>LPAD(&apos;5&apos;,3,&apos;0&apos;)</td><td>005</td></tr>
            <tr><td>치환</td><td>REPLACE(s,a,b)</td><td>REPLACE(s,a,b)</td><td>REPLACE(&apos;ABC&apos;,&apos;B&apos;,&apos;X&apos;)</td><td>AXC</td></tr>
            <tr><td>위치</td><td>INSTR(s,c)</td><td>CHARINDEX(c,s)</td><td>INSTR(&apos;ABCBC&apos;,&apos;B&apos;)</td><td>2</td></tr>
          </tbody>
        </table>

        <h2>숫자 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>예시</th><th>결과</th></tr>
          </thead>
          <tbody>
            <tr><td>ROUND(n,d)</td><td>반올림</td><td>ROUND(3.567,1)</td><td>3.6</td></tr>
            <tr><td>TRUNC(n,d)</td><td>버림 (Oracle)</td><td>TRUNC(3.567,1)</td><td>3.5</td></tr>
            <tr><td>CEIL(n) / CEILING(n)</td><td>올림</td><td>CEIL(3.1)</td><td>4</td></tr>
            <tr><td>FLOOR(n)</td><td>내림</td><td>FLOOR(3.9)</td><td>3</td></tr>
            <tr><td>MOD(a,b)</td><td>나머지</td><td>MOD(7,3)</td><td>1</td></tr>
            <tr><td>ABS(n)</td><td>절대값</td><td>ABS(-5)</td><td>5</td></tr>
            <tr><td>SIGN(n)</td><td>부호 (-1,0,1)</td><td>SIGN(-3)</td><td>-1</td></tr>
            <tr><td>POWER(a,b)</td><td>거듭제곱</td><td>POWER(2,3)</td><td>8</td></tr>
          </tbody>
        </table>

        <h2>날짜 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>Oracle</th><th>SQL Server</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>현재 날짜</td><td>SYSDATE</td><td>GETDATE()</td><td>현재 시스템 날짜/시간</td></tr>
            <tr><td>날짜 더하기</td><td>SYSDATE + 7</td><td>DATEADD(DAY,7,GETDATE())</td><td>7일 후</td></tr>
            <tr><td>날짜 차이</td><td>날짜1 - 날짜2</td><td>DATEDIFF(DAY,날짜1,날짜2)</td><td>일수 차이</td></tr>
            <tr><td>월 더하기</td><td>ADD_MONTHS(d,n)</td><td>DATEADD(MONTH,n,d)</td><td>n개월 후</td></tr>
            <tr><td>해당월 마지막</td><td>LAST_DAY(d)</td><td>EOMONTH(d)</td><td>월말 날짜</td></tr>
            <tr><td>날짜 잘라내기</td><td>TRUNC(d, &apos;MM&apos;)</td><td>-</td><td>월 초로 잘라내기</td></tr>
            <tr><td>다음 요일</td><td>NEXT_DAY(d, &apos;금&apos;)</td><td>-</td><td>다음 금요일</td></tr>
          </tbody>
        </table>

        <h2>변환 함수</h2>
        <table>
          <thead>
            <tr><th>변환</th><th>Oracle</th><th>SQL Server</th></tr>
          </thead>
          <tbody>
            <tr><td>숫자→문자</td><td>TO_CHAR(n, &apos;FM999,999&apos;)</td><td>CONVERT(VARCHAR, n)</td></tr>
            <tr><td>날짜→문자</td><td>TO_CHAR(d, &apos;YYYY-MM-DD&apos;)</td><td>CONVERT(VARCHAR, d, 23)</td></tr>
            <tr><td>문자→숫자</td><td>TO_NUMBER(s)</td><td>CAST(s AS INT)</td></tr>
            <tr><td>문자→날짜</td><td>TO_DATE(s, &apos;YYYY-MM-DD&apos;)</td><td>CONVERT(DATE, s)</td></tr>
          </tbody>
        </table>

        <h3>Oracle 날짜 포맷</h3>
        <table>
          <thead>
            <tr><th>포맷</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td>YYYY</td><td>4자리 연도</td><td>2025</td></tr>
            <tr><td>MM</td><td>월</td><td>03</td></tr>
            <tr><td>DD</td><td>일</td><td>15</td></tr>
            <tr><td>HH24:MI:SS</td><td>시:분:초 (24시간)</td><td>14:30:00</td></tr>
            <tr><td>DAY</td><td>요일</td><td>금요일</td></tr>
            <tr><td>DY</td><td>요일 (약자)</td><td>금</td></tr>
          </tbody>
        </table>

        <h2>NULL 관련 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>Oracle</th><th>SQL Server</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td>NVL / ISNULL</td><td>NVL(a, b)</td><td>ISNULL(a, b)</td><td>a가 NULL이면 b 반환</td></tr>
            <tr><td>NVL2</td><td>NVL2(a, b, c)</td><td>-</td><td>a가 NULL이면 c, 아니면 b</td></tr>
            <tr><td>NULLIF</td><td>NULLIF(a, b)</td><td>NULLIF(a, b)</td><td>a=b이면 NULL, 아니면 a</td></tr>
            <tr><td>COALESCE</td><td>COALESCE(a,b,...)</td><td>COALESCE(a,b,...)</td><td>첫 NOT NULL 반환</td></tr>
          </tbody>
        </table>

        <h2>CASE 표현식</h2>
        <SqlBlock
          title="CASE 표현식"
          sql={`-- Simple CASE
CASE 컬럼
  WHEN 값1 THEN 결과1
  WHEN 값2 THEN 결과2
  ELSE 기본값
END

-- Searched CASE
CASE
  WHEN 조건1 THEN 결과1
  WHEN 조건2 THEN 결과2
  ELSE 기본값
END

-- Oracle DECODE (CASE 대안)
DECODE(컬럼, 값1, 결과1, 값2, 결과2, 기본값)`}
          columns={['사원명', '연봉등급']}
          rows={[
            { 사원명: '김사장', 연봉등급: '상' },
            { 사원명: '이부장', 연봉등급: '상' },
            { 사원명: '박과장', 연봉등급: '중' },
            { 사원명: '최대리', 연봉등급: '중' },
            { 사원명: '한대리', 연봉등급: '중' },
            { 사원명: '정사원', 연봉등급: '하' },
            { 사원명: '오사원', 연봉등급: '하' },
            { 사원명: '강인턴', 연봉등급: '없음' },
          ]}
          description="CASE WHEN 연봉 >= 5000 THEN '상' WHEN 연봉 >= 3000 THEN '중' WHEN 연봉 IS NOT NULL THEN '하' ELSE '없음' END"
        />

        <h2>집계 함수</h2>
        <table>
          <thead>
            <tr><th>함수</th><th>설명</th><th>NULL 처리</th></tr>
          </thead>
          <tbody>
            <tr><td>COUNT(*)</td><td>전체 행 수</td><td>포함</td></tr>
            <tr><td>COUNT(컬럼)</td><td>NOT NULL 행 수</td><td>제외</td></tr>
            <tr><td>COUNT(DISTINCT 컬럼)</td><td>고유값 수</td><td>제외</td></tr>
            <tr><td>SUM(컬럼)</td><td>합계</td><td>제외</td></tr>
            <tr><td>AVG(컬럼)</td><td>평균</td><td>제외 (주의!)</td></tr>
            <tr><td>MAX(컬럼)</td><td>최대값</td><td>제외</td></tr>
            <tr><td>MIN(컬럼)</td><td>최소값</td><td>제외</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>AVG 주의:</strong> AVG는 NULL을 제외하고 계산합니다.<br/>
          예: 값이 100, 200, NULL인 경우<br/>
          • AVG = (100+200) / 2 = 150 (NULL 제외)<br/>
          • SUM/COUNT(*) = 300 / 3 = 100 (NULL 포함)
        </div>
      </article>

      <LessonComplete lessonId="sqlref-functions" />
    </div>
  );
}
