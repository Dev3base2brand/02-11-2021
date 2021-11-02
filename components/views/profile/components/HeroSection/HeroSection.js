import React from 'react';
import styles from './HeroSection.module.css';


export default function HeroSection() {
  return (
    <section className={styles.profile}>
      <div className={styles.profile_banner}>
        <div className={styles.banner_img}>
          <img src="images/profile/futuristic-banner.jpg" />
        </div>
        <div className={styles.change_cover}>
          <a href="#">
            <img src="images/profile/camera.png" />
            Change Cover Image
          </a>
        </div>
        <div className={styles.social_icon}>
          <a href="#"><img src="images/profile/y1.png"/></a>
          <a href="#"><img src="images/profile/i1.png"/></a>
          <a href="#"><img src="images/profile/t1.png"/></a>
          <a href="#"><img src="images/profile/tw1.png"/></a>
        </div>
      </div>
     </section>
  );
}
