import React from 'react';
import styles from './Notification.module.css';

const Notification = ({showNotification}) => {
  return(
    <div className={`${styles['notification-container']} ${showNotification ? styles['show']: ''}`}>
        <p>You have already entered this letter</p>
    </div>
);  
};

export default Notification;
