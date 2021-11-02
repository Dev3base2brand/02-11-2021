import React from 'react';
import styles from './VideoCard.module.css';
import Button from 'components/Button/Button';
import Slider from 'react-slick';
var settings = {
  dots: false,
  infinite: true,
  className: "center",
  centerMode: true,
  centerPadding: "27%",
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows:false,
        centerPadding: "8%",
      }
    }
  ]
};
export default function VideoCard() {
  return  <div class={` ${styles.videomain}`}>
    <h2 class={`heading-2 flex aligncenter justifyc`}> Trending Auctions <img width="25" src="/images/fire.svg"/></h2>
    <div class={`video_slider ${styles.video_slider}`}>
    <Slider {...settings} >
    <div class={` ${styles.video_item}`}>
    <div class={` ${styles.video_payer}`}>
    <video width="320" height="240" controls poster="/../images/video-poster1.png">
      <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class={` ${styles.video_content}`}>
    <div class={` ${styles.video_left}`}>
      <h2>Chivalry 2 Funny Moments....</h2>
      <h2 class={` ${styles.video_right_timemb}`}>23h : 24m : 50s Left</h2>
      <h3>Highest bid <span>0.001 ETH</span></h3>
      <h4>#10/50</h4>
      </div>
      <div class={` ${styles.video_right}`}>
        <h2 class={` ${styles.video_right_time}`}>23h : 24m : 50s Left</h2>
        <Button
            type="button_primary"
            name="Place Bid"
            transition="inline"
            icon="/../images/button-arrow.svg"
          />
      </div>
    </div>
    </div>
         
    <div class={` ${styles.video_item}`}>
    <div class={` ${styles.video_payer}`}>
    <video width="320" height="240" controls poster="/../images/video-poster1.png">
      <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class={` ${styles.video_content}`}>
    <div class={` ${styles.video_left}`}>
      <h2>Chivalry 2 Funny Moments....</h2>
      <h2 class={` ${styles.video_right_timemb}`}>23h : 24m : 50s Left</h2>
      <h3>Highest bid <span>0.001 ETH</span></h3>
      <h4>#10/50</h4>
      </div>
      <div class={` ${styles.video_right}`}>
      <h2 class={` ${styles.video_right_time}`}>23h : 24m : 50s Left</h2>
        <Button
            type="button_primary"
            name="Place Bid"
            transition="inline"
            icon="/../images/button-arrow.svg"
          />
      </div>
    </div>
    </div>
    <div class={` ${styles.video_item}`}>
    <div class={` ${styles.video_payer}`}>
    <video width="320" height="240" controls poster="/../images/video-poster1.png">
      <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class={` ${styles.video_content}`}>
    <div class={` ${styles.video_left}`}>
      <h2>Chivalry 2 Funny Moments....</h2>
      <h2 class={` ${styles.video_right_timemb}`}>23h : 24m : 50s Left</h2>
      <h3>Highest bid <span>0.001 ETH</span></h3>
      <h4>#10/50</h4>
      </div>
      <div class={` ${styles.video_right}`}>
      <h2 class={` ${styles.video_right_time}`}>23h : 24m : 50s Left</h2>
        <Button
            type="button_primary"
            name="Place Bid"
            transition="inline"
            icon="/../images/button-arrow.svg"
          />
      </div>
    </div>
    </div>

    <div class={` ${styles.video_item}`}>
    <div class={` ${styles.video_payer}`}>
    <video width="320" height="240" controls poster="/../images/video-poster1.png">
      <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class={` ${styles.video_content}`}>
    <div class={` ${styles.video_left}`}>
      <h2>Chivalry 2 Funny Moments....</h2>
      <h2 class={` ${styles.video_right_timemb}`}>23h : 24m : 50s Left</h2>
      <h3>Highest bid <span>0.001 ETH</span></h3>
      <h4>#10/50</h4>
      </div>
      <div class={` ${styles.video_right}`}>
      <h2 class={` ${styles.video_right_time}`}>23h : 24m : 50s Left</h2>
        <Button
            type="button_primary"
            name="Place Bid"
            transition="inline"
            icon="/../images/button-arrow.svg"
          />
      </div>
    </div>
    </div>
 

    </Slider>
    </div>
   </div>;
}
