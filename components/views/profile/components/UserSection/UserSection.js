import React from 'react';
import styles from './UserSection.module.css';


export default function UserSection() {
  return (
    <div className={styles.user_section}>
      <div className={styles.user_inner}>
        <div className={styles.user_img}>
          <img src="images/profile/shap.png"/>
          <img className={styles.us_img} src="images/profile/j_user.png"/>
        </div>
        <div className={styles.user_content}>
          <div class={styles.user_title}>
            <span>J Olatunji</span>
            <img src="images/profile/check.png"/>
          </div>
          <div className={styles.follw_con}>
              <div className={styles.follwers}>
                <h3>5468</h3>
                <span>Followers</span>
              </div>
              <div className={styles.follwing}>
                <h3>10</h3>
                <span>Following</span>
              </div>
              <div className={styles.btn_profile}>
                <button className={styles.edit_btn}>Edit Profile</button>
                <button className={styles.edit_btn_s}>
                  <img src="images/profile/sher.png"/>
                </button>
                <button className={styles.edit_btn_w}>
                  <img src="images/profile/wallet.png"/>
                  <img className={styles.wallet_hover} src="images/profile/wallet_hover.png"/>
                </button>

              </div>
          </div>
          <p  className={styles.conten_text} >If you purchase my art, you will a chance to own an exclusive work from me. part of the income is always donated to charity!</p>
        </div>
      </div>
    </div>
  );
}

