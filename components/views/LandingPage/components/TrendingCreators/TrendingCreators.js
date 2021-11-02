import React from 'react';
import styles from './TrendingCreators.module.css';
import FollowCard from 'components/FollowCard/FollowCard';
import Slider from 'react-slick';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1364,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerPadding: '60px',
        centerMode: true,
      },
    },
  ],
};

const TABS = {
  YOUTUBE: 'youtube',
  TIKTOK: 'tiktok',
};
export default function TrendingCreators() {
  const [value, setValue] = React.useState(TABS.YOUTUBE);
  const data = {
    youtube: [
      {
        name: 'Vanoss Gaming',
        logo: '/../images/card-img1.png',
        background: '/../images/tranding1.png',
        followers: '10K',
        activeAuction: '25',
      },
      {
        name: 'Unbox Therapy',
        logo: '/../images/card-img2.png',
        background: '/../images/tranding2.png',
        followers: '10K',
        activeAuction: '25',
      },
      {
        name: 'Asap SCIENCE',
        logo: '/../images/card-img1.png',
        background: '/../images/tranding3.png',
        followers: '10K',
        activeAuction: '25',
      },
      {
        name: 'Vanoss Gaming',
        logo: '/../images/card-img2.png',
        background: '/../images/tranding4.png',
        followers: '10K',
        activeAuction: '25',
      },
      {
        name: 'Vanoss Gaming',
        logo: '/../images/card-img1.png',
        background: '/../images/tranding1.png',
        followers: '10K',
        activeAuction: '25',
      },
    ],
    tiktok: [
      {
        name: 'Vanossasasas Gaming',
        logo: '/../images/card-img2.png',
        background: '/../images/tranding2.png',
        followers: '10K',
        activeAuction: '25',
      },
    ],
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderCards = () => {
    return data[value].map((singleCard, index) => {
      return <FollowCard key={index} cardData={singleCard} />;
    });
  };

  return (
    <div className="p8 mbp">
      <div className="container">
        <div class="d-flex justifyc aligncenter mb5">
          <h2 className={`heading mr15`}>Trending Creators</h2>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="trending-creators"
            className={`mat-tabs`}
          >
            <Tab
              value={TABS.YOUTUBE}
              className={`mat-tabs-button`}
              icon={
                <img
                  src="/images/youtube.svg"
                  alt=""
                  width="25"
                  height="auto"
                />
              }
              aria-label={TABS.YOUTUBE}
            />
            <Tab
              value={TABS.TIKTOK}
              className={`mat-tabs-button`}
              icon={
                <img
                  src="/images/tik-tok.svg"
                  alt=""
                  width="25"
                  height="auto"
                />
              }
              aria-label={TABS.TIKTOK}
            />
          </Tabs>
        </div>

        <div class={`mb-1 trandingc-slider`}>
          <Slider {...settings}>{renderCards()}</Slider>
        </div>
      </div>
    </div>
  );
}
