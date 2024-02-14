import styles from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={styles.message}>{message}</p>
);