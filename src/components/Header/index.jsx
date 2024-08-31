import Image from 'next/image';
import styles from './Header.module.css';
import Logo from '../../../public/logo.png';
import Sun from '../../../public/sun.png';
import Moon from '../../../public/moon.png';


export default function Header() {
  return (
    <header className={styles.container}>
      <Image src={Logo} alt='Logotipo'/>
      <button>
        <Image src={Sun} alt='botao' />
      </button>
    </header>
  );
}
