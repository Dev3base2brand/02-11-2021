import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './TabSection.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from 'components/Card/Card';
import Toppanel  from './../Toppanel/Toppanel';
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
    showTimer: false,
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
    showTimer: false,
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
    showTimer: false,
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
    showTimer: false,
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
    showTimer: false,
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
    showTimer: false,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <div className={styles.page_selection}>
      <div className="master_tab">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
          label={<span>Created</span>}
          icon={
            <img
              src="/images/profile/created.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(0)} />
          <Tab
          label={<span>Offers</span>}
          icon={
            <img
              src="/images/profile/offers.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(1)} />
          <Tab
          label={<span>Collection</span>}
          icon={
            <img
              src="/images/profile/collection.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(2)} />
          <Tab
          label={<span>Draft</span>}
          icon={
            <img
              src="/images/profile/draft.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(3)} />
          <Tab
          label={<span>Activity</span>}
          icon={
            <img
              src="/images/profile/activity.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(4)} />
          <Tab
          label={<span>Liked</span>}
          icon={
            <img
              src="/images/profile/Liked.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
          {...a11yProps(5)} />
        </Tabs>
        </div>
      </div>
      </Box>
      <Box class='right_side'>
       <Toppanel />
      <TabPanel value={value} index={0}>
        <div class={`auction_grid ${styles.auction_grid}`}>
          {data.map((singleCard, index) => {
            return <Card key={index} cardData={singleCard} />;
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
       <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
       <TabPanel value={value} index={4}>
        Item four
      </TabPanel>
       <TabPanel value={value} index={5}>
        Item five
      </TabPanel>
      </Box>
    </Box>
  );
}
