import React from 'react';
import PropTypes from 'prop-types';

import EventAnimator from './EventAnimator';
import StaticAnimator from './StaticAnimator';

const propTypes = {
  animatedValue: PropTypes.shape({
    // we're not interested in the shape of this object
  }), // if supplied, render the EventAnimator
};

const defaultProps = {};

// Container component responsible for component delegation based on props received
const Animator = (props) => {
  const { animatedValue } = props;

  if (animatedValue) {
    return <EventAnimator {...props} />;
  }
  return <StaticAnimator {...props} />;
};

Animator.propTypes = propTypes;
Animator.defaultProps = defaultProps;

export default Animator;
