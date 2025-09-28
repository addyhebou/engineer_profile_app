'use client';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>// home</li>
            <li className={styles.navItem}>// expertise</li>
            <li className={styles.navItem}>// work</li>
            <li className={styles.navItem}>// experience</li>
            <li className={styles.navItem}>// contact</li>
          </ul>
        </nav>

        <main className={styles.main}>
          <div className={styles.homePageBanner}>
            <h1>Addy Hebou</h1>
            <h3>software engineer, front end & app developer.</h3>
          </div>
        </main>

        <div className={styles.asFeaturedInBlock}>
          <h3>As featured in</h3>
          <div className={styles.featuredInLogos}>
            <Image
              src="/featured_in_photos/snapchat_logo.svg"
              alt="Snapchat"
              width={225}
              height={75}
            />
            <Image
              src="/featured_in_photos/us_dept_energy.svg"
              alt="US Department of Energy"
              width={225}
              height={75}
            />
            <Image
              src="/featured_in_photos/rolling_stone.svg"
              alt="Rolling Stone"
              width={225}
              height={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
