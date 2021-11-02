import React, { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import VideoCard from 'components/VideoCard/VideoCard';
import Card from 'components/Card/Card';
import styles from './AuctionPage.module.css';
import NavigationBar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

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

export default function AuctionPage() {
  const [openFilter, setFilterOpen] = useState(false);
  return (
    <>
      <NavigationBar />
      <div
        class={`${styles.live_auction_main} ${
          openFilter && styles.sidebaropen
        } `}
      >
        <div
        class={`${
          openFilter && styles.sidebaroverlay
        } `}
      > </div>
        {openFilter && <SideBar toggleSidebar={() => setFilterOpen(false)} />}

        <div class={`${styles.live_auction}`}>
          {!openFilter && (
            <div
              class={`${styles.filter_toggle_btn}`}
              onClick={() => setFilterOpen(true)}
            >
              <img src="/../images/sidebar/sidebar-arrow.svg" /> Filter
            </div>
          )}
          <VideoCard />
          <div class={`${styles.live_auction}`}></div>
          <h2 class={`heading-2 d-flex aligncenter justifyc mb20`}>
            {' '}
            Live Auctions <img class="ml15" src="/images/live.svg" />{' '}
          </h2>

          <div class={`${styles.live_auction_contionar}`}>
            <div class={`auction_grid ${styles.auction_grid}`}>
              {data.map((singleCard, index) => {
                return <Card key={index} cardData={singleCard} />;
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
