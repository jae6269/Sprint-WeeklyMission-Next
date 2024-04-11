import Link from 'next/link';
import styles from '../styles/footer.module.css';
import FacebookLogo from '@/public/svgs/facebookLogo.svg';
import TwiterLogo from '@/public/svgs/twitterLogo.svg';
import YoutubeLogo from '@/public/svgs/youtubeLogo.svg';
import InstagramLogo from '@/public/svgs/instagramLogo.svg';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.footerBar}>
        <div className={styles.left}>©codeit - 2023</div>
        <div className={styles.center}>
          <Link className={styles.centerLink} href="/privacy">
            Privacy Policy
          </Link>
          <Link className={styles.centerLink} href="/faq">
            FAQ
          </Link>
        </div>
        <div className={styles.right}>
          <Link className={styles.rightLinks} href="https://www.facebook.com">
            <FacebookLogo />
          </Link>
          <Link className={styles.rightLinks} href="https://twitter.com">
            <TwiterLogo />
          </Link>
          <Link className={styles.rightLinks} href="https://www.youtube.com">
            <YoutubeLogo />
          </Link>
          <Link className={styles.rightLinks} href="https://www.instagram.com">
            <InstagramLogo />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
