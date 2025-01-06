import styles from '../styles/Menu.module.css';

function Menu() {
  return (
    <div>
      <main className={styles.main}>
        <img src=""/>
        <ul classNames={styles.menu}>
            <li>Home</li>
            <li>Projets</li>
            <li>Qui suis-je?</li>
        </ul>
      </main>
    </div>
  );
}

export default Menu;
