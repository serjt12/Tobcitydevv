import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 &middot; JAS &middot; DOT Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@tobcity" target="_Blank">@tobcity</a></p>
    </div>
  );
}

export default Footer;
