import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import StaticAnimator from '../';

// FIXME: shouldAnimateOut, delay, duration, shouldRepeat and shouldLoop were occluded from these tests
// due to the async complexity they introduce
describe('StaticAnimator', () => {
  let spy;

  it('renders with a height animation to 100', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={100}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 50', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={50}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 0', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={0}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 0', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={0}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a translateX animation to 100', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="translateX"
          initialValue={0}
          finalValue={100}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with an opacity animation to 1', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={1}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('animateIn is not called on componentDidMount', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'animateIn');

    renderer.create(<StaticAnimator type="height" initialValue={0} finalValue={1} />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('animateIn is called on componentDidMount', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'animateIn');

    renderer.create(
      <StaticAnimator type="height" initialValue={0} finalValue={1} shouldAnimateIn />,
    );

    expect(spy).toHaveBeenCalled();
  });

  it('animateIn is called on componentDidUpdate', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'animateIn');

    const component = renderer.create(
      <StaticAnimator type="height" initialValue={0} finalValue={1} />,
    );

    expect(spy).not.toHaveBeenCalled();

    component.update(
      <StaticAnimator type="height" initialValue={0} finalValue={1} shouldAnimateIn />,
    );

    expect(spy).toHaveBeenCalled();
  });

  it('reset is called on componentDidUpdate when the type prop changes', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'reset');

    const component = renderer.create(
      <StaticAnimator type="height" initialValue={0} finalValue={1} />,
    );

    expect(spy).not.toHaveBeenCalled();

    component.update(<StaticAnimator type="width" initialValue={0} finalValue={1} />);

    expect(spy).toHaveBeenCalled();
  });

  it('animateIn is called on componentDidUpdate when the values change', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'animateIn');

    const component = renderer.create(
      <StaticAnimator type="height" initialValue={0} finalValue={1} shouldAnimateIn />,
    );

    expect(spy).toHaveBeenCalled();

    component.update(
      <StaticAnimator type="height" initialValue={1} finalValue={0} shouldAnimateIn />,
    );

    expect(spy).toHaveBeenCalled();
  });

  it('animateOut is called on componentDidUpdate', () => {
    spy = jest.spyOn(StaticAnimator.prototype, 'animateOut');

    const component = renderer.create(
      <StaticAnimator type="height" initialValue={0} finalValue={1} />,
    );

    component.update(
      <StaticAnimator type="height" initialValue={0} finalValue={1} shouldAnimateOut />,
    );

    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    if (spy) {
      spy.mockClear();
    }
  });
});
