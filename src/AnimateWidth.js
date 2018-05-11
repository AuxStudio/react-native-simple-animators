import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';

export default class AnimateWidth extends React.Component {
  static get propTypes() {
    return {
      initialValue: PropTypes.number,
      finalValue: PropTypes.number,
      shouldAnimateIn: PropTypes.bool,
      shouldAnimateOut: PropTypes.bool,
      animateInCallBack: PropTypes.func,
      animateOutCallBack: PropTypes.func,
      shouldRepeat: PropTypes.bool,
      shouldLoop: PropTypes.bool, // used with repeat (cycles the animation instead of going back and forth)
      style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
      duration: PropTypes.number,
      easing: PropTypes.func,
      delay: PropTypes.number,
      children: PropTypes.node,
    };
  }

  static get defaultProps() {
    return {
      duration: 250,
      easing: Easing.gentle,
    };
  }

  state = {
    animatedValue: new Animated.Value(0),
  };

  componentDidMount() {
    // In cases where update needs to be used instead
    const shouldAnimateOnMount =
      (this.props.initialValue || this.props.initialValue === 0) &&
      (this.props.finalValue || this.props.finalValue === 0);

    if (this.props.shouldAnimateIn && shouldAnimateOnMount) {
      this.animateIn();
    }
  }

  componentDidUpdate(prevProps) {
    // Use case where update used as onMount (see componentDidMount)
    const shouldAnimateOnUpdate =
      (this.props.initialValue && this.props.initialValue !== prevProps.initialValue) ||
      (this.props.finalValue && this.props.finalValue !== prevProps.finalValue);

    if (shouldAnimateOnUpdate) {
      this.animateIn();
    } else if (
      this.props.shouldAnimateIn &&
      this.props.shouldAnimateIn !== prevProps.shouldAnimateIn
    ) {
      this.animateIn();
    } else if (
      this.props.shouldAnimateOut &&
      this.props.shouldAnimateOut !== prevProps.shouldAnimateOut
    ) {
      this.animateOut();
    }
  }

  animateIn = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: this.props.duration,
      easing: this.props.easing,
      useNativeDriver: false,
      delay: this.props.delay,
    }).start(() => {
      if (this.props.animateInCallBack) {
        this.props.animateInCallBack();
      }

      if (this.props.shouldRepeat) {
        if (this.props.shouldLoop) {
          this.state.animatedValue.setValue(0);
          this.animateIn();
        } else {
          this.animateOut();
        }
      }
    });
  };

  animateOut = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: this.props.duration,
      easing: this.props.easing,
      useNativeDriver: false,
      delay: this.props.delay,
    }).start(() => {
      if (this.props.animateOutCallBack) {
        this.props.animateOutCallBack();
      }

      if (this.props.shouldRepeat) {
        this.animateIn();
      }
    });
  };

  render() {
    const animatedStyles = {
      width: this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [this.props.initialValue, this.props.finalValue],
      }),
    };

    return (
      <Animated.View style={[this.props.style, animatedStyles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
