import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

function getVisitorId() {
  const KEY = 'sqld-study-visitor-id';
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID?.() || Math.random().toString(36).slice(2);
    localStorage.setItem(KEY, id);
  }
  return id;
}

export function usePageTracker(pagePath) {
  useEffect(() => {
    if (!supabase || !pagePath) return;
    const visitorId = getVisitorId();
    supabase.from('page_views').insert({
      page_path: pagePath,
      visitor_id: visitorId,
      viewed_at: new Date().toISOString()
    }).then();
  }, [pagePath]);
}
