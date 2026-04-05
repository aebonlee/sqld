export const LESSONS = [
  { id: 'intro-what-is-sqld', title: 'SQLD란?', category: 'intro' },
  { id: 'intro-exam-guide', title: '시험 안내', category: 'intro' },
  { id: 'intro-study-strategy', title: '학습 전략', category: 'intro' },
  { id: 'subject1-ch1', title: '데이터 모델링의 이해', category: 'subject1' },
  { id: 'subject1-ch2', title: '데이터 모델과 SQL', category: 'subject1' },
  { id: 'subject1-overview', title: '1과목 개요', category: 'subject1' },
  { id: 'subject2-ch1', title: 'SQL 기본', category: 'subject2' },
  { id: 'subject2-ch2', title: 'SQL 활용', category: 'subject2' },
  { id: 'subject2-ch3', title: '관리 구문', category: 'subject2' },
  { id: 'subject2-overview', title: '2과목 개요', category: 'subject2' },
  { id: 'sqlref-ddl', title: 'DDL', category: 'sqlref' },
  { id: 'sqlref-dml', title: 'DML', category: 'sqlref' },
  { id: 'sqlref-functions', title: '함수', category: 'sqlref' },
  { id: 'sqlref-join', title: 'JOIN', category: 'sqlref' },
  { id: 'sqlref-subquery', title: '서브쿼리', category: 'sqlref' },
];

export const EXAMS = [
  { id: 'exam-round1', title: '1회 모의고사', questionCount: 50 },
  { id: 'exam-round2', title: '2회 모의고사', questionCount: 50 },
  { id: 'exam-round3', title: '3회 모의고사', questionCount: 50 },
  { id: 'exam-round4', title: '4회 모의고사', questionCount: 50 },
];

export function getLessonsByCategory(category) {
  return LESSONS.filter(l => l.category === category);
}

export function getAllLessonIds() {
  return LESSONS.map(l => l.id);
}
