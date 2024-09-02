'use client';
import { useState } from 'react';
import styles from './page.module.css';

import Header from '@/components/Header';
import SectionBanner from '@/components/SectionBanner';
import SectionExperienceWork from '@/components/SectionExperienceWork';
import Footer from '@/components/Footer';

export default function Home() {
  const [ehTemaEscuro, setTemaEscuro] = useState(false);

  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro);
    console.log(setTemaEscuro);
  };

  return (
    <div className={styles.main}>
      <Header acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <main>
        <SectionBanner ehTemaEscuro={ehTemaEscuro} />
        <SectionExperienceWork ehTemaEscuro={ehTemaEscuro} />
      </main>
      <Footer ehTemaEscuro={ehTemaEscuro} />
    </div>

  );
}
