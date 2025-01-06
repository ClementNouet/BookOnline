import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';
import '@fontsource/poppins';

function Home() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Ajoute la classe `animated` après le chargement de la page
    setTimeout(() => {
      setIsAnimated(true);
    }, 800); // Délai pour s'assurer que l'animation démarre
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <Menu />
        <div className={styles.bodyHome}>
          <div>
            <h1 className={styles.title}>
              <a
                href="https://nextjs.org"
                className={`${styles.developpeur} ${
                  isAnimated ? styles.animated : ''
                }`}
              >
                Développeur FullStack
              </a>{' '}
              créatif et engagé pour vos projets.
            </h1>
            <button className={styles.buttonHome}>Disponible dès maintenant</button>
          </div>
          <img />
        </div>
      </main>
    </div>
  );
}

export default Home;
