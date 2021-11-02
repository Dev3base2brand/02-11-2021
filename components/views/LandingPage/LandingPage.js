import React from 'react';
// import styles from './LandingPage.module.css';
// import Button from 'components/Button/Button';
// import NavigationBar from 'components/Navbar/Navbar';
// import Footer from 'components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import TrendingCreators from './components/TrendingCreators/TrendingCreators';
import LiveAuctions from './components/LiveAuctions/LiveAuctions';
import TopList from './components/TopList/TopList';
import Explore from './components/Explore/Explore';
// import AppWrapper from 'components/AppWrapper';
export default function LandingPage() {
  return (
    <React.Fragment>
      {/* <AppWrapper> */}
        <HeroSection />
        <TrendingCreators />
        <LiveAuctions />
        <TopList />
        <Explore title={'Exlore'} showFilterData={true} showExploreData={true} />
      {/* </AppWrapper> */}
    </React.Fragment>
  );
}
