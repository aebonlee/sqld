import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Login() {
  const { isAuthenticated, loading, signInWithGoogle, signInWithKakao, signInWithEmail, signUpWithEmail } = useAuth();
  const { t } = useLanguage();
  const [step, setStep] = useState('method');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorCode = params.get('error');
    const errorDesc = params.get('error_description');
    if (errorCode) {
      setError(errorDesc || `Auth error: ${errorCode}`);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/profile" replace />;

  const handleSocialLogin = async (provider) => {
    setError('');
    try {
      if (provider === 'google') await signInWithGoogle();
      else if (provider === 'kakao') await signInWithKakao();
    } catch (err) {
      setError(err.message || 'Authentication failed');
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const { error: err } = await signInWithEmail(email, password);
      if (err) setError(err.message);
    } catch {
      setError('Authentication failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);
    try {
      const { error: err } = await signUpWithEmail(email, password, displayName);
      if (err) {
        setError(err.message);
      } else {
        setSuccess(t('auth.signup_success'));
      }
    } catch {
      setError('Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  const pageTitle = step === 'register' ? t('auth.email_signup') : t('auth.login_title');

  return (
    <div className="auth-page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
        </div>
      </section>

      <div className="auth-page">
        <div className="auth-card">

          {step === 'method' && (
            <>
              <p className="auth-sub">{t('auth.login_desc')}</p>

              <div className="auth-methods">
                <button className="auth-method-btn google" onClick={() => handleSocialLogin('google')}>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>{t('auth.google_login')}</span>
                </button>
                <button className="auth-method-btn kakao" onClick={() => handleSocialLogin('kakao')}>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.52 6.6-.2.74-.72 2.68-.82 3.1-.13.5.18.49.38.36.16-.1 2.5-1.7 3.5-2.4.78.12 1.58.18 2.42.18 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" fill="#3C1E1E"/>
                  </svg>
                  <span>{t('auth.kakao_login')}</span>
                </button>
                <button className="auth-method-btn email" onClick={() => setStep('email')}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>{t('auth.email_login')}</span>
                </button>
              </div>

              {error && <div className="auth-message auth-error">{error}</div>}

              <div className="auth-bottom-link">
                <button className="auth-link-btn" onClick={() => { setStep('register'); setError(''); }}>
                  {t('auth.email_signup')}
                </button>
              </div>
              <p className="auth-guest-notice">{t('auth.guest_notice')}</p>
            </>
          )}

          {step === 'email' && (
            <>
              <form className="auth-form" onSubmit={handleEmailLogin}>
                <div className="auth-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('auth.email_placeholder')} required autoFocus />
                </div>
                <div className="auth-field">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t('auth.password_placeholder')} required minLength={6} />
                </div>
                {error && <div className="auth-message auth-error">{error}</div>}
                <div className="auth-form-actions">
                  <button type="button" className="auth-back-btn" onClick={() => { setStep('method'); setError(''); }}>
                    {t('common.back')}
                  </button>
                  <button type="submit" className="auth-submit-btn" disabled={submitting}>
                    {t('auth.login_title')}
                  </button>
                </div>
              </form>
              <div className="auth-bottom-link">
                <button className="auth-link-btn" onClick={() => { setStep('register'); setError(''); }}>
                  {t('auth.email_signup')}
                </button>
              </div>
            </>
          )}

          {step === 'register' && (
            <>
              {success ? (
                <div className="auth-success-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p>{success}</p>
                  <button className="auth-submit-btn" style={{ width: '100%' }} onClick={() => { setStep('method'); setSuccess(''); }}>
                    {t('auth.login_title')}
                  </button>
                </div>
              ) : (
                <>
                  <form className="auth-form" onSubmit={handleRegister}>
                    <div className="auth-field">
                      <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder={t('auth.name_placeholder')} required autoFocus />
                    </div>
                    <div className="auth-field">
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('auth.email_placeholder')} required />
                    </div>
                    <div className="auth-field">
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t('auth.password_placeholder')} required minLength={6} />
                    </div>
                    {error && <div className="auth-message auth-error">{error}</div>}
                    <div className="auth-form-actions">
                      <button type="button" className="auth-back-btn" onClick={() => { setStep('method'); setError(''); }}>
                        {t('common.back')}
                      </button>
                      <button type="submit" className="auth-submit-btn" disabled={submitting}>
                        {t('auth.email_signup')}
                      </button>
                    </div>
                  </form>
                  <div className="auth-bottom-link">
                    <button className="auth-link-btn" onClick={() => { setStep('method'); setError(''); }}>
                      {t('auth.login_title')}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
