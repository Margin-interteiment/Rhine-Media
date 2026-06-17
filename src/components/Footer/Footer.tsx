import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Footer.module.css';

const verticalLinks = [
  { label: 'Dating Traffic', hash: '#verticals' },
  { label: 'Nutra Campaigns', hash: '#verticals' },
  { label: 'Gambling / iGaming', hash: '#verticals' },
  { label: 'Sweepstakes', hash: '#verticals' },
  { label: 'Crypto Offers', hash: '#verticals' },
  { label: 'Adult', hash: '#verticals' },
];

const trafficLinks = [
  { label: 'Google Ads', hash: '#traffic' },
  { label: 'Meta Ads', hash: '#traffic' },
  { label: 'TikTok Ads', hash: '#traffic' },
  { label: 'PropellerAds', hash: '#traffic' },
  { label: 'Native Ads', hash: '#traffic' },
  { label: 'Push & Pop', hash: '#traffic' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.cols}>
          <div>
            <Logo />
            <p className={styles.desc}>
              Premium performance media buying for the world's most ambitious advertisers and affiliate
              partners. Built for scale. Optimised for ROI.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socBtn} aria-label="Telegram">✈</a>
              <a href="#" className={styles.socBtn} aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socBtn} aria-label="Twitter / X">𝕏</a>
              <a href="#" className={styles.socBtn} aria-label="Skype">☁</a>
            </div>
          </div>

          <div>
            <h4 className={styles.head}>Verticals</h4>
            <ul className={styles.links}>
              {verticalLinks.map((l, i) => (
                <li key={i}>
                  <Link to={{ pathname: '/', hash: l.hash }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.head}>Traffic Sources</h4>
            <ul className={styles.links}>
              {trafficLinks.map((l, i) => (
                <li key={i}>
                  <Link to={{ pathname: '/', hash: l.hash }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.head}>Company</h4>
            <ul className={styles.links}>
              <li><Link to={{ pathname: '/', hash: '#why-us' }}>About Rhine Media</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to={{ pathname: '/', hash: '#partners' }}>Partners</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Rhine Media. All rights reserved. <span style={{ color: 'var(--t3)' }}>rhine-media.com</span>
          </p>
          <nav className={styles.legal} aria-label="Legal">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
