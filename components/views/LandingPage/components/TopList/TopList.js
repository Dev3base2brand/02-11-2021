import React from 'react';
import styles from './TopList.module.css';
import Slider from 'react-slick';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UserMiniCard from 'components/UserMiniCard/UserMinicard';
import moment from 'moment';
import * as _ from 'lodash';
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  centerPadding: 10,
  rows: 3,
  slidesPerRow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesPerRow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesPerRow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesPerRow: 1,
        rows: 3,
        centerPadding: '50px',
        centerMode: true, 
      }
    }
  ]

};

const TYPE_TABS = {
  CREATORS: 'creators',
  BUYERS: 'buyers',
};

const TYPE_TIME = {
  T_24_HOURS: '24Hours',
  T_7_DAYS: '7Days',
  T_30_DAYS: '30Days',
};

const data = {
  creators: [
    {
      name: 'Vanoss Gaming',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Kristien Hancher',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Hannah Kim',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Asap Science',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Kio Cyr',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Mr Sucide Sheep',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Cynthia Parke',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Epic Meal Time',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Alyessa Farrugia',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Unbox Therapy',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
  ],
  buyers: [
    {
      name: 'Vanoss Gaming',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Kristien Hancher',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Hannah Kim',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Asap Science',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Kio Cyr',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(1, 'days'),
    },
    {
      name: 'Mr Sucide Sheep',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Cynthia Parke',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Epic Meal Time',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Alyessa Farrugia',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment().subtract(20, 'days'),
    },
    {
      name: 'Unbox Therapy',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Vivan Hicks',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
    {
      name: 'Montercat',
      logo: 'https://rb.gy/ovorsk',
      amount: '5.45',
      time: moment(),
    },
  ],
};

export default function TopList() {
  const [type, setType] = React.useState(TYPE_TABS.CREATORS);
  const [time, setTime] = React.useState(TYPE_TIME.T_24_HOURS);

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const handleTimeChange = (event, newValue) => {
    setTime(newValue);
  };
  const getTypeTabs = () => {
    return (
      
      <Tabs value={type} onChange={handleChange} aria-label="trending-creators" className={`mat-tabs mat-tabss2 mr15`}>
        <Tab
          value={TYPE_TABS.CREATORS}
          label="Creators"
          aria-label={TYPE_TABS.CREATORS}
          className={`mat-tabs-button mat-tabs-s2`}
        />
        <Tab
          value={TYPE_TABS.BUYERS}
          label="Buyers"
          aria-label={TYPE_TABS.BUYERS}
          className={`mat-tabs-button mat-tabs-s2`}
        />
      </Tabs>
    );
  };
  const getTimeTabs = () => {
    return (
      <Tabs
        value={time}
        onChange={handleTimeChange}
        aria-label="trending-creators"
        className={`mat-tabs mat-tabss2`}
      >
        <Tab
          value={TYPE_TIME.T_24_HOURS}
          label="24 Hours"
          aria-label={TYPE_TIME.T_24_HOURS}
          className={`mat-tabs-button mat-tabs-s3`}
        />
        <Tab
          value={TYPE_TIME.T_7_DAYS}
          label="7 Days"
          aria-label={TYPE_TIME.T_7_DAYS}
          className={`mat-tabs-button mat-tabs-s3`}
        />
        <Tab
          value={TYPE_TIME.T_30_DAYS}
          label="30 Days"
          aria-label={TYPE_TIME.T_30_DAYS}
          className={`mat-tabs-button mat-tabs-s3` }
        />
      </Tabs>
    );
  };

  const getTime = () => {
    switch (time) {
      case TYPE_TIME.T_7_DAYS:
        return moment().subtract(7, 'days');
      case TYPE_TIME.T_30_DAYS:
        return moment().subtract(30, 'days');
      case TYPE_TIME.T_24_HOURS:
      default:
        return moment().subtract(1, 'days');
    }
  };

  const getData = () => {
    let cards = data[type];
    return _.filter(cards, function (card) {
      return card.time > getTime();
    });
  };

  return (
    <div class={`p5 mbp ${styles.toplist_main}`}>
      <div class="container">
      <div class={`${styles.toplist_head}`}>
      <div class="flex justifyc aligncenter mb3 mw860">
      <h2 class={`heading mr15 flex`}> Top <img src="/images/fire.svg"/></h2>
      
      {getTypeTabs()}
      <h2 class={`heading mr15`}> In </h2>
      {getTimeTabs()}
        </div> 
        </div>
       
       
        
       
        <div class={`mb8 ${styles.toplist_box}`}>
          
            <div>
              <div class={`toplist-slider`}>
              <Slider {...settings}>
                {getData().map((singleUser, index) => {
                  return (
                    <UserMiniCard
                      userData={singleUser}
                      index={index}
                      key={index}
                    />
                  );
                })}
                       </Slider>
              </div>
            </div>
            
   
        </div>
      </div>
    </div>
  );
}
