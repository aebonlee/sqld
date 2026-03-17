import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCodeCopy } from '../hooks/useCodeCopy';
import { useTableScroller } from '../hooks/useTableScroller';
import { usePageTracker } from '../hooks/usePageTracker';

const PublicLayout = () => {
  const location = useLocation();
  useCodeCopy();
  useTableScroller();
  usePageTracker(location.pathname);

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
