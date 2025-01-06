import styles from '../styles/Home.module.css';
import Home from '../components/Menu'

function Home() {
  return (
    <div>
      <Menu/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
