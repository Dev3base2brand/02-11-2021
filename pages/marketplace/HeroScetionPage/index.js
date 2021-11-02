import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import React, { useEffect } from 'react';
import styles from './herosection.module.css';

function HeroScetionPage() {
  let data = [
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      views: '45.4K',
      number: '#10/50',
      background:
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
      type: 'bidding', //For bidding cards
      name: 'Vanoss Gaming',
      logo: '/../images/youtube.svg',
      showTimer: true,
      buttonName: 'Place Bid',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      views: '45.4K',
      number: '#10/50',
      background:
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
      type: 'bidding', //For bidding cards
      name: 'Vanoss Gaming',
      logo: '/../images/youtube.svg',
      showTimer: true,
      buttonName: 'Place Bid',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      views: '45.4K',
      number: '#10/50',
      background:
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
      type: 'bidding', //For bidding cards
      name: 'Vanoss Gaming',
      logo: '/../images/youtube.svg',
      showTimer: true,
      buttonName: 'Place Bid',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      views: '45.4K',
      number: '#10/50',
      background:
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
      type: 'bidding', //For bidding cards
      name: 'Vanoss Gaming',
      logo: '/../images/youtube.svg',
      showTimer: true,
      buttonName: 'Place Bid',
    },
  ];

  useEffect(() => {
    // Client-side-only code
    console.log('window---', window && window);
    window?.setInterval(function() {
      var elem = document.getElementById('rightCardData');
      elem.scrollTop = elem.scrollHeight;
      console.log('coming');


      var checkForNewDiv = function() {
        var lastDiv = document.querySelector("#rightCardData > div:last-child");
        var maindiv = document.querySelector("#rightCardData");
        var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
        var pageOffset = maindiv.offsetTop + maindiv.clientHeight;
      
        if (pageOffset > lastDivOffset - 10) {
          var newDiv = document.createElement("div");
          newDiv.innerHTML = "my awesome new div";
          document.getElementById("rightCardData").appendChild(newDiv);
          checkForNewDiv();
        }
      };
    }, 1000);


})

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.HeroSection}>
          <div className={styles.LeftCol}>
            <h1 className={styles.h1}>Market Place</h1>
            <div className={styles.HeroButton}>
              {/* <button className={styles.btn}>All</button>
              <button className={styles.btn}>Buy Now</button>
              <button className={styles.btn}>On Auction</button> */}
              <Button
                type="button_white"
                name="All"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
              <Button
                type="button_white"
                name="Buy Now"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
              <Button
                type="button_white"
                name="On Auction"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
              <Button
                type="button_white"
                name="Place Bid"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
            </div>
            <div className={styles.HeroButton}>
              <Button
                type="button_white"
                name="Offers"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
              <Button
                type="button_white"
                name="New"
                transition="inline"
                // icon="/../images/button-arrow.svg"
              />
              {/* <button className={styles.btn}>All</button>
              <button className={styles.btn}>Buy Now</button> */}
            </div>
          </div>
          <div className={styles.RightCol}>
            <div
              className={styles.CardWrapper}
              id="rightCardData">
              {data.map((singleCard, index) => {
                return <Card key={index} cardData={singleCard} width={2} />;
              })}
              {/* <div className={styles.card}>
                <img
                  src="./images/hero.PNG"
                  className={styles.img}
                  style={{ height: 100 }}
                />
              </div>
              <div className={styles.card2}>
                <div className={styles.Card2Content}>
                  <div className={styles.Card2Col}>
                    <img src="./images/icon.PNG" />
                  </div>
                  <div className={styles.Card2Col}>
                    <p> 45.5k Views</p>
                  </div>
                </div>
                <div
                  className={styles.Card2Col}
                  style={{ marginTop: '-21px', textAlign: 'center' }}>
                  <p> Lorem ipsum dolor sit.</p>
                </div>
                <div
                  className={styles.Card2Content}
                  style={{ marginTop: '-20px' }}>
                  <div className={styles.Card2Col}>
                    <p> Highest bid</p>
                  </div>
                  <div className={styles.Card2Col}>
                    <p style={{ color: 'red' }}> 0.145 ETH</p>
                  </div>
                  <div className={styles.Card2Col}>
                    <p> #10/50</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    src="./images/hero.PNG"
                    className={styles.img}
                    style={{ height: 100 }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.CardWrapper}>
              <div className={styles.card}>
                <img
                  src="./images/hero.PNG"
                  className={styles.img}
                  style={{ height: 100 }}
                />
              </div>
              <div className={styles.card2}>
                <div className={styles.Card2Content}>
                  <div className={styles.Card2Col}>
                    <img src="./images/icon.PNG" />
                  </div>
                  <div className={styles.Card2Col}>
                    <p> 45.5k Views</p>
                  </div>
                </div>
                <div
                  className={styles.Card2Col}
                  style={{ marginTop: '-21px', textAlign: 'center' }}>
                  <p> Lorem ipsum dolor sit.</p>
                </div>
                <div
                  className={styles.Card2Content}
                  style={{ marginTop: '-20px' }}>
                  <div className={styles.Card2Col}>
                    <p> Highest bid</p>
                  </div>
                  <div className={styles.Card2Col}>
                    <p style={{ color: 'red' }}> 0.145 ETH</p>
                  </div>
                  <div className={styles.Card2Col}>
                    <p> #10/50</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    src="./images/hero.PNG"
                    className={styles.img}
                    style={{ height: 100 }}
                  />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroScetionPage;
