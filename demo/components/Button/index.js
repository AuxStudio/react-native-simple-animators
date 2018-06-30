import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';

import styles from './styles';

const propTypes = {
  handlePress: PropTypes.func,
  text: PropTypes.string,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const Button = ({ handlePress, text, textStyle, style }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
