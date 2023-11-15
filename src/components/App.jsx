import { useState} from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const updateGoodFeedback = () => {
  setGood(prevGood => prevGood + 1);
  };

const updateNeutralFeedback = () => {
  setNeutral(prevNeutral => prevNeutral + 1);
    };

const updateBadFeedback = () => {
  setBad(prevBad => prevBad + 1);
        };

const countTotalFeedback = () => {
    return good + neutral + bad;
  };

const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;

    return total > 0 ? Math.round(percentage) : 0;
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div className="general-container">
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            onLeaveGoodFeedback={updateGoodFeedback}
            onLeaveNeutralFeedback={updateNeutralFeedback}
            onLeaveBadFeedback={updateBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }


