import { verticals } from '../../../data/site';
import styles from './Verticals.module.css';

export default function Verticals() {
  return (
    <section className={`section ${styles.verticals}`} id="verticals">
      <div className="container">
        <div className="sec-center" data-a="up">
          <div className="eyebrow">Our Verticals</div>
          <h2 className="sec-title">
            Niches We <span className="text-gold">Dominate</span>
          </h2>
          <p className="sec-sub">Deep expertise across the highest-performing verticals in performance marketing.</p>
        </div>

        <div className={styles.grid}>
          {verticals.map((v, i) => (
            <div className={styles.card} data-a="up" data-d={(i % 4) + 1} key={v.name}>
              <span className={styles.emoji}>{v.emoji}</span>
              <h3 className={styles.name}>{v.name}</h3>
              <p className={styles.desc}>{v.desc}</p>
              <span className={styles.pill}>{v.pill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
