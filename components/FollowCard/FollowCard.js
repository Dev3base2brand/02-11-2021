import React from 'react';
import styles from './FollowCard.module.css';
import Button from 'components/Button/Button';

export default function FollowCard({ cardData }) {
  return (
    <div class={`text-center ${styles.follow_card}`}>
      <div class={`${styles.follow_img}`}>
        <img src={cardData.background} />
      </div>
      <div class={` ${styles.follow_userimg}`}>
        <img src={cardData.logo} />
      </div>
      <h2>{cardData.name}</h2>
      <p>
        {cardData.activeAuction} on auction | {cardData.followers} Followers
      </p>
      <Button
        type="button_secondary"
        name="+ Follow"
        icon="/../images/user-plus.svg"
      />
    </div>
  );
}
