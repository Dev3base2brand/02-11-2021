import React from 'react';
import styles from './CheckboxContainer.module.css';

export default function CheckboxContainer({
  icon,
  name,
  checked,
  toggleChecked,
}) {
  return (
    <>
      <li class={`${styles.filterboxlist}`}>
        <label>
          <img src={icon} />
          <span>{name}</span>
          <input type="checkbox" checked={checked} onclick={toggleChecked} />
          <span class={`${styles.checkbox}`}></span>
        </label>
      </li>
    </>
  );
}
