import { partners } from '../../../data/site';
import styles from './Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <div className="container">
        <div className="sec-center" data-a="up">
          <div className="eyebrow">Trusted Partners &amp; Networks</div>
          <h2 className="sec-title">
            Working with the <span className="text-gold">Best in Class</span>
          </h2>
          <p className="sec-sub">
            We maintain direct relationships with premium ad networks, affiliate networks and CPA platforms worldwide.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrap} style={{ marginTop: 44 }}>
        <div className={styles.marqueeTrack}>
          {[...partners, ...partners].map((p, i) => (
            <div className={styles.chip} key={i}>
              <div className={styles.chipIco}>{p.ico}</div>
              <span className={styles.chipName}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
