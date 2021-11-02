import React from 'react';
import styles from './Card.module.css';
import Button from 'components/Button/Button';

export default function Card({ cardData }) {
  const getCardTopContainer = () => {
    switch (cardData.type) {
      case 'bidding':
        return (
          <>
            {cardData.name}{' '}
            <span className={styles.card_metaimg2}>
              {' '}
              <img src={cardData.logo} />
            </span>
          </>
        );

      default:
        return <> </>;
    }
  };
  const getBottomContainer = () => {
    switch (cardData.type) {
      case 'bidding':
        return (
          <table>
            <tr>
              <td>Highest bid</td>
              <td>
                <span className={styles.red}>{cardData.highestBid} ETH</span>
              </td>
            </tr>
            <tr>
              <td className={styles.text_right}>{cardData.number}</td>
              <td className={styles.text_right}>
                <span className={styles.gray}>{cardData.likes}</span>
              </td>
            </tr>
          </table>
        );
      case 'offer':
        return (
          <table>
            <tr>
              <td>Highest Offer</td>
              <td className={styles.text_right}>{cardData.number}</td>
            </tr>
            <tr>
              <td>
                <span className={styles.red}>{cardData.highestBid} ETH</span>
              </td>
              <td className={styles.text_right}>
                <span className={styles.gray}>{cardData.likes}</span>
              </td>
            </tr>
          </table>
        );
      default:
        return (
          <table>
            <tr>
              <td>Highest bid</td>
              <td>
                <span className={styles.red}>{cardData.highestBid} ETH</span>
              </td>
              <td className={styles.text_right}>{cardData.number}</td>
            </tr>
            <tr>
              <td>Buy Now</td>
              <td>
                <span className={styles.orange}>{cardData.buyNow} ETH</span>
              </td>
              <td className={styles.text_right}>
                <span className={styles.gray}>
                  <img src="/../images/like.svg" />
                  {cardData.likes}
                </span>
              </td>
            </tr>
          </table>
        );
    }
  };
  const renderCardContent = () => {
    if (cardData.type === 'bidding') {
      return (
        <>
          {cardData.showTimer && (
            <div className={styles.card_timer}> 23h : 24m : 50s Left </div>
          )}
          <div className={styles.card_content}>
            <div className={styles.card_metainfo}>
              <div className={styles.card_metaleft}>
                {cardData.avatars.map((singleAvatarData) => {
                  return (
                    <span className={styles.card_metaimgmain}>
                      <span class={` card_img_bid ${styles.card_metaimg}`}>
                        <img src={singleAvatarData.avatarUrl} />
                      </span>
                    </span>
                  );
                })}
                <span className={styles.card_metacontent}>
                  {' '}
                  {getCardTopContainer()}
                </span>
              </div>

              <div className={styles.card_metaright}>
                {cardData.views} Views
              </div>
            </div>
            <h2>{cardData.title} </h2>
            <table>
              <tr>
                <td>
                  <span className={styles.gray}>Highest bid</span>
                </td>
                <td>
                  <span className={styles.orange}>
                    {cardData.highestBid} ETH
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.text_right}>{cardData.number}</td>

                <td className={styles.text_right}>
                  <span className={styles.gray}>
                    <img src="/../images/like.svg" />
                    {cardData.likes}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </>
      );
    }
    return (
      <div className={styles.card_content}>
        <div className={styles.card_metainfo}>
          <div className={styles.card_metaleft}>
            {cardData.avatars.map((singleAvatarData) => {
              return (
                <span className={styles.card_metaimgmain}>
                  <span className={styles.card_metaimg}>
                    <img src={singleAvatarData.avatarUrl} />
                  </span>
                  <img
                    className={styles.card_social}
                    src="/../images/youtube.svg"
                  />
                </span>
              );
            })}
          </div>
          {getCardTopContainer()}
          <div className={styles.card_metaright}>{cardData.views} Views</div>
        </div>
        <h2>{cardData.title} </h2>
        {getBottomContainer()}
      </div>
    );
  };
  return (
    <div class={` card_main ${styles.card_main}`}>
      <div className={styles.card_inner}>
        <div class={` card_img ${styles.card_img}`}>
          <img src={cardData.background} />
        </div>

        {renderCardContent()}

        {cardData.buttonName && (
          <Button
            type="button_primary"
            isFixed={true}
            name="Place Bid"
            transition="inline"
            icon="/../images/button-arrow.svg"
          />
        )}
      </div>
    </div>
  );
}
