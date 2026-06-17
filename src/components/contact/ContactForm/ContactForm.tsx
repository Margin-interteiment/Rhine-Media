import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    let valid = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]').forEach((field) => {
      const ok = field.type === 'checkbox' ? (field as HTMLInputElement).checked : field.value.trim() !== '';
      field.style.borderColor = ok ? '' : '#e87060';
      if (!ok) valid = false;
    });
    if (!valid) return;

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className={styles.card} data-a="right">
      <h3>Send Us a Message</h3>

      <form ref={formRef} noValidate onSubmit={handleSubmit}>
        <div className={styles.row2}>
          <div className={styles.fg}>
            <label htmlFor="fname">First Name *</label>
            <input type="text" id="fname" name="fname" placeholder="John" required />
          </div>
          <div className={styles.fg}>
            <label htmlFor="lname">Last Name *</label>
            <input type="text" id="lname" name="lname" placeholder="Smith" required />
          </div>
        </div>

        <div className={styles.fg}>
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="john@company.com" required />
        </div>

        <div className={styles.fg}>
          <label htmlFor="company">Company / Brand</label>
          <input type="text" id="company" name="company" placeholder="Your company name" />
        </div>

        <div className={styles.fg}>
          <label htmlFor="telegram">Telegram / Skype Handle</label>
          <input type="text" id="telegram" name="telegram" placeholder="@yourusername" />
        </div>

        <div className={styles.fg}>
          <label htmlFor="vertical">Vertical / Niche *</label>
          <select id="vertical" name="vertical" required defaultValue="">
            <option value="" disabled>
              Select a vertical…
            </option>
            <option value="dating">Dating</option>
            <option value="nutra">Nutra / Health &amp; Beauty</option>
            <option value="gambling">Gambling / Casino</option>
            <option value="igaming">iGaming / Betting</option>
            <option value="sweepstakes">Sweepstakes</option>
            <option value="adult">Adult</option>
            <option value="crypto">Crypto Offers</option>
            <option value="mainstream">Mainstream / Other</option>
          </select>
        </div>

        <div className={styles.fg}>
          <label htmlFor="budget">Monthly Budget (USD)</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>
              Select budget range…
            </option>
            <option value="under5k">Under $5,000</option>
            <option value="5k-20k">$5,000 – $20,000</option>
            <option value="20k-50k">$20,000 – $50,000</option>
            <option value="50k-100k">$50,000 – $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>

        <div className={styles.fg}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…"
            required
          ></textarea>
        </div>

        <div className={styles.fg} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 28 }}>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            style={{ width: 'auto', marginTop: 3, flexShrink: 0, accentColor: 'var(--gold)' }}
            required
          />
          <label
            htmlFor="consent"
            style={{ fontSize: '0.8rem', color: 'var(--t2)', fontWeight: 400, lineHeight: 1.6 }}
          >
            I agree to the{' '}
            <Link to="/privacy-policy" style={{ color: 'var(--gold-lt)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" style={{ color: 'var(--gold-lt)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            . I consent to Rhine Media processing my data to respond to this enquiry.
          </label>
        </div>

        {!sent && (
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Message'}
            {!sending && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 7h12M7.5 1.5L13 7l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        )}

        <div className={`${styles.success}${sent ? ` ${styles.show}` : ''}`}>
          ✅ &nbsp;Your message has been sent! We'll get back to you within 2–4 business hours.
        </div>
      </form>
    </div>
  );
}
