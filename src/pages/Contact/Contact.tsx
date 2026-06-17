import Layout from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import Faq from '../../components/contact/Faq';
import styles from './Contact.module.css';

export default function Contact() {
  usePageTitle(
    'Contact Us — Rhine Media',
    'Get in touch with Rhine Media — performance media buying agency. Start a cooperation or ask any question.',
  );

  return (
    <Layout navVariant="contact">
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow" data-a="up">
            Get in Touch
          </div>
          <h1 data-a="up" data-d="1">
            Contact <span className="text-gold">Rhine Media</span>
          </h1>
          <p data-a="up" data-d="2">
            Ready to start? Have a question? Our team responds within 24 hours.
          </p>
        </div>
      </header>

      <main className="page-body" id="contact-form">
        <div className="container">
          <div className={styles.layout}>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>

      <Faq />
    </Layout>
  );
}
