import React from 'react';
import styles from './MyFooter.module.css'; // Assicurati che il percorso sia corretto

function MyFooter() {
  return (
    <footer className={styles.footer}>
      <p>Questo è il footer della mia applicazione.</p>
    </footer>
  );
}

export default MyFooter;
