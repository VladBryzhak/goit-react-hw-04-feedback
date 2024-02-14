import { Notification } from '../notification/Notification';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <h2 className={styles.title}>Statistics</h2>
    {total() === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul>
        <li className={styles['list-item']}>
          <p className={styles['statistic-date']}>Good: {good}</p>
        </li>
        <li className={styles['list-item']}>
          <p className={styles['statistic-date']}>Neutral: {neutral}</p>
        </li>
        <li className={styles['list-item']}>
          <p className={styles['statistic-date']}>Bad: {bad}</p>
        </li>
        <li className={styles['list-item']}>
          <p className={styles['statistic-date']}>Total: {total()}</p>
        </li>
        <li className={styles['list-item']}>
          <p className={styles['statistic-date']}>
            Positive feedback: {positivePercentage(total)}%
          </p>
        </li>
      </ul>
    )}
  </>
);