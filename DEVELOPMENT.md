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
│   │   ├── SqlBlock.jsx         # SQL 코드 + 실행 결과 컴포넌트
│   │   ├── SampleDataPanel.jsx  # 접이식 샘플 데이터 패널
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
│   ├── data/
│   │   └── sampleData.js        # 공통 샘플 데이터 (부서/사원)
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
│   │   ├── sql-block.css        # SQL 블록 + 샘플 데이터 패널
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

### 2026-03-18 (Day 1 - 2차) - 콘텐츠 페이지 CSS 수정 및 버그 수정

#### 문제 발견
- 사이트 배포 후 상단 메뉴(Navbar)와 푸터(Footer)는 정상 표시되나, **콘텐츠 페이지 내용이 전혀 보이지 않는 문제** 발생
- 원인 조사 결과 2가지 문제 확인

#### 원인 1: CSS 클래스 누락
- linux-study에서 복사한 CSS에는 `lesson-body` 등의 클래스만 정의되어 있었음
- SQLD 콘텐츠 페이지에서 사용하는 클래스들(`lesson-page`, `hero-compact`, `content-card`, `chapter-grid`, `chapter-card`, `info-box`)에 대한 CSS 정의가 없었음
- **해결**: `src/styles/site.css`에 콘텐츠 페이지용 CSS 303줄 추가

#### 추가된 CSS 스타일 상세
| 클래스명 | 용도 |
|---------|------|
| `.lesson-page` | 콘텐츠 페이지 컨테이너 (max-width: 900px) |
| `.hero-compact` | 페이지 상단 제목 영역 |
| `.content-card` | 본문 카드 (glassmorphism 배경, 둥근 모서리) |
| `.content-card h2/h3/p/ul/ol` | 본문 타이포그래피 |
| `.content-card table/th/td` | 본문 내 테이블 스타일 |
| `.content-card pre/code` | 코드 블록 (다크 배경, Consolas 폰트) |
| `.info-box` | 정보/팁 박스 (좌측 파란 보더) |
| `.chapter-grid` | 챕터 네비게이션 그리드 (auto-fit) |
| `.chapter-card` | 챕터 카드 (hover 효과, 트랜지션) |
| 다크 모드 | `[data-theme="dark"]` 오버라이드 |
| 반응형 | 768px, 480px 브레이크포인트 |

#### 원인 2: ExamRound 함수명 불일치
- `ExamRound1.jsx`, `ExamRound2.jsx`에서 `saveExamResult()` 호출
- `ProgressContext.jsx`에서 내보내는 실제 함수명은 `recordExamResult()`
- 함수 시그니처도 불일치: `saveExamResult(id, {score, total, pass})` → `recordExamResult(id, score, total)`
- **해결**: 두 파일 모두 `recordExamResult(examId, score, 100)`으로 수정

#### 커밋 & 배포
- 커밋: `a1d5a31` — `fix: 콘텐츠 페이지 CSS 추가 및 ExamRound 버그 수정`
- 빌드: Vite 7.3.1 (5.20s 소요)
- 배포: `npx gh-pages -d dist` → Published

### 2026-03-18 (Day 1 - 3차) - 전체 사이트 점검 및 품질 개선

#### 점검 범위
- 전체 25개 페이지, 7개 컴포넌트, 4개 커스텀 훅, 4개 Context, 3개 Config, 12개 CSS 파일 종합 점검

#### 발견 및 수정된 이슈

| # | 파일 | 이슈 | 심각도 | 수정 내용 |
|---|------|------|--------|----------|
| 1 | `base.css` | `--bg-card` CSS 변수 미정의 | **HIGH** | `:root`에 `--bg-card: var(--bg-white)` 추가 |
| 2 | `base.css` | `--primary-rgb` CSS 변수 미정의 | **HIGH** | `:root`에 `--primary-rgb: 0, 70, 200` 추가 |
| 3 | `base.css` | 색상 테마별 `--primary-rgb` 누락 | **MEDIUM** | red/green/purple/orange 테마에 각각 RGB값 추가 |
| 4 | `dark-mode.css` | 다크모드에서 `--bg-card`, `--primary-rgb` 미정의 | **HIGH** | 다크모드 변수 추가 + 테마별 다크모드 RGB값 추가 |
| 5 | `site.css` | `.info-box` 불필요한 fallback 값 사용 | **LOW** | fallback 제거 (변수 정의 완료됨) |
| 6 | `BadgeCard.jsx` | 하드코딩 한국어 텍스트 ('획득!'/'미획득') | **MEDIUM** | `useLanguage()` + `t()` i18n 적용 |
| 7 | `translations.js` | 배지 관련 번역키 누락 | **MEDIUM** | `badge_earned`, `badge_locked` ko/en 추가 |
| 8 | `usePageTracker.js` | Supabase insert 에러 핸들링 없음 | **MEDIUM** | `.then()` → 에러 로깅 콜백 추가 |

