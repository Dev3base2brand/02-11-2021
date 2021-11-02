import React from 'react';
import styles from './Nft.module.css';
import NavigationBar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Leftside from './components/Leftside/Leftside';
import Modal from './components/Modal/Modal';

export default function LandingPage() {
  return (
    <React.Fragment>
      {/* <AppWrapper> */}
      <section id="container" className={styles.container}>
	        <Leftside />
	        <Sidebar />
	        <Modal />
      </section>
      {/* </AppWrapper> */}
    </React.Fragment>
  );
}