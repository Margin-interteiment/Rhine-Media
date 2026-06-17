import { stats } from '../../../data/site';
import styles from './StatsBand.module.css';

export default function StatsBand() {
  return (
    <div className={styles.band}>
      <div className="container">
        <div className={styles.row}>
          {stats.map((stat, i) => (
            <div className={styles.cell} data-a="up" data-d={i === 0 ? undefined : i + 1} key={stat.label}>
              <div className={styles.num}>{stat.num}</div>
              <div className={styles.lbl}>{stat.label}</div>
              <div className={styles.sub}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
