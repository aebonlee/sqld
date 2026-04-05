import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function IntroExamGuide() {
  return (
    <div className="lesson-page">
      <SEOHead title="시험 안내 - SQLD Study" description="SQLD 시험 접수, 진행, 합격 기준 안내" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>시험 안내</h1>
        <p className="hero-subtitle">SQLD 시험 접수부터 합격까지</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>시험 접수 방법</h2>
        <ol>
          <li><strong>접수 사이트</strong>: <code>https://www.dataq.or.kr</code> (한국데이터산업진흥원)</li>
          <li><strong>회원가입</strong> 후 로그인</li>
          <li><strong>시험 접수</strong> 메뉴에서 SQLD 선택</li>
          <li><strong>고사장 선택</strong> (선착순 마감)</li>
          <li><strong>응시료 결제</strong> (30,000원)</li>
        </ol>

        <div className="info-box">
          <strong>주의:</strong> 인기 고사장은 접수 시작 직후 빠르게 마감됩니다. 접수 시작일에 미리 접속하세요.
        </div>

        <h2>시험 일정 (연 4회)</h2>
        <table>
          <thead>
            <tr><th>회차</th><th>접수 시기</th><th>시험일</th><th>합격 발표</th></tr>
          </thead>
          <tbody>
            <tr><td>제1회</td><td>1~2월</td><td>3월</td><td>4월</td></tr>
            <tr><td>제2회</td><td>4~5월</td><td>6월</td><td>7월</td></tr>
            <tr><td>제3회</td><td>7~8월</td><td>9월</td><td>10월</td></tr>
            <tr><td>제4회</td><td>10~11월</td><td>12월</td><td>1월</td></tr>
          </tbody>
        </table>

        <h2>시험 당일 안내</h2>
        <h3>준비물</h3>
        <ul>
          <li><strong>신분증</strong> (주민등록증, 운전면허증, 여권 중 1개)</li>
          <li><strong>수험표</strong> (출력 또는 모바일)</li>
          <li><strong>컴퓨터용 사인펜</strong> (OMR 마킹용)</li>
          <li><strong>수정 테이프</strong></li>
        </ul>

        <h3>시험 진행</h3>
        <table>
          <thead>
            <tr><th>구분</th><th>시간</th><th>내용</th></tr>
          </thead>
          <tbody>
            <tr><td>입실</td><td>~09:30</td><td>고사장 입실 완료</td></tr>
            <tr><td>시험</td><td>10:00~11:30</td><td>90분간 50문항 풀이</td></tr>
            <tr><td>퇴실</td><td>시험 종료 후</td><td>답안지 제출 후 퇴실</td></tr>
          </tbody>
        </table>

        <h2>합격 기준</h2>
        <table>
          <thead>
            <tr><th>기준</th><th>조건</th></tr>
          </thead>
          <tbody>
            <tr><td>총점 기준</td><td>100점 만점 중 <strong>60점 이상</strong></td></tr>
            <tr><td>과목별 기준</td><td>각 과목 <strong>40% 이상</strong> (과락 방지)</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>과목별 과락 기준:</strong><br/>
          • 1과목 (20점 만점): 8점 이상 (10문항 중 4문항)<br/>
          • 2과목 (80점 만점): 32점 이상 (40문항 중 16문항)
        </div>

        <h2>합격 후 자격증 발급</h2>
        <ol>
          <li>합격 발표일에 <code>dataq.or.kr</code>에서 확인</li>
          <li>자격증 발급 신청 (온라인)</li>
          <li>발급 수수료 결제 (5,200원)</li>
          <li>등기우편 또는 방문 수령</li>
        </ol>
      </article>

      <LessonComplete lessonId="intro-exam-guide" />
    </div>
  );
}
