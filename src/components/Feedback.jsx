import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './StatisticsFeedback';
import FeedbackOptions from './FeedbackOptions';
import Section from './SectionFeedback';

const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

const FeedbackWidget = () => {
  const [state, setState] = React.useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackType => {
    setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((state.good / total) * 100);
  };

  const options = Object.keys(state);
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default FeedbackWidget;
