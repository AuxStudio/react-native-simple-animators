import React from 'react';
import renderer from 'react-test-renderer';
import { Animated } from 'react-native';

import Animator from '../';

describe('Animator', () => {
  it('imports the module', () => {
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
});
