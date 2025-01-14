import React from 'react';
import styles from '../styles/Project.module.css';
import Menu from '../components/Menu';
import '@fontsource/poppins';

function Projet() {
  const projectArray = [
    { img: '/1.jpg', title: 'TicketHack', langage: 'Javascript, HTML/CSS, MongoDB, Git', link: 'https://ticket-hack-frontend-jade.vercel.app/' },
    { img: '/2.jpg', title: 'HackTweet', langage: 'React, ExpressJS, MongoDB, Git', link: 'https://hackatweet-frontend-mu.vercel.app/' },
    { img: '/3.jpg', title: 'MyMoviz', langage: 'Javascript, HTML/CSS, API', link: 'https://mymoviz-frontend-nu-one.vercel.app/' },
    { img: '/4.jpg', title: 'OufWouf!', langage: 'React Native, ExpressJS, MongoDB, Git', link: 'https://github.com/orgs/OufWouf-Teammates/repositories' },
  ];

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Menu />
        <div className={styles.projectsContainer}>
          {projectArray.map((project, index) => (
            <a href={project.link}className={styles.projectCard} style={{ backgroundImage: `url(${project.img})` }}>
              <div
                key={index}
                className={styles.projectCard}
              >
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectLangage}>{project.langage}</p>
            </div>
          </div>

            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projet;
