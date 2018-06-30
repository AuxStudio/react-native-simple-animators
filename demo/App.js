import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import Animator from 'react-native-simple-animators'; // eslint-disable-line

import styles from './styles.js';

const buttonPropTypes = {
  handlePress: PropTypes.func,
  text: PropTypes.string,
};

const Button = ({ handlePress, text }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = buttonPropTypes;

const AVATAR = require('./avatar.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setAnimation = this.setAnimation.bind(this);
    this.toggleShouldAnimateIn = this.toggleShouldAnimateIn.bind(this);

    this.animations = [
      { type: 'translateX', initialValue: 0, finalValue: 150, isNative: true },
      { type: 'translateY', initialValue: 0, finalValue: -150, isNative: true },
      { type: 'rotate', initialValue: 0, finalValue: 360, isNative: true },
      { type: 'scale', initialValue: 1, finalValue: 2, isNative: true },
      { type: 'opacity', initialValue: 1, finalValue: 0.33, isNative: true },
      {
        type: 'height',
        initialValue: 150 + 20 + 20, // image size + padding + padding
        finalValue: 100,
        isNative: false,
      },
      {
        type: 'marginTop',
        initialValue: 0,
        finalValue: 100,
        isNative: false,
      },
    ];

    this.state = {
      animation: this.animations[0],
      shouldAnimateIn: false,
    };
  }

  setAnimation(animation) {
    this.setState({
      animation,
    });

    this.toggleShouldAnimateIn();
  }

  toggleShouldAnimateIn() {
    this.setState({
      shouldAnimateIn: !this.state.shouldAnimateIn,
    });
  }

  render() {
    const { animation, shouldAnimateIn } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.demoContainer}>
          <Animator
            key={
              animation.isNative
                ? 'native'
                : 'non-native' /* force a remount if non-native animation */
            }
            type={animation.type}
            initialValue={animation.initialValue}
            finalValue={animation.finalValue}
            shouldAnimateIn={shouldAnimateIn}
            animateInCallback={this.toggleShouldAnimateIn}
          >
            <Image source={AVATAR} style={styles.image} />
          </Animator>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <Text style={styles.titleText}>Select an animation</Text>
          {this.animations.map((animationObject) => {
            return (
              <View key={animationObject.type} style={styles.buttonContainer}>
                <Button
                  text={animationObject.type}
                  handlePress={() => this.setAnimation(animationObject)}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
