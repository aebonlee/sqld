import { getLessonsByCategory, getAllLessonIds } from './studyItems';

export const BADGES = [
  {
    id: 'intro-master',
    title: '입문 마스터',
    description: '시험 소개 전체 학습 완료',
    icon: '📋',
    color: '#4CAF50',
    condition: (completed) => {
      const ids = getLessonsByCategory('intro').map(l => l.id);
      return ids.every(id => completed.includes(id));
    }
  },
  {
    id: 'subject1-master',
    title: '1과목 마스터',
    description: '데이터 모델링의 이해 전체 학습 완료',
    icon: '🗃️',
    color: '#2196F3',
    condition: (completed) => {
      const ids = getLessonsByCategory('subject1').map(l => l.id);
      return ids.every(id => completed.includes(id));
    }
  },
  {
    id: 'subject2-master',
    title: '2과목 마스터',
    description: 'SQL 기본 및 활용 전체 학습 완료',
    icon: '💾',
    color: '#FF9800',
    condition: (completed) => {
      const ids = getLessonsByCategory('subject2').map(l => l.id);
      return ids.every(id => completed.includes(id));
    }
  },
  {
    id: 'sqlref-master',
    title: 'SQL 레퍼런스 마스터',
    description: 'SQL 레퍼런스 전체 학습 완료',
    icon: '📖',
    color: '#9C27B0',
    condition: (completed) => {
      const ids = getLessonsByCategory('sqlref').map(l => l.id);
      return ids.every(id => completed.includes(id));
    }
  },
  {
    id: 'first-step',
    title: '첫 걸음',
    description: '첫 번째 학습 완료',
    icon: '👣',
    color: '#607D8B',
    condition: (completed) => completed.length >= 1
  },
  {
    id: 'explorer',
    title: '탐험가',
    description: '7개 이상 학습 완료',
    icon: '🧭',
    color: '#00BCD4',
    condition: (completed) => completed.length >= 7
  },
  {
    id: 'challenger',
    title: '도전자',
    description: '12개 이상 학습 완료',
    icon: '🏔️',
    color: '#E91E63',
    condition: (completed) => completed.length >= 12
  },
  {
    id: 'grand-master',
    title: '그랜드 마스터',
    description: '전체 학습 완료',
    icon: '👑',
    color: '#FFD700',
    condition: (completed) => {
      const all = getAllLessonIds();
      return all.every(id => completed.includes(id));
    }
  }
];

export function getEarnedBadges(completedLessons) {
  return BADGES.filter(b => b.condition(completedLessons));
}
