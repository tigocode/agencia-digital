import Image from 'next/image';
import styles from './page.module.css';

import Header from '@/components/Header';
import SectionBanner from '@/components/SectionBanner';
import SectionExperienceWork from '@/components/SectionExperienceWork';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SectionBanner />
      <SectionExperienceWork />
      <Footer />
    </main>
  );
}
