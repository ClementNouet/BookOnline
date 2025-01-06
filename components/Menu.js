import styles from '../styles/Menu.module.css';
import '@fontsource/dm-serif-text'; 

function Menu() {
  return (
    <div className={styles.main}>
        <ul className={styles.menu}>
            <li>Home</li>
            <li>Projets</li>
            <li>Qui suis-je?</li>
        </ul>
    </div>
  );
}

export default Menu;
