import { useState } from 'react';
import { faqs } from '../../../data/site';
import styles from './Faq.module.css';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="sec-center" data-a="up">
          <div className="eyebrow">FAQ</div>
          <h2 className="sec-title">
            Common <span className="text-gold">Questions</span>
          </h2>
          <p className="sec-sub">Everything you need to know before starting a cooperation with Rhine Media.</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div className={`${styles.item}${openFaq === i ? ` ${styles.open}` : ''}`} data-a="up" data-d={(i % 6) + 1} key={i}>
              <button
                className={styles.q}
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className={styles.arrow}>▾</span>
              </button>
              <div className={styles.answer}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