#### 점검 결과 정상 확인 항목
- 모든 import/export 일치 확인
- 라우트 경로와 메뉴 링크 일치 확인
- studyItems.js 레슨 ID와 페이지 LessonComplete 연동 확인
- ProgressContext 함수명 (recordExamResult 등) 일치 확인
- 번역키 사용과 translations.js 정의 일치 확인
- 모의고사 타이머/채점/오답확인 로직 정상 확인
- ErrorBoundary 및 Lazy Loading 에러 복구 정상 확인

### 2026-03-18 (Day 1 - 4차) - 네비바 겹침 수정 및 AOS 애니메이션 버그 수정

#### 문제 1: 콘텐츠 페이지가 전혀 보이지 않음 (opacity: 0)
- **원인**: `animations.css`에서 `[data-aos]` 요소가 기본 `opacity: 0`으로 숨겨져 있는데, `useAOS()` 훅이 `Home.jsx`에서만 호출되어 다른 페이지에서는 `aos-animate` 클래스가 추가되지 않아 콘텐츠가 투명 상태로 유지됨
- **해결**: `useAOS()`를 `PublicLayout.jsx`로 이동하여 모든 페이지에서 AOS 애니메이션이 작동하도록 함
- **수정 파일**: `PublicLayout.jsx` (useAOS 추가), `Home.jsx` (중복 useAOS 제거)

#### 문제 2: 타이틀 영역이 네비바와 겹침
- **원인**: Navbar가 `position: fixed`로 80px 높이인데, `.hero-compact`의 `padding-top`이 60px으로 네비바 뒤에 가려짐
- **해결**: `.hero-compact` padding-top을 `calc(var(--nav-height) + 40px)` = 120px으로 변경
- **수정 파일**: `src/styles/site.css` (데스크톱 + 768px 반응형 모두)

#### 문제 3: 404 페이지 네비바 겹침 + 중복 useAOS
- **원인**: `.not-found-page`에 nav-height 고려 없이 `padding: 40px`만 사용, NotFound.jsx에서 useAOS 중복 호출
- **해결**: padding-top에 `calc(var(--nav-height) + 40px)` 적용, NotFound.jsx에서 useAOS import 제거
- **수정 파일**: `src/styles/base.css`, `src/pages/NotFound.jsx`

#### 전체 사이트 점검 결과
- 25개 페이지 nav-height 처리 정상 확인:
  - `.hero-section` (Home): `calc(var(--nav-height) + 60px)` ✓
  - `.hero-compact` (콘텐츠 15개 + 모의고사 4개): `calc(var(--nav-height) + 40px)` ✓
  - `.page-header` (Login, Profile): `calc(var(--nav-height) + 48px)` ✓
  - `.not-found-page` (404): `calc(var(--nav-height) + 40px)` ✓
- 모든 LessonComplete ID와 studyItems.js 일치 확인 ✓
- 모든 Link 경로와 App.jsx 라우트 일치 확인 ✓
- dist/404.html SPA 폴백 파일 정상 생성 확인 ✓

---

### 2026-03-18 (Day 1 - 5차) - 레이아웃 정렬 및 너비 개선

#### 수정 내용

| # | 파일 | 수정 내용 |
|---|------|----------|
| 1 | `site.css` | `.lesson-page` max-width 900px → **1080px**, padding 20px → **40px** (콘텐츠 영역 확장) |
| 2 | `site.css` | `.home-curriculum-grid` `repeat(4, 1fr)` → **`auto-fit, minmax(220px, 1fr)`** (카드 수에 맞게 자동 정렬) |
| 3 | `site.css` | `.home-commands-grid` `repeat(5, 1fr)` → **`auto-fit, minmax(180px, 1fr)`** (SQL 레퍼런스 카드 자동 정렬) |
| 4 | `site.css` | `.content-card .table-wrapper` 추가 (테이블 가로 스크롤 지원) |
| 5 | `responsive.css` | 1100px/768px/480px 고정 열수 오버라이드 제거 (auto-fit이 자동 처리) |

