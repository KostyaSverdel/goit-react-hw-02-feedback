import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

function Notification({ message }) {
  return <p className={css.messageTitle}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
