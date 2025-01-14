import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';
import '@fontsource/poppins';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const imgArray = [
    { img: '/1.jpg' },
    { img: '/2.jpg' },
    { img: '/3.jpg' },
    { img: '/4.jpg' },
  ];
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 800); // Délai pour l'animation
  }, []);

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Menu />
        <div className={styles.bodyHome}>
          {/* Texte à gauche */}
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              <a
                href="https://nextjs.org"
                className={`${styles.developpeur} ${isAnimated ? styles.animated : ''}`}
              >
                Développeur FullStack*
              </a>{' '}
              créatif et engagé pour vos projets.
              <br />
              <span
                className={`${styles.developpeur} ${isAnimated ? styles.animated : ''} ${styles.clément}`}
              >
                *Clément NOUET,
              </span>
            </h1>
            <button className={styles.buttonHome}>Disponible dès maintenant</button>
          </div>

          {/* Swiper à droite */}
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Autoplay]}
              direction={'horizontal'}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {imgArray.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.swiperSlide}>
                    <img
                      src={data.img}
                      alt={`Slide ${index + 1}`}
                      style={{
                        width: '500px',
                        height: '500px',
                        objectFit: 'cover',
                        borderRadius: '800px',
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