#### 개선 효과
- 콘텐츠 페이지가 화면 너비를 더 효율적으로 활용 (900px → 1080px)
- 홈 커리큘럼 카드가 카드 수에 맞게 자동으로 균등 배치 (3개면 3열, 4개면 4열)
- SQL 레퍼런스 카드 5개가 화면 크기에 따라 자동 리플로우
- 모바일에서 자연스러운 1-2열 전환 (auto-fit minmax 사용)

---

### 2026-03-18 (Day 1 - 6차) - 이모지 → Font Awesome 아이콘 전환

#### 배경
- 사이트 전체에서 이모지(📋🗃️🔗💻⚙️🔧🏗️📝🔢🔍📖💾👣🧭🏔️👑)를 사용하고 있었음
- 크로스 플랫폼 일관성과 스타일 통일을 위해 Font Awesome 6.5.1로 전환

#### 수정 내용

| # | 파일 | 수정 내용 |
|---|------|----------|
| 1 | `index.html` | Font Awesome 6.5.1 CDN 링크 추가 |
| 2 | `src/config/badges.js` | 8개 뱃지 이모지 → FA 클래스명으로 변경 |
| 3 | `src/components/BadgeCard.jsx` | `{badge.icon}` → `<i className={badge.icon}>` 렌더링 변경 |
| 4 | `src/pages/Home.jsx` | 12개 커리큘럼/레퍼런스 카드 아이콘 FA로 교체 + `<i>` 태그 렌더링 |
| 5 | `src/pages/ExamRound3.jsx` | `📝` → `fa-solid fa-pen-to-square` |
| 6 | `src/pages/ExamRound4.jsx` | `📝` → `fa-solid fa-pen-to-square` |

#### 아이콘 매핑 상세

| 용도 | 이전 (이모지) | 이후 (FA 아이콘) |
|------|-------------|-----------------|
| 뱃지: 입문 마스터 | 📋 | `fa-solid fa-clipboard-list` |
| 뱃지: 1과목 마스터 | 🗃️ | `fa-solid fa-database` |
| 뱃지: 2과목 마스터 | 💾 | `fa-solid fa-server` |
| 뱃지: SQL 레퍼런스 마스터 | 📖 | `fa-solid fa-book-open` |
| 뱃지: 첫 걸음 | 👣 | `fa-solid fa-shoe-prints` |
| 뱃지: 탐험가 | 🧭 | `fa-solid fa-compass` |
| 뱃지: 도전자 | 🏔️ | `fa-solid fa-mountain` |
| 뱃지: 그랜드 마스터 | 👑 | `fa-solid fa-crown` |
| 홈: 과목 개요 | 📋 | `fa-solid fa-clipboard-list` |
| 홈: 데이터 모델링 | 🗃️ | `fa-solid fa-cubes` |
| 홈: 데이터 모델과 SQL | 🔗 | `fa-solid fa-link` |
| 홈: SQL 기본 | 💻 | `fa-solid fa-laptop-code` |
| 홈: SQL 활용 | ⚙️ | `fa-solid fa-gears` |
| 홈: 관리 구문 | 🔧 | `fa-solid fa-wrench` |
| 홈: DDL | 🏗️ | `fa-solid fa-hammer` |
| 홈: DML | 📝 | `fa-solid fa-pen-to-square` |
| 홈: 함수 | 🔢 | `fa-solid fa-calculator` |
| 홈: JOIN | 🔗 | `fa-solid fa-link` |
| 홈: 서브쿼리 | 🔍 | `fa-solid fa-magnifying-glass` |
| 모의고사 준비 중 | 📝 | `fa-solid fa-pen-to-square` |

---

### 2026-03-18 (Day 1 - 7차) - SQL 코드 + 실행 결과 표시 기능 구현

#### 배경
- 9개 SQL 콘텐츠 페이지에서 `<pre><code>` 블록으로 SQL 코드만 표시하고 있었음
- 사용자가 SQL을 보고 바로 실행 결과를 확인하며 공부할 수 있도록 **SQL 코드 + 실행 결과 테이블**을 함께 표시하는 기능 추가
- 샘플 데이터(부서 4행, 사원 8행)를 기반으로 모든 쿼리의 예상 결과를 미리 계산하여 표시

