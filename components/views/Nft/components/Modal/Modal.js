import React from 'react';
import styles from './Modal.module.css';
import Link from 'next/link'

export default function Modal() {
  return (

<div class="popup_ma">
     <div className={styles.master_popup}>
        <div className={styles.white_color}>
          <h2>Edition <b>35/50</b></h2>
          <span className={styles.closeicon} onClick={closepopup}>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <g id="Group_13090" data-name="Group 13090" transform="translate(-3488 -3041)">
              <g id="x-circle" transform="translate(3488.508 3042)">
                <circle id="Ellipse_81" data-name="Ellipse 81" cx="14" cy="14" r="14" transform="translate(0.492 0)" fill="none" stroke="#dd272d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <line id="Line_26" data-name="Line 26" x1="8" y2="8" transform="translate(10.492 10)" fill="none" stroke="#dd272d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <line id="Line_27" data-name="Line 27" x2="8" y2="8" transform="translate(10.492 10)" fill="none" stroke="#dd272d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </g>
            </g>
          </svg>
          </span>

          <div className={styles.table_format}>
            <div className={styles.master_heading}>
              <div className={styles.number}>
                <img src='images/hash.png' />
              </div>
              <div className={styles.pe_son}>
                <div className={styles.person}>
                  <img src='images/person.png' /> Purchased By
                </div>
                <div className={styles.person}>
                  <img src='images/currency.png' /> ETH (USD)
                </div>
              </div>

            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #3
              </div>
              <div className={styles.person}>
                <img src='images/img-1.png' /><span> Adam Meyer</span>
              </div>
              <div className={styles.person}>
                <span> @0.75 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #3
              </div>
              <div className={styles.person}>
                <img src='images/img-1.png'/><span> Adam Meyer</span>
              </div>
              <div className={styles.person}>
                <span> @1.5 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #6
              </div>
              <div className={styles.person}>
                <img src='images/img-2.png'/><span> Patrick Vargas</span>
              </div>
              <div className={styles.person}>
                <span> @0.250 USD ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #3
              </div>
              <div className={styles.person}>
                <img src='images/img-3.png'/><span> Carmen McDonald</span>
              </div>
              <div className={styles.person}>
                <span> @1.5 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #6
              </div>
              <div className={styles.person}>
                <img src='images/img-4.png' /><span> Bianca James</span>
              </div>
              <div className={styles.person}>
                <span> @1.25 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #5
              </div>
              <div className={styles.person}>
                <img src='images/img5.png'/>
                <span>Dorothy Cook</span>
              </div>
              <div className={styles.person}>
                <span>@0.75 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #4
              </div>
              <div className={styles.person}>
                <img src='images/img-6.png'/><span> Mary Cunningham</span>
              </div>
              <div className={styles.person}>
                <span> @0.250 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #2
              </div>
              <div className={styles.person}>
                <img src='images/img-7.png' /><span> Nancy Baker</span>
              </div>
              <div className={styles.person}>
                <span> @1.5 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={styles.inner_content}>
              <div className={styles.number}>
                #1
              </div>
              <div className={styles.person}>
                <img src='images/img-1.png' /><span> Alice Marshall</span>
              </div>
              <div className={styles.person}>
                <span> @0.75 ETH ($300)</span>
              </div>
              <div className={styles.button_red}>
                <a>Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

function closepopup(){
  // get the properties of an element
  var element = document.querySelector('body');
   element.classList.remove("popupopen");
}
