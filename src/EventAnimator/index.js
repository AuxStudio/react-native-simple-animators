import React from 'react';
import PropTypes from 'prop-types';
import { Animated, ViewPropTypes } from 'react-native';

const propTypes = {
  type: PropTypes.string.isRequired,
  animatedValue: PropTypes.shape({
    // we're not interested in the shape of this object
  }).isRequired,
  interpolation: PropTypes.shape({
    inputRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    outputRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    extrapolate: PropTypes.oneOf(['clamp']),
  }).isRequired,
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const transforms = ['translateX', 'translateY', 'rotate', 'scale'];

function isTransform(animationType) {
  if (transforms.includes(animationType)) {
    return true;
  }
  return false;
}

const EventAnimator = ({ type, animatedValue, interpolation, children, style }) => {
  const animatedTypeStyle = {};
  animatedTypeStyle[type] = animatedValue.interpolate(interpolation);

  let animatedStyles;

  // If the type of animation is a transform, push the animatedTypeStyle to an array of 'transform'
  if (isTransform(type)) {
    animatedStyles = {
      transform: [animatedTypeStyle],
    };
  } else {
    animatedStyles = animatedTypeStyle;
  }

  return <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>;
};

EventAnimator.propTypes = propTypes;
EventAnimator.defaultProps = defaultProps;

export default EventAnimator;
