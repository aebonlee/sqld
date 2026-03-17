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

## 개발 일지

### 2026-03-18 (Day 1) - 프로젝트 생성 및 전체 구현

#### Phase 1: 프로젝트 초기 설정
- GitHub 리포지토리 생성 (`aebonlee/sqld`)
- `package.json` 작성 — React 19.2.0, Vite 7.3.1, react-router-dom 7.13.0, Supabase, jsPDF, html2canvas, DOMPurify
- `vite.config.js` — 개발 서버 포트 5177, copy-404 플러그인 (SPA 라우팅용)
- `index.html` — SQLD 메타태그, Open Graph, favicon 연결
- `.env` — Supabase URL/Key 설정
- `public/favicon.svg` — SQLD 브랜드 아이콘 (SVG)
- `.gitignore` — node_modules, dist, .env 제외
- `npm install` 완료

#### Phase 2: 핵심 인프라 구현
- `src/lib/supabase.js` — Supabase 클라이언트 (PKCE 인증 플로우)
- `src/contexts/ThemeContext.jsx` — auto/light/dark 모드 + 5색상 테마 (blue/red/green/purple/orange)
- `src/contexts/LanguageContext.jsx` — 한국어/영어 전환
- `src/contexts/AuthContext.jsx` — Supabase Auth (Google, Kakao OAuth, 이메일/비밀번호)
- `src/contexts/ProgressContext.jsx` — 학습 진행 이중 저장 (localStorage + Supabase)
- `src/config/site.js` — 사이트명, URL, 메뉴 구조 (7개 메뉴 + children)
- `src/config/studyItems.js` — 15개 레슨 + 4개 모의고사 정의
- `src/config/badges.js` — 8개 배지 + 획득 조건 함수
- `src/hooks/` — useCodeCopy, useTableScroller, usePageTracker, useAOS (4개 커스텀 훅)
- `src/utils/translations.js` — ko/en 번역 사전 (nav, home, auth, profile, lesson, exam, footer, theme, common)

#### Phase 3: 컴포넌트 및 레이아웃 구현
- `src/main.jsx` — ErrorBoundary + Provider 스택 (Theme > Language > Auth > Progress)
- `src/App.jsx` — lazyLoad + 에러 복구 (chunk 로드 실패 시 자동 새로고침) + 전체 라우팅
- `src/layouts/PublicLayout.jsx` — Navbar + Outlet + Footer, 커스텀 훅 통합
- `src/components/layout/Navbar.jsx` — Glassmorphism 스타일, 모바일 햄버거, 인증 UI, 테마/언어 토글
- `src/components/layout/Footer.jsx` — 사이트 정보, 메뉴 링크, Family Sites
- `src/components/SEOHead.jsx` — 동적 document.title + meta description
- `src/components/LessonComplete.jsx` — 학습 완료 토글 버튼 (체크 애니메이션)
- `src/components/BadgeCard.jsx` — 이모지 아이콘 배지 카드
- `src/components/Certificate.jsx` — 수료증 UI + PDF/PNG 다운로드
- `src/components/StampGrid.jsx` — 진행률 스탬프 그리드 (레슨/시험)

#### Phase 4: 메인 페이지 구현 (4개)
- `Home.jsx` — 히어로 섹션 + 커리큘럼 카드 그리드 (시험소개, 1과목, 2과목, SQL 레퍼런스, 모의고사)
- `Login.jsx` — 3단계 인증 UI (방법 선택 → 이메일 입력 → 회원가입), 게스트 안내
- `Profile.jsx` — 배지 갤러리, 수료증, 학습 통계, 진행률 바, 초기화
- `NotFound.jsx` — 404 페이지

#### Phase 5: 학습 콘텐츠 페이지 구현 (21개)
- **시험 소개 (3개)**
  - `IntroWhatIsSqld.jsx` — SQLD 자격증 소개, 시험 기본 정보, 과목 구성
  - `IntroExamGuide.jsx` — 접수 방법, 시험 일정, 당일 안내, 합격 기준, 자격증 발급
  - `IntroStudyStrategy.jsx` — 4주/2주 학습 플랜, 과목별 전략, 자주 틀리는 유형
- **1과목: 데이터 모델링의 이해 (3개)**
  - `Subject1Overview.jsx` — 1과목 개요, 출제 범위, 학습 전략
  - `Subject1Ch1.jsx` — 데이터 모델링 3단계, 엔터티, 속성, 관계, 식별자 (상세)
  - `Subject1Ch2.jsx` — 정규화 (1NF~BCNF), 반정규화, 성능 데이터 모델링
