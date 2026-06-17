import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SHOWN = 'data-shown';

export function useScrollReveal(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(`[data-a]:not([${SHOWN}])`));

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.setAttribute(SHOWN, ''));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(SHOWN, '');
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
        if (el.hasAttribute(SHOWN)) return;
        if (el.getBoundingClientRect().top < vh) el.setAttribute(SHOWN, '');
      });
    };
    const raf = requestAnimationFrame(revealVisible);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);
}
