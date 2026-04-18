import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured, setSharedSession, getSharedSession, clearSharedSession } from '../lib/supabase';
import { ADMIN_EMAILS } from '../config/admin';
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(isSupabaseConfigured());

  const fetchProfile = useCallback(async (userId) => {
    if (!supabase) return null;
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return data;
  }, []);

  useEffect(() => {
    if (!supabase) return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.refresh_token) setSharedSession(session.refresh_token);
        if (event === 'SIGNED_OUT') clearSharedSession();

        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          const p = await fetchProfile(currentUser.id);
          setProfile(p);
        } else {
          setProfile(null);
        }
        if (event === 'INITIAL_SESSION') {
          if (!currentUser) {
            const rt = getSharedSession();
            if (rt) {
              try {
                const { data } = await supabase!.auth.refreshSession({ refresh_token: rt });
                if (!data.session) clearSharedSession();
              } catch { clearSharedSession(); }
            }
          }
          setLoading(false);
        }
      }
    );

    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + window.location.pathname }
    });
    return { data, error };
  }, []);

  const signInWithKakao = useCallback(async () => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin + window.location.pathname,
        scopes: 'profile_nickname profile_image account_email',
      }
    });
    return { data, error };
  }, []);

  const signInWithEmail = useCallback(async (email, password) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  }, []);

  const signUpWithEmail = useCallback(async (email, password, displayName) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } }
    });
    return { data, error };
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut({ scope: 'local' });
    setUser(null);
    setProfile(null);
  }, []);

  const updateDisplayName = useCallback(async (displayName) => {
    if (!supabase || !user) return { error: { message: 'Not authenticated' } };
    const { error } = await supabase
      .from('profiles')
      .update({ display_name: displayName })
      .eq('id', user.id);
    if (!error) {
      setProfile(prev => prev ? { ...prev, display_name: displayName } : prev);
    }
    return { error };
  }, [user]);

  const allEmails = [
    user?.email,
    (user as any)?.user_metadata?.email,
    (user as any)?.identities?.[0]?.identity_data?.email,
  ].filter(Boolean).map((e: any) => e.toLowerCase());
  const isAdmin = allEmails.some((e: string) => ADMIN_EMAILS.includes(e));


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  supabase.auth.signOut();
  clearSharedSession();
  },
  });
  const refreshProfile = useCallback(async () => { if (user) { const p = await fetchProfile(user.id); setProfile(p); } }, [user, fetchProfile]);
  const needsProfileCompletion = !!user && !!profile && (!profile.name || !profile.phone);


  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isAuthenticated: !!user,
      isAdmin,
      isSupabaseAvailable: isSupabaseConfigured(),
      signInWithGoogle,
      signInWithKakao,
      signInWithEmail,
      signUpWithEmail,
      signOut,
      updateDisplayName
    }}>
      {children}
      {needsProfileCompletion && user && (
        <ProfileCompleteModal user={user} onComplete={refreshProfile} />
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
