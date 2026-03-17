import { useEffect } from 'react';

export function useAOS() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    function observe() {
      document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
      });
    }

    const timer = setTimeout(observe, 100);
    const mutationObs = new MutationObserver(() => observe());
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);
}
