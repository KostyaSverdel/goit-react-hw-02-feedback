import React from 'react';
import PropTypes from 'prop-types';
import css from '../SectionFeedback/SectionFeedback.module.css';

function Section({ title, children }) {
  return (
    <div className={css.section}>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
