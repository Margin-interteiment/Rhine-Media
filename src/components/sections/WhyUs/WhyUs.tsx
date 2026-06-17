import { checkItems, featureCards } from '../../../data/site';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={`section ${styles.features}`} id="why-us">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className="eyebrow" data-a="left">
              Why Choose Rhine Media
            </div>
            <h2 className="sec-title" data-a="left" data-d="1">
              Precision. Scale.
              <br />
              <span className="text-gold">Performance.</span>
            </h2>
            <p className="sec-sub" data-a="left" data-d="2">
              We're not a media network — we're your in-house buying team. Deep expertise, real accountability and
              transparent reporting on every dollar spent.
            </p>

            <div className={styles.checkList} style={{ marginTop: 36 }}>
              {checkItems.map((item, i) => (
                <div className={styles.checkItem} data-a="left" data-d={i + 2} key={item.title}>
                  <div className={styles.chk}>✓</div>
                  <div className={styles.chkBody}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cards} data-a="right" data-d="2">
            {featureCards.map((card) => (
              <div className={styles.card} key={card.title}>
                <div className={styles.cardIco}>{card.ico}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
