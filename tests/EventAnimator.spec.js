import React from 'react';
import renderer from 'react-test-renderer';
import { Animated } from 'react-native';

import EventAnimator from '../src/EventAnimator';

it('renders a EventAnimator with a height animation at 0', () => {
  expect(
    renderer.create(
      <EventAnimator
        type="height"
        animatedValue={new Animated.Value(0)}
        interpolation={{ inputRange: [0, 100], outputRange: [0, 100], extrapolate: 'clamp' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a EventAnimator with a height animation at 50', () => {
  expect(
    renderer.create(
      <EventAnimator
        type="height"
        animatedValue={new Animated.Value(50)}
        interpolation={{ inputRange: [0, 100], outputRange: [0, 100], extrapolate: 'clamp' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a EventAnimator with a height animation at 100', () => {
  expect(
    renderer.create(
      <EventAnimator
        type="height"
        animatedValue={new Animated.Value(100)}
        interpolation={{ inputRange: [0, 100], outputRange: [0, 100], extrapolate: 'clamp' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a EventAnimator with an translateX animation', () => {
  expect(
    renderer.create(
      <EventAnimator
        type="translateX"
        animatedValue={new Animated.Value(0)}
        interpolation={{ inputRange: [0, 100], outputRange: [0, 100], extrapolate: 'clamp' }}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a EventAnimator with an opacity animation', () => {
  expect(
    renderer.create(
      <EventAnimator
        type="opacity"
        animatedValue={new Animated.Value(0)}
        interpolation={{ inputRange: [0, 1], outputRange: [0, 100], extrapolate: 'clamp' }}
      />,
    ),
  ).toMatchSnapshot();
});
