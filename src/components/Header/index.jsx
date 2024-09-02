import Image from 'next/image';
import styles from './Header.module.css';
import Logo from '../../../public/logo.png';
import Sun from '../../../public/sun.png';
import Moon from '../../../public/moon.png';


export default function Header(props) {
  return (
    <header className={props.ehTemaEscuro ? `${styles.container} ${styles.dark}` : `${styles.container} ${styles.light}`}>
      <Image src={Logo} alt='Logotipo'/>
      <button onClick={props.acao_onclick} className={props.ehTemaEscuro ? styles.btn_dark : styles.btn_light}>
        <Image src={props.ehTemaEscuro ? Sun : Moon} alt='botao' />
      </button>
    </header>
  );
}
