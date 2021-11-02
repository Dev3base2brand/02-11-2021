import React from 'react';
import styles from './UserMiniCard.module.css';

export default function UserMiniCard({ userData, index }) {
  return (
    <div class={`i-flex aligncenter ${styles.toplist_boxitem}`}>
      <h3 class={`${styles.toplist_no}`}>{index + 1}.</h3>
      <div class={`${styles.toplist_img}`}>
        <img src={userData.logo} />
      </div>
      <div class={`${styles.toplist_content}`}>
        <h4>{userData.name}</h4>
        <p>{userData.amount} ETH</p>
      </div>
    </div>
  );
}
