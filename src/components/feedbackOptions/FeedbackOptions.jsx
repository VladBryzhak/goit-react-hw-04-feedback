import { OptionList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map((option, idx) => (
      <li key={idx}>
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      </li>
    ))}
  </OptionList>
);