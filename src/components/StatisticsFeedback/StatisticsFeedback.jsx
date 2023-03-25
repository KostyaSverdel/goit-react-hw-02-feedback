import React from 'react';
import PropTypes from 'prop-types';
import css from '../StatisticsFeedback/StatisticsFeedback.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statistics}>
      <p className={css.goodP}>Good: {good}</p>
      <p className={css.neutralP}>Neutral: {neutral}</p>
      <p className={css.badP}>Bad: {bad}</p>
      <p className={css.totalP}>Total: {total}</p>
      <p className={css.positiveP}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
