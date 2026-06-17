import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-a]:not(.vis)'));

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('vis'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    els.forEach((el) => observer.observe(el));

    const revealVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.classList.contains('vis')) return;
        const top = el.getBoundingClientRect().top;
        if (top < vh) el.classList.add('vis');
      });
    };
    const raf = requestAnimationFrame(revealVisible);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);
}
