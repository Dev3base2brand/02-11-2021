import AppWrapper from "components/AppWrapper";
import React from "react";
import Button from "components/Button/Button";
// import Card from "components/Card/Card";
import Explore from "components/views/LandingPage/components/Explore/Explore";
// import ActivityHeroSection from "components/ActivityComponent/ActivityHeroSection";
import HeroScetionPage from "./HeroScetionPage";

function Marketplace() {
  return (
    <AppWrapper>
      <div className="mainContainer">
        <HeroScetionPage title={'Marketplace'} />
        
        {/* Component Code */}

        <div
          className="relative bg-red-400  w-full flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left bg-cover bg-center"
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
          // }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-100 opacity-75" />
          {/* <main className="sm:px-24 z-10 my-8">
            <div className>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none md:text-5xl">
                <span className="text-white">Marketplace</span>
              </h2>
              <div className="mt-5 flex flex-wrap sm:mt-8 space-x-2 space-y-1">
                <Button title="All" />
                <Button title="On Auction" />
                <Button title="Buy Now" />
                <Button title="Offers" />
                <Button title="New" />
              </div>
            </div>
          </main> */}
          {/*   date section   */}
          <div className="z-10 text-white text-center flex items-center justify-center w-full">
            <div className="flex items-end justify-center" style={{height:'100%', overflowX: 'auto'}}>
              <div className="m-2 sm:m-5">
                {/* <Card /> */}
              </div>
              <div className="m-2 sm:m-5">
                {/* <Card /> */}
              </div>
            </div>
          </div>
          {/*   end date section     */}
        </div>
        <Explore title={'Marketplace'} showFilterData={true} showExploreData={true}/>
      </div>
    </AppWrapper>
  );
}

export default Marketplace;
