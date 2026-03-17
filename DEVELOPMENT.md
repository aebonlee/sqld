# SQLD Study - 개발 문서

## 프로젝트 개요

SQLD(SQL Developer) 자격증 학습 웹사이트로, 체계적인 학습 가이드와 모의고사를 제공합니다.

- **GitHub**: https://github.com/aebonlee/sqld
- **배포 URL**: https://sqld.dreamitbiz.com
- **기술 스택**: React 19.2.0 + Vite 7.3.1
- **참고 프로젝트**: D:\linux-study (Linux Study 사이트)

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 19.2.0 |
| 빌드 도구 | Vite 7.3.1 |
| 라우팅 | React Router DOM 7.13.0 |
| 인증/DB | Supabase (Google, Kakao OAuth + 이메일) |
| PDF 생성 | jsPDF + html2canvas |
| XSS 방지 | DOMPurify |
| 배포 | GitHub Pages (gh-pages) |

---

## 프로젝트 구조

```
sqld-repo/
├── public/
│   ├── favicon.svg
│   └── CNAME                    # sqld.dreamitbiz.com
├── src/
│   ├── main.jsx                 # 앱 진입점 (ErrorBoundary + Provider 스택)
│   ├── App.jsx                  # 라우팅 설정 (Lazy Loading + 에러 복구)
│   ├── index.css                # CSS 임포트 허브
│   ├── components/
│   │   ├── SEOHead.jsx          # 동적 SEO 메타태그
│   │   ├── LessonComplete.jsx   # 학습 완료 버튼
│   │   ├── BadgeCard.jsx        # 배지 카드
│   │   ├── Certificate.jsx      # 수료증 (PDF/PNG 다운로드)
│   │   ├── StampGrid.jsx        # 진행 스탬프 그리드
│   │   └── layout/
│   │       ├── Navbar.jsx       # 네비게이션 바 (인증 UI 포함)
│   │       └── Footer.jsx       # 푸터
│   ├── contexts/
│   │   ├── ThemeContext.jsx     # 테마 관리 (auto/light/dark + 5색상)
│   │   ├── LanguageContext.jsx  # 언어 관리 (ko/en)
│   │   ├── AuthContext.jsx      # 인증 관리 (Supabase)
│   │   └── ProgressContext.jsx  # 학습 진행 관리 (localStorage + Supabase)
│   ├── config/
│   │   ├── site.js              # 사이트 설정 (메뉴, 이름, URL)
│   │   ├── studyItems.js        # 학습 항목 정의 (15개 레슨 + 4개 시험)
│   │   └── badges.js            # 배지 정의 (8개 배지 + 조건)
│   ├── hooks/
│   │   ├── useCodeCopy.js       # 코드 블록 복사 버튼
│   │   ├── useTableScroller.js  # 테이블 가로 스크롤
│   │   ├── usePageTracker.js    # 페이지뷰 추적
│   │   └── useAOS.js            # 스크롤 애니메이션
│   ├── layouts/
│   │   └── PublicLayout.jsx     # 공용 레이아웃
│   ├── lib/
│   │   └── supabase.js          # Supabase 클라이언트
│   ├── utils/
│   │   └── translations.js     # 다국어 번역 (ko/en)
│   ├── styles/
│   │   ├── base.css             # 기본 스타일, CSS 변수
│   │   ├── navbar.css           # 네비게이션 스타일
│   │   ├── hero.css             # 히어로 섹션
│   │   ├── footer.css           # 푸터 스타일
│   │   ├── site.css             # 글로벌 유틸리티
│   │   ├── animations.css       # 애니메이션 (AOS, 트랜지션)
│   │   ├── auth.css             # 로그인/회원가입
│   │   ├── profile.css          # 프로필 페이지
│   │   ├── progress.css         # 학습 현황
│   │   ├── dark-mode.css        # 다크 모드
│   │   └── responsive.css       # 반응형
│   └── pages/
│       ├── Home.jsx             # 홈 (히어로 + 커리큘럼 카드)
│       ├── Login.jsx            # 로그인 (Google/Kakao/이메일)
│       ├── Profile.jsx          # 프로필 (배지, 수료증, 통계)
│       ├── NotFound.jsx         # 404
│       ├── IntroWhatIsSqld.jsx  # SQLD란?
│       ├── IntroExamGuide.jsx   # 시험 안내
│       ├── IntroStudyStrategy.jsx # 학습 전략
│       ├── Subject1Overview.jsx # 1과목 개요
│       ├── Subject1Ch1.jsx      # 1-1장: 데이터 모델링의 이해
│       ├── Subject1Ch2.jsx      # 1-2장: 데이터 모델과 SQL
│       ├── Subject2Overview.jsx # 2과목 개요
│       ├── Subject2Ch1.jsx      # 2-1장: SQL 기본
│       ├── Subject2Ch2.jsx      # 2-2장: SQL 활용
│       ├── Subject2Ch3.jsx      # 2-3장: 관리 구문
│       ├── SqlRefDDL.jsx        # DDL 레퍼런스
│       ├── SqlRefDML.jsx        # DML 레퍼런스
│       ├── SqlRefFunctions.jsx  # SQL 함수 레퍼런스
│       ├── SqlRefJoin.jsx       # JOIN 레퍼런스
│       ├── SqlRefSubquery.jsx   # 서브쿼리 레퍼런스
│       ├── ExamRound1.jsx       # 1회 모의고사 (20문항)
│       ├── ExamRound2.jsx       # 2회 모의고사 (20문항)
│       ├── ExamRound3.jsx       # 3회 모의고사 (준비 중)
│       ├── ExamRound4.jsx       # 4회 모의고사 (준비 중)
│       ├── References.jsx       # 참고자료
│       └── Training.jsx         # SQL 실습
├── .env                         # Supabase 환경변수
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 주요 기능

### 1. 학습 콘텐츠 (15개 레슨)
- **시험 소개** (3개): SQLD란, 시험 안내, 학습 전략
- **1과목** (3개): 개요, 데이터 모델링의 이해, 데이터 모델과 SQL
- **2과목** (4개): 개요, SQL 기본, SQL 활용, 관리 구문
- **SQL 레퍼런스** (5개): DDL, DML, 함수, JOIN, 서브쿼리

### 2. 모의고사 (4회)
- 1회, 2회: 각 20문항, 90분 타이머, 자동 채점, 오답 확인
- 3회, 4회: 준비 중 표시

### 3. 인증 시스템
- Google OAuth, Kakao OAuth, 이메일/비밀번호
- Supabase Auth 기반

### 4. 학습 진행 관리
- localStorage + Supabase 이중 저장
- 레슨 완료/미완료 토글
- 모의고사 결과 저장

### 5. 배지 시스템 (8개)
- first-lesson, subject1-complete, subject2-complete
- sqlref-complete, exam-first, exam-pass, all-lessons, perfect-score

### 6. 수료증 발급
- PDF/PNG 다운로드 (jsPDF + html2canvas)

### 7. UI/UX
- 다크/라이트/자동 테마
- 5가지 색상 테마 (blue, red, green, purple, orange)
- 한국어/영어 지원
- 반응형 디자인
- Glassmorphism CSS 디자인
- AOS 스크롤 애니메이션

### 8. SEO & 분석
- 동적 메타태그 (SEOHead)
- Supabase page_views 테이블 추적
- SPA 404.html 리다이렉트

---

## 라우팅 구조

| 경로 | 페이지 | 설명 |
|------|--------|------|
| / | Home | 홈 |
| /intro/what-is-sqld | IntroWhatIsSqld | SQLD란? |
| /intro/exam-guide | IntroExamGuide | 시험 안내 |
| /intro/study-strategy | IntroStudyStrategy | 학습 전략 |
| /subject1 | Subject1Overview | 1과목 개요 |
| /subject1/ch1 | Subject1Ch1 | 데이터 모델링의 이해 |
| /subject1/ch2 | Subject1Ch2 | 데이터 모델과 SQL |
| /subject2 | Subject2Overview | 2과목 개요 |
| /subject2/ch1 | Subject2Ch1 | SQL 기본 |
| /subject2/ch2 | Subject2Ch2 | SQL 활용 |
| /subject2/ch3 | Subject2Ch3 | 관리 구문 |
| /sqlref/ddl | SqlRefDDL | DDL 레퍼런스 |
| /sqlref/dml | SqlRefDML | DML 레퍼런스 |
| /sqlref/functions | SqlRefFunctions | 함수 레퍼런스 |
| /sqlref/join | SqlRefJoin | JOIN 레퍼런스 |
| /sqlref/subquery | SqlRefSubquery | 서브쿼리 레퍼런스 |
| /exam/round1 | ExamRound1 | 1회 모의고사 |
| /exam/round2 | ExamRound2 | 2회 모의고사 |
| /exam/round3 | ExamRound3 | 3회 모의고사 |
| /exam/round4 | ExamRound4 | 4회 모의고사 |
| /references | References | 참고자료 |
| /training | Training | SQL 실습 |
| /login | Login | 로그인 |
| /profile | Profile | 프로필 |

---

## 배포 설정

- **호스팅**: GitHub Pages
- **CNAME**: sqld.dreamitbiz.com
- **빌드 명령**: `npm run build`
- **배포 명령**: `npx gh-pages -d dist`
- **SPA 라우팅**: vite.config.js의 copy-404 플러그인이 index.html → 404.html 복사

---

## 개발 이력

### 2026-03-18 - 초기 개발 완료
1. 프로젝트 초기 설정 (package.json, vite.config.js, index.html, .env, favicon)
2. Supabase 클라이언트 설정 (PKCE 인증 플로우)
3. Context API 구현 (Theme, Language, Auth, Progress)
4. 컴포넌트 구현 (Navbar, Footer, SEOHead, LessonComplete, BadgeCard, Certificate, StampGrid)
5. 메인 페이지 구현 (Home, Login, Profile, NotFound)
6. 학습 콘텐츠 21페이지 구현
7. 모의고사 2회분 (각 20문항) 구현
8. CSS 스타일 11개 파일 구성
9. 빌드 성공 확인
