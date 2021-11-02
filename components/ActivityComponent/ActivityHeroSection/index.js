import React from 'react';
import styles from './activityHeroSection.module.css';
// import Card from 'components/Card/Card';
// import Slider from 'react-slick';
// import Button from 'components/Button/Button';

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '0px',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
};
export default function ActivityHeroSection({title}) {
//   let data = [
//     {
//       title: 'Chivalry 2 Funny Moments - Sending Our',
//       highestBid: '0.145',
//       buyNow: '@2.01',
//       views: '45.4K',
//       number: '#10/50',
//       background: '/../images/card-img.png',
//       avatars: [
//         {
//           avatarUrl: '/../images/card-img1.png',
//           name: 'Avatar',
//         },
//       ],
//       likes: '25k',
//     },
//     {
//       title: 'Chivalry 3 Funny Moments - Sending Our',
//       highestBid: '0.145',
//       buyNow: '@2.01',
//       views: '45.4K',
//       number: '#10/50',
//       background: '/../images/card-img.png',
//       avatars: [
//         {
//           avatarUrl: '/../images/card-img2.png',
//           name: 'Avatar',
//         },
//       ],
//       likes: '25k',
//     },
//     {
//       title: 'Chivalry 4 Funny Moments - Sending Our',
//       highestBid: '0.145',
//       buyNow: '@2.01',
//       views: '46.4K',
//       number: '#10/50',
//       background: '/../images/card-img.png',
//       avatars: [
//         {
//           avatarUrl: '/../images/card-img1.png',
//           name: 'Avatar',
//         },
//       ],
//       likes: '25k',
//     },
//   ];
  return (
    <div className={styles.hero_main}>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_wrappermain}>
          <div className={styles.hero_left}>
            <div>
              <h2>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
