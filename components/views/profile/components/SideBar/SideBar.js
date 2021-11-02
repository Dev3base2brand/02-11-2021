import React from 'react';
import styles from './SideBar.module.css';
import CheckboxContainer from 'components/CheckboxContainer/CheckboxContainer';
export default function SideBar({ toggleSidebar }) {
  return (
    <div class={`${styles.sidebar}`}>
      <div class={`${styles.sidebar_toggle} `} onClick={toggleSidebar}>
        <img src="/../images/sidebar/sidebar-arrow.svg" />
      </div>
      <div class={`${styles.top_text}`}>
        <h3>Filters</h3>
        <div class={`${styles.sidebar_togglemb} `} onClick={toggleSidebar}>
          Close
        </div>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Sale Type</h5>
        <ul>
          <CheckboxContainer
            name={'All'}
            icon={'/../images/sidebar/all.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Fixed Price'}
            icon={'/../images/sidebar/fixed_price.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Auction'}
            icon={'/../images/sidebar/auction.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Offers'}
            icon={'/../images/sidebar/offers.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
        </ul>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Collection</h5>
        <ul>
          <CheckboxContainer
            name={'Nec magna biben...'}
            icon={'/../images/sidebar/img-1.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Nec etiam'}
            icon={'/../images/sidebar/img-2.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Mollis morbi nunc'}
            icon={'/../images/sidebar/img-3.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Sodales nec'}
            icon={'/../images/sidebar/img-4.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Lacinia consequat..'}
            icon={'/../images/sidebar/img-4.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Nec magna biben...'}
            icon={'/../images/sidebar/img-5.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
        </ul>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Categories</h5>
        <ul>
          <CheckboxContainer
            name={'Gaming'}
            icon={'/../images/sidebar/gaming.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Entertainment'}
            icon={'/../images/sidebar/entertainment.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Fashion'}
            icon={'/../images/sidebar/Fashion.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Music'}
            icon={'/../images/sidebar/music.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Food'}
            icon={'/../images/sidebar/Food.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Travel'}
            icon={'/../images/sidebar/Travel.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
        </ul>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Price</h5>
        <ul>
          <li>
            <select className={styles.selectbox}>
              <option>$ United States Dollar</option>
              <option>$ United States Dollar</option>
              <option>$ United States Dollar</option>
              <option>$ United States Dollar</option>
              <option>$ United States Dollar</option>
            </select>
          </li>
          <li className={styles.price}>
            <span><input type="number" placeholder="Min" className={styles.input_value}/></span>
            <span className={styles.to_price}>to</span>
            <span><input type="number" placeholder="Max" className={styles.input_value}/></span>
          </li>
          <li className={styles.apply_li}>
            <input type="submit" value="Apply" className={styles.apply}/>
          </li>
        </ul>
      </div>
    </div>
    
  );

}
