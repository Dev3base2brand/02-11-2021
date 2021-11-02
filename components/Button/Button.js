import React from 'react';
import styles from './Button.module.css';

// type='contained' | 'outlined'
// name= name of button
// icon={} icon url
// transition='inline'  for special transitions if we want
export default function Button({
  type,
  name,
  icon,
  transition,
  isFixed,
  notch,
  isOutlined,
}) {
  const getClassNames = () => {
    let classes = '';
    if (type === 'button_primary') {
      classes = classes + ' ' + styles.button_primary;
    }
    if (type === 'button_secondary') {
      classes = classes + ' ' + styles.button_secondary;
    }
    if (type === 'button_white') {
      classes = classes + ' ' + styles.button_white;
    }
    if (isFixed) {
      classes = classes + ' ' + styles.fixedbtn;
    }
    if (notch === 'outline_rightskew') {
      classes = classes + ' ' + styles.outline_rightskew;
    }
    if (notch === 'outline_leftskew') {
      classes = classes + ' ' + styles.outline_leftskew;
    }
    if (isOutlined) {
      classes = classes + ' ' + styles.button_outline_sm;
    }
    if (transition === 'inline') {
      classes = classes + ' ' + styles.button_transition_inline;
    }
    return classes;
  };

  return (
    <button className={getClassNames()}>
      <span>
        {name}
        {icon && <img src={icon} />}
      </span>
    </button>
  );
}
