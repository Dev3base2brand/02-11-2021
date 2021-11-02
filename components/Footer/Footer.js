import styles from './Footer.module.css';
import Button from 'components/Button/Button';
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footerTop}>
            <div className={styles.column}>
              <div className={styles.title}>Useful Links</div>
              <div className={styles.left}>
                <a href="">Explore</a>
                <a href="">Auction</a>
                <a href="">Stats</a>
              </div>
              <div className={styles.left}>
                <a href="">Marketplace</a>
                <a href="">Real-time</a>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>Legal</div>
              <a href="">Terms & Conditions</a>
              <a href="">Privacy Policy</a>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>Help</div>
              <a href="">Support</a>
              <a href="">Contact</a>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>Our Newsletter</div>
              <div class={`d-flex aligncenter ${styles.footernewslater}`}>
                <span class={` ${styles.inputwrap}`}>
                  <input type="text" placeholder="Email" />
                </span>

                <Button notch="outline_leftskew" name="Send" />
              </div>
            </div>
          </div>

          <div class={`d-flex aligncenter justifysb ${styles.footerCenter}`}>
            <div class={`flex ${styles.left}`}>
              <img src="/../images/globe.svg" width="15" class="mr5" />
              English
            </div>

            <div className={styles.right}>
              <div class="d-flex aligncenter justifyend">
                Follow & Stay Updated {' '}
                <img
                  src="/images/footer/emoticon.svg"
                  alt=""
                  width="15"
                  height="15"
                  class={`${styles.smiley}`}
                />
                <ul>
                  <li>
                    <a href=""> <img
                  src="/images/footer/icon_email.svg"
                  alt=""
                  className={styles.socialicon}
                />
                 <img
                  src="/images/footer/hover1.svg"
                  alt=""
                  className={styles.hovericon}
                />
                
                </a>
                  </li>
                  <li>
                    <a href="">   
                <img
                  src="/images/footer/icon_twitter.svg"
                  alt=""
                  className={styles.socialicontwit}
                />
                <img
                  src="/images/footer/hover2.svg"
                  alt=""
                  className={styles.hovericontwit}
                />
                </a>
                  </li>
                  <li>
                    <a href="">   
                    <img
                  src="/images/footer/icon_3.svg"
                  alt=""
                  className={styles.socialicon}
                />
                 <img
                  src="/images/footer/hover3.svg"
                  alt=""
                  className={styles.hovericon}
                />
                </a>
                  </li>
                  </ul>
                {' '}
                &nbsp;
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            @nftbook.io Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
