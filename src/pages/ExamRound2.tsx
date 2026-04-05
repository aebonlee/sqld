import { useState, useEffect, useCallback } from 'react';
import SEOHead from '../components/SEOHead';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';

const QUESTIONS = [
  { id: 1, q: '속성(Attribute)의 분류 중 다른 속성에서 계산되어 파생된 속성은?',
    opts: ['기본 속성', '설계 속성', '파생 속성', 'PK 속성'],
    ans: 2, exp: '파생 속성은 다른 속성의 값을 계산하여 생성된 속성입니다. 예: 합계, 평균' },
  { id: 2, q: '다음 쿼리의 결과 행 수는? (사원 5명, 부서 3개)\nSELECT * FROM 사원 CROSS JOIN 부서;',
    opts: ['3', '5', '8', '15'],
    ans: 3, exp: 'CROSS JOIN은 카테시안 곱으로 5 × 3 = 15행이 됩니다.' },
  { id: 3, q: '다음 중 HAVING 절에 대한 설명으로 올바른 것은?',
    opts: ['WHERE 절 이전에 실행', 'GROUP BY 없이도 사용 가능', '집계함수를 조건으로 사용 가능', '개별 행을 필터링'],
    ans: 2, exp: 'HAVING은 GROUP BY 후 그룹을 필터링하며, 집계함수를 조건으로 사용할 수 있습니다.' },
  { id: 4, q: '1NF(제1정규형)의 조건은?',
    opts: ['이행 함수 종속 제거', '부분 함수 종속 제거', '모든 속성이 원자값', '모든 결정자가 후보키'],
    ans: 2, exp: '1NF는 모든 속성이 원자값(하나의 값)만 가져야 합니다. 반복 그룹을 제거합니다.' },
  { id: 5, q: 'UNION과 UNION ALL의 차이는?',
    opts: ['UNION은 정렬 안 함', 'UNION ALL이 중복 제거', 'UNION이 중복 제거', '차이 없음'],
    ans: 2, exp: 'UNION은 중복을 제거하고 정렬합니다. UNION ALL은 중복을 포함하고 정렬하지 않습니다.' },
  { id: 6, q: '다음 결과는?\nSELECT SUBSTR(\'ABCDEF\', 3, 2) FROM DUAL;',
    opts: ['AB', 'BC', 'CD', 'DE'],
    ans: 2, exp: 'SUBSTR(문자열, 시작위치, 길이)로 3번째 위치부터 2글자 = CD' },
  { id: 7, q: 'WHERE 절의 논리 연산자 우선순위로 올바른 것은?',
    opts: ['AND > OR > NOT', 'OR > AND > NOT', 'NOT > AND > OR', 'NOT > OR > AND'],
    ans: 2, exp: '우선순위: NOT > AND > OR' },
  { id: 8, q: '주식별자의 특징에 해당하지 않는 것은?',
    opts: ['유일성', '최소성', '가변성', 'NOT NULL'],
    ans: 2, exp: '주식별자는 유일성, 최소성, 불변성, NOT NULL의 특징을 가집니다. 가변성이 아닌 불변성입니다.' },
  { id: 9, q: 'Oracle에서 NULL 정렬 시 ASC 기준으로 NULL은?',
    opts: ['처음에 위치', '마지막에 위치', '제외됨', '0으로 처리'],
    ans: 1, exp: 'Oracle에서 NULL은 가장 큰 값으로 취급되어 ASC 시 마지막에 위치합니다.' },
  { id: 10, q: '다음 중 GRANT 문의 WITH GRANT OPTION의 의미는?',
    opts: ['권한 사용 기간 제한', '권한을 다른 사용자에게 부여 가능', '읽기 전용 권한', '관리자 권한 부여'],
    ans: 1, exp: 'WITH GRANT OPTION은 받은 권한을 다른 사용자에게도 부여할 수 있는 옵션입니다.' },
  { id: 11, q: 'EXISTS 서브쿼리의 특징은?',
    opts: ['반드시 1행 반환', '값을 비교', '존재 여부만 판단 (TRUE/FALSE)', '다중 컬럼 비교'],
    ans: 2, exp: 'EXISTS는 서브쿼리의 결과가 존재하면 TRUE, 없으면 FALSE를 반환합니다.' },
  { id: 12, q: '인라인 뷰(Inline View)는 어디에 위치하는 서브쿼리인가?',
    opts: ['SELECT 절', 'FROM 절', 'WHERE 절', 'HAVING 절'],
    ans: 1, exp: 'FROM 절에 위치하는 서브쿼리를 인라인 뷰라고 합니다. 가상 테이블처럼 사용됩니다.' },
  { id: 13, q: '다음 중 DENSE_RANK()의 결과로 올바른 것은? (값: 100, 100, 90, 80)',
    opts: ['1, 1, 3, 4', '1, 2, 3, 4', '1, 1, 2, 3', '1, 1, 2, 4'],
    ans: 2, exp: 'DENSE_RANK는 동순위 후 다음 순위를 이어갑니다: 1, 1, 2, 3' },
  { id: 14, q: '비식별자 관계(Non-Identifying)의 ERD 표기와 FK 위치는?',
    opts: ['실선, PK에 포함', '점선, 일반 속성', '실선, 일반 속성', '점선, PK에 포함'],
    ans: 1, exp: '비식별자 관계는 점선으로 표기하며, FK가 자식의 일반 속성에 위치합니다.' },
  { id: 15, q: 'SAVEPOINT 사용 시 ROLLBACK TO 다음 수행된 DML은?',
    opts: ['SAVEPOINT 이전 모두 취소', 'SAVEPOINT 이후 모두 취소', '전체 트랜잭션 취소', 'COMMIT됨'],
    ans: 1, exp: 'ROLLBACK TO SAVEPOINT는 해당 SAVEPOINT 이후의 변경만 취소합니다.' },
  { id: 16, q: 'MERGE 문에서 WHEN NOT MATCHED THEN 절의 역할은?',
    opts: ['UPDATE 수행', 'DELETE 수행', 'INSERT 수행', 'SELECT 수행'],
    ans: 2, exp: 'WHEN NOT MATCHED THEN은 대상 테이블에 데이터가 없을 때 INSERT를 수행합니다.' },
  { id: 17, q: 'AVG 함수의 NULL 처리 방식은?',
    opts: ['NULL을 0으로 처리', 'NULL을 포함하여 계산', 'NULL을 제외하고 계산', '오류 발생'],
    ans: 2, exp: 'AVG는 NULL을 제외하고 계산합니다. 값: 100, 200, NULL → (100+200)/2 = 150' },
  { id: 18, q: 'LIKE 패턴에서 \'_\'의 의미는?',
    opts: ['0개 이상의 문자', '정확히 1개의 문자', '숫자 1개', '아무 의미 없음'],
    ans: 1, exp: '_는 정확히 1개의 문자를 의미합니다. %는 0개 이상의 문자입니다.' },
  { id: 19, q: '슈퍼타입/서브타입 변환 중 하나의 테이블로 통합하는 방식은?',
    opts: ['OneToOne Type', 'Plus Type', 'Single Type', 'Multiple Type'],
    ans: 2, exp: 'Single Type은 슈퍼타입과 모든 서브타입을 하나의 테이블로 통합하는 방식입니다.' },
  { id: 20, q: 'USING 절 사용 시 주의사항으로 올바른 것은?',
    opts: ['컬럼명이 달라도 사용 가능', 'ON 절과 함께 사용 가능', '공통 컬럼에 테이블 별칭 사용 불가', 'OUTER JOIN에서 사용 불가'],
    ans: 2, exp: 'USING 절에서 공통 컬럼에는 테이블 별칭(alias)을 사용할 수 없습니다.' },
];