#### 새로 생성한 파일 (4개)

| # | 파일 | 설명 |
|---|------|------|
| 1 | `src/data/sampleData.js` | 공통 샘플 데이터 (부서 4행, 사원 8행) + DDL/DML SQL 문자열 |
| 2 | `src/components/SqlBlock.jsx` | SQL 코드 + 결과 테이블 통합 컴포넌트 (Copy 버튼, NULL 이탤릭 표시) |
| 3 | `src/components/SampleDataPanel.jsx` | 접이식 샘플 데이터 패널 (부서/사원 테이블 참조용) |
| 4 | `src/styles/sql-block.css` | SqlBlock + SampleDataPanel CSS (다크모드 + 반응형 지원) |

#### SqlBlock 컴포넌트 구조
```
┌──────────────────────────────────┐
│ [</>] title              [복사]  │  ← 헤더 (dark #2d3748)
├──────────────────────────────────┤
│ SELECT 사원명, 연봉              │  ← SQL 코드 (#1a202c, Consolas)
│ FROM 사원 WHERE ...              │
├──────────────────────────────────┤
│ [표] 실행 결과 (N건)             │  ← 결과 헤더 (blue accent)
├──────────────────────────────────┤
│ 사원명   │ 연봉                  │  ← 결과 테이블 (monospace)
│ 김사장   │ 9000                  │
│ 이부장   │ 7000                  │
└──────────────────────────────────┘
```
- Props: `{ title?, sql, columns?, rows?, description? }`
- columns/rows 없으면 결과 테이블 생략 (DDL/DML용)
- null 값은 `(NULL)` 이탤릭 표시
- Copy 버튼으로 SQL 클립보드 복사

#### 수정한 파일 (10개)

| # | 파일 | 수정 내용 |
|---|------|----------|
| 1 | `src/index.css` | `sql-block.css` import 추가 |
| 2 | `SqlRefJoin.jsx` | SampleDataPanel + INNER/LEFT/RIGHT/FULL/SELF JOIN 각각 결과 테이블 (7개 SqlBlock) |
| 3 | `Subject2Ch1.jsx` | SampleDataPanel + SELECT, GROUP BY, ORDER BY, TCL 결과 테이블 |
| 4 | `Subject2Ch2.jsx` | SampleDataPanel + JOIN, 스칼라 서브쿼리, 인라인뷰, 윈도우함수, 계층형쿼리 결과 |
| 5 | `Subject2Ch3.jsx` | SampleDataPanel + MERGE, DCL, VIEW, SEQUENCE, INDEX (코드만) |
| 6 | `SqlRefDML.jsx` | SampleDataPanel + SELECT, ORDER BY 결과 테이블 |
| 7 | `SqlRefSubquery.jsx` | SampleDataPanel + 스칼라, 인라인뷰, 다중행, 상관 서브쿼리, CTE 결과 |
| 8 | `SqlRefFunctions.jsx` | SampleDataPanel + CASE 표현식 결과 |
| 9 | `SqlRefDDL.jsx` | SampleDataPanel + Copy 버튼만 (DDL은 결과 테이블 없음) |
| 10 | `Training.jsx` | SampleDataPanel 교체 + 연습 문제 10개 정답에 SqlBlock 결과 추가 |

#### 총 SqlBlock 인스턴스: 약 50개
- 결과 테이블 포함: 약 30개
- 코드만 (DDL/DML/DCL): 약 20개

---

#### 총 개발 결과
| 항목 | 수량 |
|------|------|
| 전체 파일 수 | 72개 |
| 코드 라인 수 | 약 16,500줄 |
| React 컴포넌트 | 9개 |
| 페이지 | 25개 |
| Context | 4개 |
| 커스텀 훅 | 4개 |
| CSS 파일 | 13개 |
| 설정/데이터 파일 | 4개 |
| 모의고사 문항 | 40문항 (1-2회) |

---

## 향후 계획

- [ ] 3회, 4회 모의고사 문항 추가 (각 20문항)
- [x] ~~Cloudflare DNS 설정~~ → GitHub Pages 자체 DNS 사용 (별도 설정 불필요)
- [ ] Supabase 테이블 생성 (progress, page_views)
- [ ] Google/Kakao OAuth 콜백 URL 설정
- [ ] 모바일 UI 세부 테스트 및 조정
- [ ] 추가 학습 콘텐츠 보강 (실전 기출 해설 등)
