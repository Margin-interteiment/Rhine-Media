import type { ReactNode } from 'react';
import Layout from '../Layout';
import styles from './LegalArticle.module.css';

interface LegalArticleProps {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}

export default function LegalArticle({ title, updated, intro, children }: LegalArticleProps) {
  return (
    <Layout>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1>{title}</h1>
          <p>{updated}</p>
        </div>
      </header>

      <main className="page-body">
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.meta}>{intro}</div>
            {children}
          </div>
        </div>
      </main>
    </Layout>
  );
}
