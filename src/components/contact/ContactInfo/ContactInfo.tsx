import { CONTACT_EMAIL, TELEGRAM_URL, TELEGRAM_HANDLE } from '../../../data/site';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.intro} data-a="left">
      <h3>
        Let's Build Something
        <br />
        <span className="text-gold">Profitable Together</span>
      </h3>
      <p>
        Whether you're an advertiser looking to scale your offers, an affiliate network seeking a reliable
        buying team, or a brand ready to expand globally — we want to hear from you.
      </p>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.ico}>✈</div>
          <div className={styles.text}>
            <h4>Telegram</h4>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              {TELEGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.ico}>✉️</div>
          <div className={styles.text}>
            <h4>Email</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.ico}>💼</div>
          <div className={styles.text}>
            <h4>Business Hours</h4>
            <p>Mon – Fri &nbsp;·&nbsp; 09:00 – 20:00 CET</p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.ico}>⚡</div>
          <div className={styles.text}>
            <h4>Response Time</h4>
            <p>Typically within 2–4 business hours</p>
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: '0.83rem',
          color: 'var(--t3)',
          marginBottom: 8,
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Also available on
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="#" className="btn btn-ghost" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
          Skype
        </a>
        <a href="#" className="btn btn-ghost" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
          WhatsApp
        </a>
        <a href="#" className="btn btn-ghost" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
          LinkedIn
        </a>
      </div>

      <div className={styles.mapGrid}>
        <div className={styles.mapGridInner}></div>
        <div className={styles.mapLabel}>
          <div className={styles.mapPin}></div>
          <span>Rhine Media · Global Operations</span>
        </div>
      </div>
    </div>
  );
}
