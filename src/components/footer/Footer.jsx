import React from 'react';
import styles from './Footer.module.css'; // Import CSS Modules file

function Footer() {
  return (
    <footer className={styles.footerContainer}> {/* Use styles from CSS Modules */}
      <p>This is the footer. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
