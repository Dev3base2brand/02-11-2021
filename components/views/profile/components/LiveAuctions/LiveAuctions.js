import React from 'react';
import styles from './LiveAuctions.module.css';
import Card from 'components/Card/Card';
import Slider from 'react-slick';

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  centerPadding: 10,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToShow: 1,
        centerPadding: '20px',
        centerMode: true, 
      }
    }
  ]
};
export default function LiveAuctions() {
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

  return (
    <div className="p5 mbp">
      <div class="container-slider">
        <h2 class={`heading d-flex aligncenter justifyc mb5`}> Live Auctions <img class="ml15" src="/images/live.svg"/> </h2>
        <div class={`live-slider`}>
        </div>
     
      </div>
    </div>
  );
}
