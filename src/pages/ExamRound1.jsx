import { useState, useEffect, useCallback } from 'react';
import SEOHead from '../components/SEOHead';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';

const QUESTIONS = [
  { id: 1, q: '다음 중 엔터티의 특징으로 옳지 않은 것은?',
    opts: ['업무에서 필요로 하는 정보', '유일한 식별자에 의해 식별 가능', '반드시 1개 이상의 인스턴스가 존재', '다른 엔터티와 1개 이상의 관계'],
    ans: 2, exp: '엔터티는 2개 이상의 인스턴스(행)가 존재해야 합니다. 1개가 아니라 2개 이상입니다.' },
  { id: 2, q: '제3정규형(3NF)에서 제거하는 종속성은?',
    opts: ['부분 함수 종속', '이행 함수 종속', '다치 종속', '조인 종속'],
    ans: 1, exp: '3NF는 이행 함수 종속(A→B→C에서 A→C)을 제거합니다. 부분 함수 종속은 2NF에서 제거합니다.' },
  { id: 3, q: '다음 SQL의 결과로 올바른 것은?\nSELECT NVL(NULL, 10) + 5 FROM DUAL;',
    opts: ['NULL', '5', '10', '15'],
    ans: 3, exp: 'NVL(NULL, 10)은 10을 반환하고, 10 + 5 = 15입니다.' },
  { id: 4, q: '다음 중 DDL에 해당하지 않는 것은?',
    opts: ['CREATE', 'ALTER', 'DELETE', 'TRUNCATE'],
    ans: 2, exp: 'DELETE는 DML입니다. DDL은 CREATE, ALTER, DROP, TRUNCATE, RENAME입니다.' },
  { id: 5, q: 'LEFT OUTER JOIN에서 (+) 기호의 위치는? (Oracle)',
    opts: ['왼쪽 테이블에', '오른쪽 테이블에', '양쪽 모두에', '사용하지 않음'],
    ans: 1, exp: 'Oracle에서 (+)는 데이터가 부족한 쪽(오른쪽)에 붙입니다. LEFT JOIN이므로 오른쪽에 (+).' },
  { id: 6, q: '다음 중 윈도우 함수에서 동일 순위를 건너뛰는 함수는?',
    opts: ['ROW_NUMBER', 'RANK', 'DENSE_RANK', 'NTILE'],
    ans: 1, exp: 'RANK()는 동일 순위 후 다음 순위를 건너뜁니다 (1,1,3). DENSE_RANK는 이어갑니다 (1,1,2).' },
  { id: 7, q: '식별자 관계(Identifying Relationship)의 ERD 표기는?',
    opts: ['점선', '실선', '이중선', '화살표'],
    ans: 1, exp: '식별자 관계는 실선, 비식별자 관계는 점선으로 표기합니다.' },
  { id: 8, q: 'TRUNCATE와 DELETE의 차이점으로 틀린 것은?',
    opts: ['TRUNCATE는 DDL, DELETE는 DML', 'TRUNCATE는 ROLLBACK 불가', 'DELETE는 WHERE 사용 가능', 'TRUNCATE는 저장공간을 유지'],
    ans: 3, exp: 'TRUNCATE는 저장공간을 해제합니다. DELETE는 저장공간을 유지합니다.' },
  { id: 9, q: 'SELECT절에 사용하는 서브쿼리의 이름은?',
    opts: ['인라인 뷰', '스칼라 서브쿼리', '상관 서브쿼리', '중첩 서브쿼리'],
    ans: 1, exp: 'SELECT절의 서브쿼리는 스칼라 서브쿼리라 하며, 반드시 1행 1열을 반환해야 합니다.' },
  { id: 10, q: 'SQL 실행 순서로 올바른 것은?',
    opts: ['SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
           'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
           'FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY',
           'FROM → WHERE → SELECT → GROUP BY → HAVING → ORDER BY'],
    ans: 1, exp: '올바른 실행 순서: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY' },
  { id: 11, q: '다음 결과는?\nSELECT COUNT(*), COUNT(COL1)\nFROM (SELECT NULL AS COL1 FROM DUAL\n      UNION ALL SELECT 1 FROM DUAL\n      UNION ALL SELECT 2 FROM DUAL);',
    opts: ['3, 3', '3, 2', '2, 2', '2, 3'],
    ans: 1, exp: 'COUNT(*)는 NULL 포함 3행, COUNT(COL1)은 NULL 제외 2행입니다.' },
  { id: 12, q: '반정규화를 고려하는 상황으로 적절하지 않은 것은?',
    opts: ['JOIN이 빈번하여 성능 저하', '대량 데이터 통계 처리', '데이터 무결성을 높이려는 경우', '조회 성능 향상이 필요한 경우'],
    ans: 2, exp: '데이터 무결성을 높이려면 정규화가 적절합니다. 반정규화는 중복을 허용하여 성능을 높이는 것입니다.' },
  { id: 13, q: 'NATURAL JOIN 사용 시 주의사항으로 틀린 것은?',
    opts: ['같은 이름의 컬럼으로 자동 JOIN', 'INNER JOIN과 같은 결과', '공통 컬럼에 테이블 별칭 사용 가능', 'USING, ON과 함께 사용 불가'],
    ans: 2, exp: 'NATURAL JOIN에서 공통 컬럼에는 테이블 별칭(alias)을 사용할 수 없습니다.' },
  { id: 14, q: '다음 중 COALESCE(NULL, NULL, 3, NULL, 5)의 결과는?',
    opts: ['NULL', '3', '5', '오류'],
    ans: 1, exp: 'COALESCE는 첫 번째 NOT NULL 값을 반환합니다. 결과는 3입니다.' },
  { id: 15, q: '트랜잭션의 ACID 특성 중 "전부 실행 또는 전부 취소"를 의미하는 것은?',
    opts: ['일관성(Consistency)', '원자성(Atomicity)', '격리성(Isolation)', '지속성(Durability)'],
    ans: 1, exp: '원자성(Atomicity)은 All or Nothing 원칙, 트랜잭션의 작업이 모두 수행되거나 모두 취소되는 특성입니다.' },
  { id: 16, q: '엔터티 분류 중 "주문"은 어떤 유형에 해당하는가?',
    opts: ['유형 엔터티', '개념 엔터티', '기본 엔터티', '중심 엔터티'],
    ans: 3, exp: '주문은 기본 엔터티(고객, 사원 등)에서 파생된 중심 엔터티입니다.' },
  { id: 17, q: 'GROUP BY 사용 시 SELECT절에 올 수 있는 것은?',
    opts: ['GROUP BY에 없는 일반 컬럼', 'GROUP BY에 명시된 컬럼', '아무 컬럼이나 가능', 'WHERE절에 사용된 컬럼'],
    ans: 1, exp: 'SELECT절에는 GROUP BY에 명시된 컬럼이나 집계함수만 올 수 있습니다.' },
  { id: 18, q: 'FOREIGN KEY의 ON DELETE CASCADE 옵션은?',
    opts: ['부모 삭제 시 자식 FK를 NULL로', '부모 삭제 시 자식도 함께 삭제', '부모 삭제 거부', '자식 삭제 시 부모도 삭제'],
    ans: 1, exp: 'ON DELETE CASCADE는 부모 행 삭제 시 참조하는 자식 행도 함께 삭제합니다.' },
  { id: 19, q: '다음 중 뷰(VIEW)의 특징으로 틀린 것은?',
    opts: ['논리적 가상 테이블', '복잡한 쿼리를 단순화', '데이터를 실제로 저장', '보안 관리에 활용'],
    ans: 2, exp: '뷰는 논리적 가상 테이블로, 데이터를 실제로 저장하지 않습니다.' },
  { id: 20, q: 'WHERE 절에서 NULL을 비교할 때 사용하는 것은?',
    opts: ['= NULL', '<> NULL', 'IS NULL', '== NULL'],
    ans: 2, exp: 'NULL 비교는 IS NULL 또는 IS NOT NULL을 사용해야 합니다. = NULL은 항상 FALSE입니다.' },
];

