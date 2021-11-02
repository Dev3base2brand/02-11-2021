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
        1500 Active Actions{' '}
        <div class={`${styles.sidebar_togglemb} `} onClick={toggleSidebar}>
          Close
        </div>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Platform</h5>
        <ul>
          <CheckboxContainer
            name={'All'}
            icon={'/../images/sidebar/all.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Youtube'}
            icon={'/../images/sidebar/youtube.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'Tiktok'}
            icon={'/../images/sidebar/tik-tok.svg'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
        </ul>
      </div>
      <div class={`${styles.filterbox}`}>
        <h5>Currency</h5>
        <ul>
          <CheckboxContainer
            name={'Ethereum'}
            icon={'/../images/sidebar/Etherium.png'}
            checked={false}
            toggleChecked={() => console.log('Called')}
          />
          <CheckboxContainer
            name={'USD'}
            icon={'/../images/sidebar/usd.svg'}
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
    </div>
  );
}
