import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroKpis } from '../../../data/site';
import styles from './Hero.module.css';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path
      d="M1 6.5h11M6.5 1.5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (orbARef.current) orbARef.current.style.transform = `translateY(${y * 0.12}px)`;
      if (orbBRef.current) orbBRef.current.style.transform = `translateY(${y * 0.08}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.grid}></div>
      <div className={`${styles.orb} ${styles.orbA}`} ref={orbARef}></div>
      <div className={`${styles.orb} ${styles.orbB}`} ref={orbBRef}></div>
      <div className={`${styles.orb} ${styles.orbC}`}></div>

      <div className={styles.deco} aria-hidden="true">
        <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="400" r="320" stroke="rgba(201,151,59,0.6)" strokeWidth="1" />
          <circle cx="400" cy="400" r="220" stroke="rgba(62,114,236,0.5)" strokeWidth="0.8" />
          <circle cx="400" cy="400" r="120" stroke="rgba(201,151,59,0.4)" strokeWidth="0.6" />
          <line x1="80" y1="400" x2="720" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="400" y1="80" x2="400" y2="720" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <circle cx="400" cy="80" r="5" fill="rgba(201,151,59,0.8)" />
          <circle cx="720" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
          <circle cx="400" cy="720" r="5" fill="rgba(201,151,59,0.8)" />
          <circle cx="80" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 780 }}>
          <div className={styles.badge} data-a="up">
            <span className={styles.badgePulse}></span>
            Performance Media Buying Team
          </div>

          <h1 className={styles.h1} data-a="up" data-d="1">
            <span style={{ display: 'block' }}>Performance Media</span>
            <span style={{ display: 'block' }}>
              Buying Team&nbsp;|&nbsp;<span className={styles.hl}>Rhine Media</span>
            </span>
          </h1>

          <p className={styles.sub} data-a="up" data-d="2">
            We buy traffic for <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong> and more —
            across all major channels, in every major GEO, at premium scale.
          </p>

          <div className={styles.actions} data-a="up" data-d="3">
            <Link to="/contact" className="btn btn-primary">
              Start Cooperation
              <ArrowIcon />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>

          <div className={styles.kpis} data-a="up" data-d="4">
            {heroKpis.map((kpi) => (
              <div className={styles.kpi} key={kpi.label}>
                <span className={styles.kpiV}>{kpi.value}</span>
                <span className={styles.kpiL}>{kpi.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
