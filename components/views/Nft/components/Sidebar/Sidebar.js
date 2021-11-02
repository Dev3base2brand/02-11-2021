import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link'
import Tabbottom from '../Tabbottom/Tabbottom';
import ReactDOM from 'react-dom';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
   <div className={styles.side_bar}>
      <h2>Vormir a planet of death loreum ipsum.</h2>
      <div className={styles.icon_sec}>
         <div className={styles.icon_cont}>
            <div className={styles.entertainment}>
               <button>
                  <svg id="Group_12879" data-name="Group 12879" xmlns="http://www.w3.org/2000/svg" width="18.487" height="18.507" viewBox="0 0 18.487 18.507">
                     <path id="Path_2286" data-name="Path 2286" d="M977.386,506.437h17.695c.007.12.018.234.018.348q0,2.654,0,5.309a1.938,1.938,0,0,1-2.061,2.052q-6.827,0-13.654,0a1.883,1.883,0,0,1-2.018-1.9c-.037-1.877-.011-3.755-.011-5.633A1.162,1.162,0,0,1,977.386,506.437Z" transform="translate(-976.613 -495.639)" fill="#dd272d"/>
                     <path id="Path_2287" data-name="Path 2287" d="M971.064,410.519a3.234,3.234,0,0,0-.245.408c-.318.777-.637,1.554-.933,2.339a.371.371,0,0,1-.422.284c-.48-.015-.961,0-1.462,0a.947.947,0,0,1-.049-.25,11.436,11.436,0,0,0-.657-4.387c-.3-1.006.212-1.657,1.273-1.773a.37.37,0,0,1,.284.14C969.6,408.363,970.344,409.458,971.064,410.519Z" transform="translate(-967.212 -403.512)" fill="#dd272d"/>
                     <path id="Path_2288" data-name="Path 2288" d="M1004.928,397.858c-1.015.234-1.971.459-2.931.667a.354.354,0,0,1-.3-.115c-.757-1.1-1.5-2.2-2.287-3.357.545-.13,1.05-.249,1.554-.37.431-.1.859-.22,1.293-.308a.413.413,0,0,1,.344.074C1003.377,395.561,1004.133,396.685,1004.928,397.858Z" transform="translate(-997.086 -391.666)" fill="#eb7f83"/>
                     <path id="Path_2289" data-name="Path 2289" d="M1110.392,372.946c-.912.207-1.786.412-2.664.6a.4.4,0,0,1-.329-.12c-.842-1.1-1.67-2.2-2.537-3.356.7-.169,1.356-.334,2.016-.484.36-.082.779-.279,1.072-.166s.43.549.633.847q.793,1.162,1.582,2.328C1110.238,372.7,1110.3,372.806,1110.392,372.946Z" transform="translate(-1094.916 -368.486)" fill="#eb7f83"/>
                     <path id="Path_2290" data-name="Path 2290" d="M1059.1,386.156c-.824.19-1.614.375-2.405.552-.7.156-.7.153-1.1-.433-.662-.973-1.322-1.946-2.012-2.962.7-.17,1.373-.286,2.013-.5a1.042,1.042,0,0,1,1.411.5c.585.906,1.284,1.74,1.934,2.6C1058.991,385.98,1059.031,386.05,1059.1,386.156Z" transform="translate(-1047.344 -380.854)" fill="#eb7f83"/>
                     <path id="Path_2291" data-name="Path 2291" d="M1158.732,357.646c.946-.222,1.827-.452,2.718-.63a1.068,1.068,0,0,1,1.2.72c.266.87.488,1.754.714,2.636a.36.36,0,0,1-.295.462c-.581.145-1.165.283-1.751.407a.286.286,0,0,1-.221-.12C1160.316,359.983,1159.542,358.839,1158.732,357.646Z" transform="translate(-1144.894 -356.997)" fill="#eb7f83"/>
                     <path id="Path_2292" data-name="Path 2292" d="M1125.629,453.079c-.409,1.018-.793,1.986-1.192,2.948a.326.326,0,0,1-.252.135c-.914.01-1.829.006-2.779.006a2.514,2.514,0,0,1,.074-.283c.337-.847.67-1.7,1.024-2.537a.459.459,0,0,1,.308-.258C1123.725,453.07,1124.64,453.079,1125.629,453.079Z" transform="translate(-1110.264 -446.135)" fill="#dd272d"/>
                     <path id="Path_2293" data-name="Path 2293" d="M1071.983,453.023c-.4,1.01-.784,1.966-1.178,2.916a.352.352,0,0,1-.266.165c-.914.012-1.828.007-2.8.007.05-.143.083-.252.125-.357.325-.813.662-1.622.97-2.441a.389.389,0,0,1,.444-.3C1070.156,453.032,1071.034,453.023,1071.983,453.023Z" transform="translate(-1060.474 -446.079)" fill="#dd272d"/>
                     <path id="Path_2294" data-name="Path 2294" d="M1014.143,456.105c.415-1.039.794-2,1.186-2.948a.316.316,0,0,1,.243-.141c.926-.01,1.852-.006,2.83-.006-.288.723-.557,1.411-.837,2.1-.135.331-.205.774-.456.949s-.673.048-1.022.05C1015.465,456.107,1014.843,456.105,1014.143,456.105Z" transform="translate(-1010.752 -446.072)" fill="#dd272d"/>
                     <path id="Path_2295" data-name="Path 2295" d="M1177.967,456.168h-3.51l1.22-3.065c.637,0,1.262,0,1.887,0a.364.364,0,0,1,.4.379C1177.974,454.371,1177.967,455.258,1177.967,456.168Z" transform="translate(-1159.482 -446.158)" fill="#dd272d"/>
                  </svg>
                  Entertainment
               </button>
            </div>
         </div>
         <div className={styles.btn_li_eorr}>
            <div className={styles.like}>
               <button className={styles.round_border}>
                  <img src="images/thumb.png"/>
                  25K
               </button>
               <button className={styles.round_border}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.108" height="16.752" viewBox="0 0 20.108 16.752">
                     <path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M24.431,13.786,17.044,6.876a.378.378,0,0,0-.293-.126c-.23.01-.524.173-.524.419v3.466a.224.224,0,0,1-.188.215C8.694,11.975,5.6,17.472,4.506,23.178c-.042.225.262.435.4.257,2.68-3.377,5.942-5.581,11.1-5.623a.259.259,0,0,1,.22.251v3.4a.449.449,0,0,0,.759.277l7.439-7.031a.578.578,0,0,0,.183-.44A.7.7,0,0,0,24.431,13.786Z" transform="translate(-4.502 -6.749)" fill="#a1a1a1"/>
                  </svg>
               </button>
               <button className={styles.round_border}>
                  <img src="images/flag.png"/>
               </button>
               <button className={styles.round_border} onClick={toggleClass_master}>
                  <img src="images/icon.png"/>
               </button>
                  <ul className={styles.dropdown_menu} id="dropdownMenuButton1">
                   <li>
                     <a className={styles.dropdown_item} href="#">
                      <span className={styles.dropdown_icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.108" height="16.752" viewBox="0 0 20.108 16.752">
                          <path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M24.431,13.786,17.044,6.876a.378.378,0,0,0-.293-.126c-.23.01-.524.173-.524.419v3.466a.224.224,0,0,1-.188.215C8.694,11.975,5.6,17.472,4.506,23.178c-.042.225.262.435.4.257,2.68-3.377,5.942-5.581,11.1-5.623a.259.259,0,0,1,.22.251v3.4a.449.449,0,0,0,.759.277l7.439-7.031a.578.578,0,0,0,.183-.44A.7.7,0,0,0,24.431,13.786Z" transform="translate(-4.502 -6.749)" fill="#a1a1a1"/>
                        </svg>
                        </span>
                        Share
                     </a>
                   </li>
                   <li>
                     <a className={styles.dropdown_item} href="#">
                     <span className={styles.dropdown_icon}>
                       <img src="images/flag.png"/>
                       </span>
                       Report
                     </a>
                   </li>
                 </ul>
            </div>
         </div>
      </div>
      <div className={styles.user_sction}>
         <div className={styles.ower_inner}>
            <div className={styles.user_item}>
               <img src="/images/Component-1.png"/>
               <div className={styles.user_title}>
                  <span>Owner</span>
                  <h4>Jhone Doe</h4>
               </div>
               <button>+ Follow</button>
            </div>
         </div>
         <div className={styles.ower_inner}>
            <div className={styles.user_item}>
               <img src="/images/Component-2.png"/>
               <div className={styles.user_title}>
                  <span>Creator</span>
                  <h4>Vanoss Gaming</h4>
               </div>
               <button>+ Follow</button>
            </div>
         </div>
      </div>
      <div className={styles.icon_inner}>
         <div className={styles.icon_item}>
            <img src="images/view.png" />
            <div className={styles.icon_title}>
               <span>Views</span>
               <h4>45.5K</h4>
            </div>
         </div>
         <div className={styles.icon_item}>
            <img src="images/calendar.png" />
            <div className={styles.icon_title}>
               <span>Date</span>
               <h4>10/12/2020</h4>
            </div>
         </div>
         <div className={styles.icon_item}>
            <img src="images/star.png" />
            <div className={styles.icon_title}>
               <span>Token ID</span>
               <h4>414518200010116</h4>
            </div>
         </div>
         <div className={styles.icon_item}>
            <img src="images/hash.png" />
            <div className={styles.icon_title}>
               <span>Edition</span>
               <h4>35/50</h4>
               <div className={styles.button_red}>
                  <a href="#" onClick={popupclick}>SELECT EDITION</a>
               </div>
            </div>
         </div>
      </div>

<Tabbottom />


   </div>
</div>
  )
}
function toggleClass_master(){
  // get the properties of an element
  var element = document.getElementById('dropdownMenuButton1');
  
//  check if the element have class list
  if (element.classList) {
    // add active class if true
   element.classList.toggle('active');
  } else {
   var classes = element.className.split('');
   var i = classes.indexOf('active');
  }
}

function popupclick(){
  // get the properties of an element
  var element = document.querySelector('body');
   element.classList.add('popupopen');
}