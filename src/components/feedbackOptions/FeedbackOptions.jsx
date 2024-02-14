import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles['options-list']}>
    {options.map((option, idx) => (
      <li key={idx}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);