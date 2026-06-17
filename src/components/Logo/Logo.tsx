import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.mark}>RM</div>
      <div className={styles.name}>
        Rhine <span>Media</span>
      </div>
    </Link>
  );
}
