import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import StaticAnimator from '../';

// FIXME: shouldRepeat and shouldLoop were occluded from these tests
// due to the async complexity they introduce
it('renders a StaticAnimator with a height animation at 0 animating in', () => {
  expect(
    renderer.create(
      <StaticAnimator
        type="height"
        initialValue={0}
        finalValue={100}
        shouldAnimateIn
        animateInCallback={jest.fn()}
        easing={jest.fn()}
        duration={500}
        delay={500}
      >
        <View style={{ width: 100, height: 100 }} />
      </StaticAnimator>,
    ),
  ).toMatchSnapshot();
});
