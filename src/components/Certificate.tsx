import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Certificate({ displayName, completedLessons, totalLessons, bestExamScore }: any) {
  const { t } = useLanguage();
  const certRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const rate = Math.round((completedLessons / totalLessons) * 100);
  const today = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

  const captureCanvas = async () => {
    const html2canvas = (await import('html2canvas')).default;
    return html2canvas(certRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#FFFDF7'
    });
  };

  const downloadPDF = async () => {
    setDownloading(true);
    try {
      const [canvas, { jsPDF }] = await Promise.all([
        captureCanvas(),
        import('jspdf')
      ]);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      pdf.save('sqld-study-certificate.pdf');
    } catch (err) {
      console.error('PDF download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  const downloadPNG = async () => {
    setDownloading(true);
    try {
      const canvas = await captureCanvas();
      const link = document.createElement('a');
      link.download = 'sqld-study-certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('PNG download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="certificate-wrapper">
      <div className="certificate-preview-wrapper">
        <div className="certificate-template" ref={certRef}>
          <div className="cert-border-outer">
            <div className="cert-border-inner">
              <div className="cert-content">
                <p className="cert-site-name">SQLD Study</p>
                <h2 className="cert-title">{t('profile.certificate')}</h2>
                <div className="cert-divider"></div>
                <p className="cert-awarded">This is to certify that</p>
                <p className="cert-name">{displayName}</p>
                <p className="cert-description">has successfully completed the SQLD study program</p>
                <div className="cert-stats">
                  <div className="cert-stat">
                    <span className="cert-stat-value">{completedLessons}/{totalLessons}</span>
                    <span className="cert-stat-label">{t('profile.completed_lessons')}</span>
                  </div>
                  <div className="cert-stat">
                    <span className="cert-stat-value">{rate}%</span>
                    <span className="cert-stat-label">Completion Rate</span>
                  </div>
                  {bestExamScore != null && (
                    <div className="cert-stat">
                      <span className="cert-stat-value">{bestExamScore}%</span>
                      <span className="cert-stat-label">Best Exam Score</span>
                    </div>
                  )}
                  <div className="cert-stat">
                    <span className="cert-stat-value">{today}</span>
                    <span className="cert-stat-label">Date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certificate-actions">
        <button
          className="cert-download-btn pdf"
          onClick={downloadPDF}
          disabled={downloading}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
          {downloading ? '...' : t('profile.download_pdf')}
        </button>
        <button
          className="cert-download-btn png"
          onClick={downloadPNG}
          disabled={downloading}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          {downloading ? '...' : t('profile.download_png')}
        </button>
      </div>
    </div>
  );
}
