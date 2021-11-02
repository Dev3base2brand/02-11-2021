import React from 'react';
import styles from './Toppanel.module.css';
import { SearchIcon } from 'comman/AppIcons';


export default function Toppanel() {
  return (
    <div className={styles.Toppanel}>
       <form id="nav-form" className={styles.nav_form}>
        <svg
          id="search_11_"
          data-name="search (11)"
          xmlns="http://www.w3.org/2000/svg"
          width="22.301"
          height="22.301"
          viewBox="0 0 22.301 22.301"
        >
          <g id="Group_2218" data-name="Group 2218">
            <g id="Group_2217" data-name="Group 2217">
              <path
                id="Path_2054"
                data-name="Path 2054"
                d="M10.179,0A10.179,10.179,0,1,0,20.358,10.179,10.191,10.191,0,0,0,10.179,0Zm0,18.479a8.3,8.3,0,1,1,8.3-8.3A8.309,8.309,0,0,1,10.179,18.479Z"
                fill="#c7c7c7"
              />
            </g>
          </g>
          <g
            id="Group_2220"
            data-name="Group 2220"
            transform="translate(17.394 17.354)"
          >
            <g id="Group_2219" data-name="Group 2219">
              <path
                id="Path_2055"
                data-name="Path 2055"
                d="M355.766,354.9l-3.638-3.667a.63.63,0,0,0-.9,0,.643.643,0,0,0,0,.9l3.638,3.667a.631.631,0,0,0,.9,0A.643.643,0,0,0,355.766,354.9Z"
                transform="translate(-351.046 -351.046)"
                fill="#c7c7c7"
              />
            </g>
          </g>
        </svg>

        <input placeholder="Search here" id="search" type="text" />
      </form>
      <div className={styles.right_panel}>
      <select className={styles.items_all}>
        <option>All Items</option>
        <option>Single</option>
        <option>Multiple</option>
      </select>

      <select className={styles.items_all}>
        <option>Sort By</option>
        <option>Single</option>
        <option>Multiple</option>
      </select>
      </div>
    </div>
  );
}
