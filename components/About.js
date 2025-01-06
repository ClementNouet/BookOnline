import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';
import '@fontsource/poppins';

function About() {

  return (
    <div>
      <main className={styles.main}>
        <Menu />
    </main>
    </div>
  );
}

export default About;
