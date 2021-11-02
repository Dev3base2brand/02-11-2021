import React from 'react';
import styles from './Explore.module.css';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import _ from 'lodash';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Filter from '../Filter/Filter';
const data = {
  youtube: [
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
      views: '45.4K',
      number: '#10/50',
      background: '/../images/cardoffer.png',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
      views: '45.4K',
      number: '#10/50',
      background: '/../images/cardoffer.png',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '2.145',
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
      type: 'offer',
      buttonName: 'Make Offer',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '2.145',
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
      type: 'offer',
      buttonName: 'Make Offer',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
  ],
  tiktok: [
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
      views: '45.4K',
      number: '#10/50',
      background: '/../images/cardoffer.png',
      avatars: [
        {
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          name: 'Avatar',
        },
      ],
      likes: '25k',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '2.145',
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
      type: 'offer',
      buttonName: 'Make Offer',
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
    {
      title: 'Chivalry 2 Funny Moments - Sending Our',
      highestBid: '0.145',
      buyNow: '@2.01',
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
    },
  ],
};
const TABS = {
  YOUTUBE: 'youtube',
  TIKTOK: 'tiktok',
};

export default function Explore({ title, showFilterData, showExploreData }) {
  const [value, setValue] = React.useState(TABS.TIKTOK);
  const [showFilter, toggleFilter] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTabs = () => {
    return (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="trending-creators"
        className={`mat-tabs mat-tabss4`}>
        <Tab
          value={TABS.YOUTUBE}
          label="Youtube"
          icon={
            <img src="/images/youtube.svg" alt="" width="25" height="auto" />
          }
          aria-label={TABS.YOUTUBE}
          className={`mat-tabs-button mat-tabs-s4`}
        />
        <Tab
          value={TABS.TIKTOK}
          label="Tiktok"
          icon={
            <img src="/images/tik-tok.svg" alt="" width="25" height="auto" />
          }
          aria-label={TABS.TIKTOK}
          className={`mat-tabs-button mat-tabs-s4`}
        />
      </Tabs>
    );
  };
  return (
    <div class={` ${styles.explormain}`}>
      <div class={` mb3 ${styles.explorheading}`}>
        <div class="container">
          <div class={` d-flex aligncenter justifysb ${styles.expolawraper}`}>
            <h2 class={`heading ${styles.explor_text}`}> {title}</h2>
            <div class={` ${styles.explordropdown}`}>{renderTabs()}</div>
            <div class={` ${styles.explorfilter}`}>
              {showFilterData && (
                <button
                  class={` ${styles.filterbtn}`}
                  onClick={() => toggleFilter(!showFilter)}>
                  <img src="/../images/filter.svg" /> Filter & Sort
                </button>
              )}
            </div>
          </div>

          {showFilter && <Filter />}
        </div>
      </div>
      {showExploreData && (
        <>
          <div class="container">
            <div class={`explore_grid  ${styles.explore_grid}`}>
              {_.map(data[value], function (singleCard, index) {
                return <Card key={index} cardData={singleCard} />;
              })}
            </div>
          </div>
          <div class="text-center p5 mbp">
            <Button
              type="button_secondary"
              name="Load More"
              transition="inline"
            />
          </div>
        </>
      )}
    </div>
  );
}
