export const SITE_NAME = 'SQLD Study';
export const SITE_DESCRIPTION = 'SQLD 자격증 대비 학습 사이트';
export const SITE_URL = 'https://sqld.dreamitbiz.com';

export const MENUS = [
  {
    title: '시험 소개',
    path: '/intro',
    children: [
      { title: 'SQLD란?', path: '/intro/what-is-sqld' },
      { title: '시험 안내', path: '/intro/exam-guide' },
      { title: '학습 전략', path: '/intro/study-strategy' },
    ]
  },
  {
    title: '1과목',
    subtitle: '데이터 모델링의 이해',
    path: '/subject1',
    children: [
      { title: '과목 개요', path: '/subject1/overview' },
      { title: '데이터 모델링의 이해', path: '/subject1/ch1' },
      { title: '데이터 모델과 SQL', path: '/subject1/ch2' },
    ]
  },
  {
    title: '2과목',
    subtitle: 'SQL 기본 및 활용',
    path: '/subject2',
    children: [
      { title: '과목 개요', path: '/subject2/overview' },
      { title: 'SQL 기본', path: '/subject2/ch1' },
      { title: 'SQL 활용', path: '/subject2/ch2' },
      { title: '관리 구문', path: '/subject2/ch3' },
    ]
  },
  {
    title: 'SQL 레퍼런스',
    path: '/sqlref',
    children: [
      { title: 'DDL', path: '/sqlref/ddl' },
      { title: 'DML', path: '/sqlref/dml' },
      { title: '함수', path: '/sqlref/functions' },
      { title: 'JOIN', path: '/sqlref/join' },
      { title: '서브쿼리', path: '/sqlref/subquery' },
    ]
  },
  {
    title: '모의고사',
    path: '/exam',
    children: [
      { title: '1회 모의고사', path: '/exam/round1' },
      { title: '2회 모의고사', path: '/exam/round2' },
      { title: '3회 모의고사', path: '/exam/round3' },
      { title: '4회 모의고사', path: '/exam/round4' },
    ]
  },
  { title: '참고자료', path: '/references' },
  { title: '실습', path: '/training' },
];
