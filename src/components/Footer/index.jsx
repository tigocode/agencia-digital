import Image from 'next/image';
import styles from './Footer.module.css';

import Logo from '../../../public/logo.png';
import Face from '../../../public/facebook.png';
import Twitter from '../../../public/twitter.png';
import Linkedin from '../../../public/linkedin.png';
import Dribble from '../../../public/dribble.png';
import Behance from '../../../public/behance.png';
import Google from '../../../public/google.png';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_content}>
        <div className={styles.text}>
          <Image src={Logo} />
          <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.</p>
        </div>
        <div className={styles.redes}>
          <Image src={Face} />
          <Image src={Twitter} />
          <Image src={Linkedin} />
          <Image src={Dribble} />
          <Image src={Behance} />
          <Image src={Google} />
        </div>
      </div>
      <div className={styles.copy}>
        <p>Copyright 2022 <span>Tiago Dantas</span></p>
      </div>
    </footer>
  );
}
