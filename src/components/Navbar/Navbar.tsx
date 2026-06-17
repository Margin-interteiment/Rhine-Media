import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import Logo from '../Logo';
import styles from './Navbar.module.css';

export type NavVariant = 'default' | 'contact';

interface NavbarProps {
  variant?: NavVariant;
}

interface SectionLink {
  to: { pathname: string; hash: string };
  label: string;
}

const sectionLinks: SectionLink[] = [
  { to: { pathname: '/', hash: '#verticals' }, label: 'Verticals' },
  { to: { pathname: '/', hash: '#traffic' }, label: 'Traffic Sources' },
  { to: { pathname: '/', hash: '#partners' }, label: 'Partners' },
  { to: { pathname: '/', hash: '#why-us' }, label: 'Why Us' },
];

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Logo />

            <ul className={styles.links}>
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  style={variant === 'contact' ? { color: 'var(--gold-lt)' } : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className={styles.right}>
              {variant === 'contact' ? (
                <>
                  <Link to="/" className="btn btn-ghost">
                    Back to Home
                  </Link>
                  <Link to={{ pathname: '/contact', hash: '#contact-form' }} className="btn btn-primary">
                    Send Message
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/contact" className="btn btn-ghost">
                    Get in Touch
                  </Link>
                  <Link to="/contact" className="btn btn-primary">
                    Start Cooperation
                  </Link>
                </>
              )}
              <button className={styles.ham} aria-label="Open menu" onClick={() => setMenuOpen(true)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobMenu}${menuOpen ? ` ${styles.open}` : ''}`}>
        <span className={styles.mobClose} onClick={closeMenu}>
          ✕
        </span>
        {sectionLinks.map((link) => (
          <Link key={link.label} to={link.to} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        {variant === 'contact' ? (
          <Link
            to={{ pathname: '/contact', hash: '#contact-form' }}
            className="btn btn-primary"
            style={{ marginTop: 14 }}
            onClick={closeMenu}
          >
            Send Message
          </Link>
        ) : (
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 14 }} onClick={closeMenu}>
            Start Cooperation
          </Link>
        )}
      </div>
    </>
  );
}
