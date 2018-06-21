import React from 'react';
import renderer from 'react-test-renderer';
import { Animated } from 'react-native';

import Animator from '../';

describe('EventAnimator', () => {
  it('renders an EventAnimator when animatedValue was passed in', () => {
    expect(
      renderer.create(
        <Animator
          type="height"
          animatedValue={new Animated.Value(0)}
          interpolation={{ inputRange: [0, 1], outputRange: [0, 100], extrapolate: 'clamp' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders a StaticAnimator when animatedValue was not passed in', () => {
    expect(
      renderer.create(
        <Animator
          type="height"
          initialValue={0}
          finalValue={1}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        />,
      ),
    ).toMatchSnapshot();
  });
});
