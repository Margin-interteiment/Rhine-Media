import { trafficSources } from '../../../data/site';
import styles from './TrafficSources.module.css';

export default function TrafficSources() {
  return (
    <section className={`section ${styles.traffic}`} id="traffic">
      <div className="container">
        <div className="sec-center" data-a="up">
          <div className="eyebrow">Traffic Sources We Master</div>
          <h2 className="sec-title">
            Every Major <span className="text-blue">Channel</span>
          </h2>
          <p className="sec-sub">Full-stack traffic expertise across paid, native, push and programmatic channels worldwide.</p>
        </div>

        <div className={styles.grid}>
          {trafficSources.map((s, i) => (
            <div className={styles.card} data-a="scale" data-d={(i % 4) + 1} key={s.name}>
              <div className={styles.ico}>{s.ico}</div>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.sub}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
