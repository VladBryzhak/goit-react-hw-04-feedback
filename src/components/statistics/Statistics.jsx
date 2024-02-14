import { Notification } from '../Notification/Notification';
import { Title, ListItem, StatisticDate } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <Title>Statistics</Title>
    {total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul>
        <ListItem>
          <StatisticDate>Good: {good}</StatisticDate>
        </ListItem>
        <ListItem>
          <StatisticDate>Neutral: {neutral}</StatisticDate>
        </ListItem>
        <ListItem>
          <StatisticDate>Bad: {bad}</StatisticDate>
        </ListItem>
        <ListItem>
          <StatisticDate>Total: {total}</StatisticDate>
        </ListItem>
        <ListItem>
          <StatisticDate>
            Positive feedback: {positivePercentage}%
          </StatisticDate>
        </ListItem>
      </ul>
    )}
  </>
);