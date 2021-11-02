import React from 'react';
import styles from './Leftside.module.css';


export default function Leftside() {
  return (
    <section className={styles.Versionpopup}>

    <div className={styles.video_section}>
    <video width="320" height="240" poster="images/image-div.jpg" controls>
       <source src="images/dummy.mp4" type="video/mp4" />
    </video>
    </div>
    <div className={styles.heading_btn}>
   <div className={styles.left_heading}>
      <img src="images/user.png"/>
      <h2> 
        <small>Highest bid by </small> 
        <strong> william johns </strong> 
        <span>1.100 ETH</span> 
      </h2>   
      </div> 
      <div className={styles.right_btn}>
      <button className={styles.button_1}>Buy For 3 ETH
        <span className={styles.icon1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33.45" height="7.432" viewBox="0 0 33.45 7.432"><path id="Path_2084" data-name="Path 2084" d="M1449.248,779.564h31.036l-5.725-5.725" transform="translate(-1449.248 -773.132)" fill="none" stroke="#fff" stroke-width="2"></path></svg>
        </span>
      </button> 
      <button className={styles.button_2}>Place Bid
        <span className={styles.icon1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33.45" height="7.432" viewBox="0 0 33.45 7.432"><path id="Path_2084" data-name="Path 2084" d="M1449.248,779.564h31.036l-5.725-5.725" transform="translate(-1449.248 -773.132)" fill="none" stroke="#fff" stroke-width="2"></path></svg>
        </span>
      </button>
      </div>
    </div>
    <div className={styles.info_section} id="description">
      <div className={styles.content}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      <p>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      <p>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
      <p>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
      </div>
      <button type='button' className={styles.show_more} onClick={toggleClass}>Show more</button>
    </div>
    
    </section>
  )
}

function toggleClass(){
  // get the properties of an element
  var element = document.getElementById('description');
  
//  check if the element have class list
  if (element.classList) {
    // add active class if true
   element.classList.toggle('active');
  } else {
   var classes = element.className.split('');
   var i = classes.indexOf('active');
  }
}
