import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.css';
import '@fontsource/dm-serif-text';

function Menu() {
  const router = useRouter(); 

  return (
    <div className={styles.main}>
      <ul className={styles.menu}>
        <li>
          <a
            href="/"
            className={router.pathname === '/' ? styles.active : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/projets"
            className={router.pathname === '/projets' ? styles.active : ''}
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={router.pathname === '/about' ? styles.active : ''}
          >
            Qui suis-je ?
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