- **2과목: SQL 기본 및 활용 (4개)**
  - `Subject2Overview.jsx` — 2과목 개요, 최빈출 TOP 10, SQL 실행 순서
  - `Subject2Ch1.jsx` — DDL, DML, WHERE, 함수 (문자열/숫자/NULL), GROUP BY, ORDER BY, TCL
  - `Subject2Ch2.jsx` — JOIN (6종류), 서브쿼리 (4종류), 집합연산, 윈도우 함수, 계층형 쿼리
  - `Subject2Ch3.jsx` — MERGE, ACID, 격리 수준, FK 옵션, DCL, VIEW, SEQUENCE, INDEX
- **SQL 레퍼런스 (5개)**
  - `SqlRefDDL.jsx` — CREATE/ALTER/DROP/TRUNCATE 빠른 참조
  - `SqlRefDML.jsx` — SELECT/INSERT/UPDATE/DELETE/MERGE 빠른 참조
  - `SqlRefFunctions.jsx` — 문자열/숫자/날짜/변환/NULL/CASE/집계 함수 레퍼런스
  - `SqlRefJoin.jsx` — INNER/OUTER/CROSS/NATURAL/SELF JOIN + ON vs WHERE 차이
  - `SqlRefSubquery.jsx` — 스칼라/인라인뷰/중첩/상관 서브쿼리 + CTE
- **모의고사 (4개)**
  - `ExamRound1.jsx` — 1회 모의고사 20문항 (타이머, 자동채점, 오답확인)
  - `ExamRound2.jsx` — 2회 모의고사 20문항 (타이머, 자동채점, 오답확인)
  - `ExamRound3.jsx` — 3회 모의고사 (준비 중 안내)
  - `ExamRound4.jsx` — 4회 모의고사 (준비 중 안내)
- **기타 (2개)**
  - `References.jsx` — 공식 자료, SQL 실습 환경, 핵심 암기 정리, 시험 체크리스트
  - `Training.jsx` — 실습용 테이블 DDL/DML, SQL 연습 문제 10개 (정답 토글)

#### Phase 6: CSS 스타일 구성 (12개 파일)
- linux-study 프로젝트의 CSS를 기반으로 SQLD 사이트에 맞게 적용
- `src/index.css` — 11개 스타일 파일 임포트 허브
- `src/styles/base.css` — CSS 변수, 리셋, 버튼, 유틸리티
- `src/styles/navbar.css` — Glassmorphism 네비게이션 바
- `src/styles/hero.css` — 히어로 섹션, 캐러셀
- `src/styles/footer.css` — 푸터 레이아웃
- `src/styles/site.css` — 레슨, 커리큘럼, 시험, 게시판 스타일
- `src/styles/animations.css` — AOS 애니메이션 정의
- `src/styles/auth.css` — 인증 페이지
- `src/styles/profile.css` — 프로필 페이지
- `src/styles/progress.css` — 학습 현황 / 스탬프
- `src/styles/dark-mode.css` — 다크 모드 오버라이드
- `src/styles/responsive.css` — 반응형 브레이크포인트 (768px, 480px)

#### Phase 7: 빌드 & 배포
- `npm run build` 성공 (5.74s, 67개 파일)
- `public/CNAME` 추가 — GitHub Pages 커스텀 도메인 (sqld.dreamitbiz.com)
- `npx gh-pages -d dist` — gh-pages 브랜치 배포
- GitHub Pages 설정 확인: source=gh-pages, status=built

#### 총 개발 결과
| 항목 | 수량 |
|------|------|
| 전체 파일 수 | 68개 |
| 코드 라인 수 | 약 14,900줄 |
| React 컴포넌트 | 7개 |
| 페이지 | 25개 |
| Context | 4개 |
| 커스텀 훅 | 4개 |
| CSS 파일 | 12개 |
| 설정 파일 | 3개 |
| 모의고사 문항 | 40문항 (1-2회) |

---

## 향후 계획

- [ ] 3회, 4회 모의고사 문항 추가 (각 20문항)
- [ ] Cloudflare DNS 설정 (`sqld` CNAME → `aebonlee.github.io`)
- [ ] Supabase 테이블 생성 (progress, page_views)
- [ ] Google/Kakao OAuth 콜백 URL 설정
- [ ] 모바일 UI 세부 테스트 및 조정
- [ ] 추가 학습 콘텐츠 보강 (실전 기출 해설 등)
