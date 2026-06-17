import type { ReactNode } from 'react';
import Navbar, { type NavVariant } from '../Navbar';
import Footer from '../Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface LayoutProps {
  children: ReactNode;
  navVariant?: NavVariant;
}

export default function Layout({ children, navVariant = 'default' }: LayoutProps) {
  useScrollReveal();

  return (
    <>
      <Navbar variant={navVariant} />
      {children}
      <Footer />
    </>
  );
}