export default function ExamRound1() {
  const { t } = useLanguage();
  const { recordExamResult } = useProgress();
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [showReview, setShowReview] = useState(false);

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
    const score = QUESTIONS.reduce((acc, q, i) => answers[i] === q.ans ? acc + 5 : acc, 0);
    recordExamResult('exam-round1', score, 100);
  }, [answers, recordExamResult]);

  const score = QUESTIONS.reduce((acc, q, i) => answers[i] === q.ans ? acc + 5 : acc, 0);
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');

  if (!started) {
    return (
      <div className="lesson-page">
        <SEOHead title="1회 모의고사 - SQLD Study" description="SQLD 1회 모의고사" />
        <section className="hero-compact" data-aos="fade-up">
          <h1>1회 모의고사</h1>
          <p className="hero-subtitle">20문항 · 100점 만점 · 60점 합격</p>
        </section>
        <article className="content-card" data-aos="fade-up" style={{ textAlign: 'center' }}>
          <p>시험 시간: <strong>90분</strong></p>
          <p>문항 수: <strong>20문항</strong></p>
          <p>합격 기준: <strong>60점 이상</strong></p>
          <br />
          <button className="btn-primary" onClick={() => setStarted(true)}>
            {t('exam.start')}
          </button>
        </article>
      </div>
    );
  }

  if (submitted && !showReview) {
    return (
      <div className="lesson-page">
        <SEOHead title="1회 모의고사 결과 - SQLD Study" />
        <section className="hero-compact">
          <h1>{t('exam.result')}</h1>
        </section>
        <article className="content-card" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', color: score >= 60 ? '#22c55e' : '#ef4444' }}>
            {score}점
          </h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: score >= 60 ? '#22c55e' : '#ef4444' }}>
            {score >= 60 ? t('exam.pass') : t('exam.fail')}
          </p>
          <p>정답: {QUESTIONS.filter((q, i) => answers[i] === q.ans).length} / {QUESTIONS.length}</p>
          <br />
          <button className="btn-primary" onClick={() => setShowReview(true)}>
            {t('exam.review')}
          </button>
        </article>
      </div>
    );
  }

  if (submitted && showReview) {
    return (
      <div className="lesson-page">
        <SEOHead title="1회 모의고사 오답 확인 - SQLD Study" />
        <section className="hero-compact"><h1>{t('exam.review')}</h1></section>
        <article className="content-card">
          {QUESTIONS.map((q, i) => {
            const correct = answers[i] === q.ans;
            return (
              <div key={q.id} style={{ marginBottom: '24px', padding: '16px', borderRadius: '8px',
                background: correct ? 'rgba(34,197,94,0.05)' : 'rgba(239,68,68,0.05)',
                border: `1px solid ${correct ? '#22c55e33' : '#ef444433'}` }}>
                <p><strong>Q{i + 1}.</strong> {q.q}</p>
                {q.opts.map((opt, j) => (
                  <div key={j} style={{
                    padding: '6px 12px', margin: '4px 0', borderRadius: '6px',
                    background: j === q.ans ? 'rgba(34,197,94,0.15)' : answers[i] === j && j !== q.ans ? 'rgba(239,68,68,0.15)' : 'transparent',
                    fontWeight: j === q.ans ? 'bold' : 'normal'
                  }}>
                    {j + 1}. {opt} {j === q.ans && ' ✓'} {answers[i] === j && j !== q.ans && ' ✗'}
                  </div>
                ))}
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>{q.exp}</p>
              </div>
            );
          })}
        </article>
      </div>
    );
  }

  const q = QUESTIONS[current];
  return (
    <div className="lesson-page">
      <SEOHead title={`1회 모의고사 - 문제 ${current + 1}`} />
      <section className="hero-compact">
        <h1>1회 모의고사</h1>
        <p className="hero-subtitle">{t('exam.time_remaining')}: {mm}:{ss}</p>
      </section>
      <article className="content-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span>{t('exam.question')} {current + 1} {t('exam.of')} {QUESTIONS.length}</span>
          <span>{Object.keys(answers).length} / {QUESTIONS.length} 응답</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '20px' }}>
          {QUESTIONS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-light)',
              cursor: 'pointer', fontSize: '12px',
              background: i === current ? 'var(--primary-blue)' : answers[i] !== undefined ? 'rgba(var(--primary-rgb),0.15)' : 'transparent',
              color: i === current ? '#fff' : 'var(--text-primary)'
            }}>{i + 1}</button>
          ))}
        </div>
        <h3 style={{ whiteSpace: 'pre-wrap' }}>Q{current + 1}. {q.q}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '20px 0' }}>
          {q.opts.map((opt, j) => (
            <button key={j} onClick={() => setAnswers(prev => ({ ...prev, [current]: j }))}
              style={{
                textAlign: 'left', padding: '12px 16px', borderRadius: '8px', cursor: 'pointer',
                border: `2px solid ${answers[current] === j ? 'var(--primary-blue)' : 'var(--border-light)'}`,
                background: answers[current] === j ? 'rgba(var(--primary-rgb),0.08)' : 'transparent',
                color: 'var(--text-primary)', fontSize: '15px'
              }}>
              {j + 1}. {opt}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          <button disabled={current === 0} onClick={() => setCurrent(current - 1)}
            className="btn-secondary">{t('lesson.prev')}</button>
          {current < QUESTIONS.length - 1 ? (
            <button onClick={() => setCurrent(current + 1)} className="btn-primary">{t('lesson.next')}</button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary" style={{ background: '#22c55e' }}>
              {t('exam.submit')}
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