export default function ExamRound2() {
  const { t } = useLanguage();
  const { recordExamResult } = useProgress();
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [showReview, setShowReview] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  useEffect(() => {
    if (timeLeft === 0 && started && !submitted) handleSubmit();
  }, [timeLeft, started, submitted]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    setShowModal(false);
    const score = QUESTIONS.reduce((acc, q, i) => answers[i] === q.ans ? acc + 5 : acc, 0);
    recordExamResult('exam-round2', score, 100);
  }, [answers, recordExamResult]);

  const score = QUESTIONS.reduce((acc, q, i) => answers[i] === q.ans ? acc + 5 : acc, 0);
  const correctCount = QUESTIONS.filter((q, i) => answers[i] === q.ans).length;
  const answeredCount = Object.keys(answers).length;
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');
  const isWarn = timeLeft < 300;

  /* ── Start Screen ── */
  if (!started) {
    return (
      <div className="lesson-page">
        <SEOHead title="2회 모의고사 - SQLD Study" description="SQLD 2회 모의고사" />
        <section className="hero-compact" data-aos="fade-up">
          <h1>2회 모의고사</h1>
          <p className="hero-subtitle">SQLD 자격증 실전 대비 모의고사</p>
        </section>
        <article className="content-card" data-aos="fade-up">
          <div className="exam-intro">
            <div className="exam-info-grid">
              <div className="exam-info-card">
                <span className="exam-info-icon"><i className="fa-regular fa-clock"></i></span>
                <strong>90분</strong>
                <span>시험 시간</span>
              </div>
              <div className="exam-info-card">
                <span className="exam-info-icon"><i className="fa-regular fa-file-lines"></i></span>
                <strong>20문항</strong>
                <span>객관식</span>
              </div>
              <div className="exam-info-card">
                <span className="exam-info-icon"><i className="fa-solid fa-bullseye"></i></span>
                <strong>60점</strong>
                <span>합격 기준</span>
              </div>
              <div className="exam-info-card">
                <span className="exam-info-icon"><i className="fa-solid fa-star"></i></span>
                <strong>100점</strong>
                <span>만점</span>
              </div>
            </div>
            <div className="exam-notice">
              <h3><i className="fa-solid fa-circle-info"></i> 시험 안내</h3>
              <ul>
                <li>각 문항당 5점이며, 총 20문항입니다.</li>
                <li>시간 종료 시 자동으로 제출됩니다.</li>
                <li>문항 간 자유롭게 이동할 수 있습니다.</li>
                <li>60점 이상 득점 시 합격입니다.</li>
              </ul>
            </div>
            <button className="exam-start-btn" onClick={() => setStarted(true)}>
              <i className="fa-solid fa-play"></i>&nbsp; {t('exam.start')}
            </button>
          </div>
        </article>
      </div>
    );
  }

  /* ── Submit Confirm Modal ── */
  const modal = showModal && (
    <div className="exam-modal-overlay" onClick={() => setShowModal(false)}>
      <div className="exam-modal" onClick={e => e.stopPropagation()}>
        <h3><i className="fa-solid fa-paper-plane"></i> 시험 제출</h3>
        <div className="exam-modal-stats">
          <p>응답한 문항: <strong>{answeredCount} / {QUESTIONS.length}</strong></p>
          <p>미응답 문항: <strong>{QUESTIONS.length - answeredCount}</strong></p>
        </div>
        {answeredCount < QUESTIONS.length && (
          <p className="exam-modal-warn">
            <i className="fa-solid fa-triangle-exclamation"></i> 아직 응답하지 않은 문항이 있습니다.
          </p>
        )}
        <div className="exam-modal-actions">
          <button className="exam-ctrl-btn" onClick={() => setShowModal(false)}>돌아가기</button>
          <button className="exam-ctrl-btn exam-ctrl-btn--submit" onClick={handleSubmit}>제출하기</button>
        </div>
      </div>
    </div>
  );

  /* ── Result Screen ── */
  if (submitted && !showReview) {
    const passed = score >= 60;
    return (
      <div className="lesson-page">
        <SEOHead title="2회 모의고사 결과 - SQLD Study" />
        <section className="hero-compact">
          <h1>{t('exam.result')}</h1>
          <p className="hero-subtitle">2회 모의고사</p>
        </section>
        <article className="content-card">
          <div className="exam-result-summary">
            <div className="exam-score-circle" style={{ borderColor: passed ? '#22c55e' : '#ef4444' }}>
              <span className="exam-score-num" style={{ color: passed ? '#22c55e' : '#ef4444' }}>{score}</span>
              <span className="exam-score-label">/ 100점</span>
            </div>
            <div className="exam-score-info">
              <span className="exam-grade" style={{ background: passed ? '#22c55e' : '#ef4444' }}>
                {passed ? t('exam.pass') : t('exam.fail')}
              </span>
              <p style={{ margin: '4px 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                정답 {correctCount} / {QUESTIONS.length} 문항
              </p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>
                문항당 5점 배점
              </p>
            </div>
          </div>
          <div className="exam-result-actions">
            <button className="exam-ctrl-btn exam-ctrl-btn--next" onClick={() => setShowReview(true)}>
              <i className="fa-solid fa-magnifying-glass"></i>&nbsp; {t('exam.review')}
            </button>
          </div>
        </article>
      </div>
    );
  }

  /* ── Review Screen ── */
  if (submitted && showReview) {
    return (
      <div className="lesson-page">
        <SEOHead title="2회 모의고사 오답 확인 - SQLD Study" />
        <section className="hero-compact">
          <h1>{t('exam.review')}</h1>
          <p className="hero-subtitle">2회 모의고사 &middot; {score}점 &middot; 정답 {correctCount}/{QUESTIONS.length}</p>
        </section>
        <article className="content-card">
          <div className="exam-result-tabs">
            <button className={`exam-tab-btn exam-tab-btn--active`}>전체 ({QUESTIONS.length})</button>
          </div>
          <div className="exam-detail-list">
            {QUESTIONS.map((q, i) => {
              const correct = answers[i] === q.ans;
              return (
                <details key={q.id} className={`exam-detail-item ${correct ? 'exam-detail--ok' : 'exam-detail--wrong'}`}>
                  <summary>
                    <span className="exam-detail-num">Q{i + 1}</span>
                    <span className="exam-detail-q">{q.q.split('\n')[0]}</span>
                    <span className="exam-detail-score">{correct ? '5점' : '0점'}</span>
                  </summary>
                  <div className="exam-detail-body">
                    <p style={{ marginBottom: '12px', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                      <strong>Q{i + 1}.</strong> {q.q}
                    </p>
                    <div className="exam-options">
                      {q.opts.map((opt, j) => {
                        let cls = 'exam-option';
                        if (j === q.ans) cls += ' exam-option--sel';
                        return (
                          <div key={j} className={cls} style={{
                            cursor: 'default',
                            background: j === q.ans ? 'rgba(34,197,94,0.08)' : (answers[i] === j && j !== q.ans ? 'rgba(239,68,68,0.08)' : 'transparent'),
                            borderColor: j === q.ans ? '#22c55e' : (answers[i] === j && j !== q.ans ? '#ef4444' : 'var(--border-light)')
                          }}>
                            <span className="exam-option-num" style={{
                              background: j === q.ans ? '#22c55e' : (answers[i] === j && j !== q.ans ? '#ef4444' : 'var(--bg-light-gray)'),
                              color: (j === q.ans || (answers[i] === j && j !== q.ans)) ? '#fff' : 'var(--primary-blue)'
                            }}>{j + 1}</span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="exam-explanation">
                      <i className="fa-solid fa-lightbulb"></i>&nbsp; {q.exp}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
          <div className="exam-result-actions">
            <button className="exam-ctrl-btn" onClick={() => setShowReview(false)}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; 결과로 돌아가기
            </button>
          </div>
        </article>
      </div>
    );
  }

  /* ── Question Screen ── */
  const q = QUESTIONS[current];
  return (
    <div className="lesson-page">
      <SEOHead title={`2회 모의고사 - 문제 ${current + 1}`} />
      {modal}
      <section className="hero-compact exam-header-bar">
        <div className="exam-top-bar container">
          <span className="exam-progress-text">
            <i className="fa-regular fa-file-lines"></i>&nbsp; {current + 1} / {QUESTIONS.length}
          </span>
          <span className={`exam-timer${isWarn ? ' exam-timer--warn' : ''}`}>
            <i className="fa-regular fa-clock"></i>&nbsp; {mm}:{ss}
          </span>
          <span className="exam-progress-text">
            {answeredCount} / {QUESTIONS.length} 응답
          </span>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '24px' }}>
        {/* Navigation Buttons */}
        <div className="exam-nav-section" style={{ marginBottom: '20px' }}>
          <h4>문항 번호</h4>
          <div className="exam-nav-buttons">
            {QUESTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`exam-nav-btn${i === current ? ' exam-nav-btn--cur' : ''}${answers[i] !== undefined && i !== current ? ' exam-nav-btn--done' : ''}`}
              >{i + 1}</button>
            ))}
          </div>
          <div className="exam-progress-track" style={{ marginTop: '12px' }}>
            <div className="exam-progress-fill" style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }} />
          </div>
        </div>

        {/* Question Area */}
        <div className="exam-question-area">
          <div className="exam-q-header">
            <span className="exam-q-num">Q{current + 1}</span>
            <span className="exam-q-meta">5점 배점</span>
          </div>
          <p className="exam-q-text" style={{ whiteSpace: 'pre-wrap' }}>{q.q}</p>
          <div className="exam-options">
            {q.opts.map((opt, j) => (
              <label
                key={j}
                className={`exam-option${answers[current] === j ? ' exam-option--sel' : ''}`}
                onClick={() => setAnswers(prev => ({ ...prev, [current]: j }))}
              >
                <span className="exam-option-num">{j + 1}</span>
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <div className="exam-controls">
            <button
              className="exam-ctrl-btn"
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
            >
              <i className="fa-solid fa-chevron-left"></i>&nbsp; {t('lesson.prev')}
            </button>
            {current < QUESTIONS.length - 1 ? (
              <button
                className="exam-ctrl-btn exam-ctrl-btn--next"
                onClick={() => setCurrent(current + 1)}
              >
                {t('lesson.next')} &nbsp;<i className="fa-solid fa-chevron-right"></i>
              </button>
            ) : (
              <button
                className="exam-ctrl-btn exam-ctrl-btn--submit"
                onClick={() => setShowModal(true)}
              >
                <i className="fa-solid fa-paper-plane"></i>&nbsp; {t('exam.submit')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
