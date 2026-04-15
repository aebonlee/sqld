import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminGuard from './components/AdminGuard';

function lazyLoad(importFn) {
  return lazy(() =>
    importFn().catch(() => {
      window.location.reload();
      return new Promise(() => {});
    })
  );
}

const Home = lazyLoad(() => import('./pages/Home'));
const IntroWhatIsSqld = lazyLoad(() => import('./pages/IntroWhatIsSqld'));
const IntroExamGuide = lazyLoad(() => import('./pages/IntroExamGuide'));
const IntroStudyStrategy = lazyLoad(() => import('./pages/IntroStudyStrategy'));
const Subject1Overview = lazyLoad(() => import('./pages/Subject1Overview'));
const Subject1Ch1 = lazyLoad(() => import('./pages/Subject1Ch1'));
const Subject1Ch2 = lazyLoad(() => import('./pages/Subject1Ch2'));
const Subject2Overview = lazyLoad(() => import('./pages/Subject2Overview'));
const Subject2Ch1 = lazyLoad(() => import('./pages/Subject2Ch1'));
const Subject2Ch2 = lazyLoad(() => import('./pages/Subject2Ch2'));
const Subject2Ch3 = lazyLoad(() => import('./pages/Subject2Ch3'));
const SqlRefDDL = lazyLoad(() => import('./pages/SqlRefDDL'));
const SqlRefDML = lazyLoad(() => import('./pages/SqlRefDML'));
const SqlRefFunctions = lazyLoad(() => import('./pages/SqlRefFunctions'));
const SqlRefJoin = lazyLoad(() => import('./pages/SqlRefJoin'));
const SqlRefSubquery = lazyLoad(() => import('./pages/SqlRefSubquery'));
const ExamRound1 = lazyLoad(() => import('./pages/ExamRound1'));
const ExamRound2 = lazyLoad(() => import('./pages/ExamRound2'));
const ExamRound3 = lazyLoad(() => import('./pages/ExamRound3'));
const ExamRound4 = lazyLoad(() => import('./pages/ExamRound4'));
const References = lazyLoad(() => import('./pages/References'));
const Training = lazyLoad(() => import('./pages/Training'));
const Playground = lazyLoad(() => import('./pages/Playground'));
const Login = lazyLoad(() => import('./pages/Login'));
const Profile = lazyLoad(() => import('./pages/Profile'));
const NotFound = lazyLoad(() => import('./pages/NotFound'));
const AdminDashboard = lazyLoad(() => import('./pages/admin/AdminDashboard'));

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--text-secondary)'
    }}>
      <div className="loading-spinner"></div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />

          {/* Intro */}
          <Route path="intro/what-is-sqld" element={<IntroWhatIsSqld />} />
          <Route path="intro/exam-guide" element={<IntroExamGuide />} />
          <Route path="intro/study-strategy" element={<IntroStudyStrategy />} />

          {/* Subject 1 */}
          <Route path="subject1" element={<Subject1Overview />} />
          <Route path="subject1/overview" element={<Subject1Overview />} />
          <Route path="subject1/ch1" element={<Subject1Ch1 />} />
          <Route path="subject1/ch2" element={<Subject1Ch2 />} />

          {/* Subject 2 */}
          <Route path="subject2" element={<Subject2Overview />} />
          <Route path="subject2/overview" element={<Subject2Overview />} />
          <Route path="subject2/ch1" element={<Subject2Ch1 />} />
          <Route path="subject2/ch2" element={<Subject2Ch2 />} />
          <Route path="subject2/ch3" element={<Subject2Ch3 />} />

          {/* SQL Reference */}
          <Route path="sqlref" element={<SqlRefDDL />} />
          <Route path="sqlref/ddl" element={<SqlRefDDL />} />
          <Route path="sqlref/dml" element={<SqlRefDML />} />
          <Route path="sqlref/functions" element={<SqlRefFunctions />} />
          <Route path="sqlref/join" element={<SqlRefJoin />} />
          <Route path="sqlref/subquery" element={<SqlRefSubquery />} />

          {/* Exam */}
          <Route path="exam" element={<ExamRound1 />} />
          <Route path="exam/round1" element={<ExamRound1 />} />
          <Route path="exam/round2" element={<ExamRound2 />} />
          <Route path="exam/round3" element={<ExamRound3 />} />
          <Route path="exam/round4" element={<ExamRound4 />} />

          {/* References & Training */}
          <Route path="references" element={<References />} />
          <Route path="training" element={<Training />} />
          <Route path="playground" element={<Playground />} />

          {/* Auth & Profile */}
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />

          {/* Admin */}
          <Route path="admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
