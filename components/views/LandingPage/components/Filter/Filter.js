import React from 'react';
import styles from './Filter.module.css';
import Button from 'components/Button/Button';

export default function Filter() {
  return (
    <div class={` d-flex  ${styles.explorfilterbox}`}>
      <div class={` ${styles.filterbox_item}`}>
        <h5>Upload Date</h5>
        <ul>
          <li>
            <a href="">Any</a>
          </li>
          <li>
            <a href="">This Week</a>
          </li>
          <li>
            <a href="">Last 30 Days</a>
          </li>
          <li>
            <a href="">Custom</a>
          </li>
        </ul>
      </div>
      <div class={` ${styles.filterbox_item}`}>
        <h5>Status</h5>
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Buy Now</a>
          </li>
          <li>
            <a href="">On Auction</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
        </ul>
      </div>
      <div class={` ${styles.filterbox_item}`}>
        <h5>Category</h5>
        <ul>
          <li>
            <a href="">Gaming</a>
          </li>
          <li>
            <a href="">Entertainment</a>
          </li>
          <li>
            <a href="">Fashion</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Food</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
        </ul>
      </div>
      <div class={` ${styles.filterbox_item}`}>
        <h5>Sort by</h5>
        <ul>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Recent</a>
          </li>
          <li>
            <a href="">View Count</a>
          </li>
        </ul>
      </div>
      <div class={` ${styles.filterbox_item}`}>
        <h5>Price</h5>
        <div class={` ${styles.filterbox_form}`}>
          <select class={` ${styles.arrowSelect}`}>
            <option>$ United States Dollar</option>
          </select>
          <div class="flex">
            <input type="text" placeholder="Min" />
            <span class={` ${styles.formtext}`}>to</span>{' '}
            <input placeholder="Max" type="text" />
          </div>
          <Button isOutlined={true} name="Apply" />
        </div>
      </div>
    </div>
  );
}
