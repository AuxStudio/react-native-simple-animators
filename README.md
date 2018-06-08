# react-native-simple-animators

A simple, versatile and reusable animating component that can animate any of the animatable style props and will use the native driver where possible. It can also now handle event animations, e.g. on scroll.

`NOTE: Version 2 has been released and it is a breaking change in the way that the imports are handled, e.g.`

```js
import { AnimateTranslateX } from 'react-native-simple-animators';
...
<AnimateTranslateX ...
```

has changed to

```js
import Animator from 'react-native-simple-animators';
...
<Animator type='translateX' ...
```

## Installation

```shell
yard add react-native-simple-animators
```

## Usage

These animators are intended to animate their children in what I feel is a very simple way.
Opacity and transform styles will use the nativeDriver which greatly improves performance.

Here is an example of a static animation:

```js
...
const BannerText = (props) => {
  return (
    <Animator
      type='translateX'
      initialValue={-200} // value to animate from
      finalValue={0} // value to animate to
      shouldAnimateIn // flag to start the animation
      animateInCallBack={null} // some function to trigger once the animation has ended
      shouldAnimateOut={false} // flag to reverse the animation (only if shouldAnimateIn was previously set)
      animateOutCallBack={null} // some function to trigger once the animation has ended
      shouldRepeat // repeat the animation, ie. -200 => 0 and back to -200 etc.
      shouldLoop // loop the animation (must set shouldRepeat to work), ie. -200 => 0 => reset to 0 => -200 => 0 etc.
      duration={2000} // duration of the animation
      easing={Easing.ease} // easing
      delay={500} // useful with animating lists (DELAY * index)
      style={{ backgroundColor: 'red' }}
    >
      <Text>How easy was this?</Text>
    </AnimateTranslateX>
  );
}
...
```

and here's an example of an event animation:

```js
...
const BannerText = ({ scrollY }) => {
  return (
    <Animator
      type='translateX'
      animatedValue={scrollY}
      interpolation={{
        inputRange: [0, 100], // range of the scroll value
        outputRange: [0, 200], // range of the translateX value
        extrapolate: 'clamp',
      }}
      style={{ backgroundColor: 'red' }}
    >
      <Text>How easy was this?</Text>
    </AnimateTranslateX>
  );
}
...
```

## Development

1.  Clone the repo.

```shell
git clone https://github.com/AuxStudio/react-native-simple-animators
```

2.  Make your changes.

3.  Make sure that your tests are passing:

```shell
yarn run test
```

4.  Create a PR using this [template](https://embeddedartistry.com/blog/2017/8/4/a-github-pull-request-template-for-your-projects).
