import { Wrapper, Text, Accent } from './Statistics.styled';

export const Statistics = options => {
  const { good, neutral, bad, total, positivePercentage } = options;

  return (
    <Wrapper>
      <Text>
        <Accent>Good: </Accent>
        {good}
      </Text>
      <Text>
        <Accent>Neutral: </Accent>
        {neutral}
      </Text>
      <Text>
        <Accent>Bad: </Accent>
        {bad}
      </Text>
      <Text>
        <Accent>Total: </Accent>
        {total}
      </Text>
      <Text>
        <Accent>Positive Feedback: </Accent>
        {positivePercentage} %
      </Text>
    </Wrapper>
  );
};
