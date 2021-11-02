import Explore from 'components/views/LandingPage/components/Explore/Explore';
import React from 'react';
import styles from './activity.module.css';
import ActivityHeroSection from './ActivityHeroSection';

function ActivityComponent() {
  return (
    <div>
      <ActivityHeroSection title={'Activity'} />
      <Explore
        title={'Activity'}
        showFilterData={false}
        showExploreData={false}
      />

      <div style={{marginBottom: '50px'}}>
        <div className={styles.headWrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
            </div>
            <div className={styles.content}>
              <p>NFT </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
            </div>
            <div className={styles.content}>
              <p>Purched By </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
            </div>
            <div className={styles.content}>
              <p>Purched From</p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              EtherScan
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
            </div>
            <div className={styles.content}>
              <p>Price </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>Date </p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/youtube.svg" style={{marginLeft:'10px'}}  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.ImageTwo}>
              <img src="/../images/img-1.PNG" />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" alt="" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            </div>
            <div className={styles.content}>
              <p>Lorem ipsum </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <a href="https://www.lipsum.com/">Lorem ipsum</a>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.ImageOne}>
              <img src="/../images/avatar.PNG"  />
              {/* <img src={"https://picsum.photos/seed/picsum/200/300"} /> */}
            </div>
            <div className={styles.content}>
              <p>0.145 ETH </p>
            </div>
          </div>
          <div className={styles.CardOne}>
            <div className={styles.content}>
              <p>43 Seconds </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityComponent;
