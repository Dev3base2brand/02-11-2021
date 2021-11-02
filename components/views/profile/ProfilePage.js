import React, { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import VideoCard from 'components/VideoCard/VideoCard';
import HeroSection from './components/HeroSection/HeroSection';
import UserSection from './components/UserSection/UserSection';
import TabSection from './components/TabSection/TabSection';
import Card from 'components/Card/Card';
import styles from './ProfilePage.module.css';
import NavigationBar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

export default function ProfilePage() {
  const [openFilter, setFilterOpen] = useState(false);
  return (
    <>
      <NavigationBar />
       <HeroSection />
       <UserSection />
       <div className={styles.main_tab}>
       <TabSection />
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

        </div>
        </div>
        </div>
        <Footer />
      
    </>
  );  
}
