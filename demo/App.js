import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView, Text } from 'react-native';
import Animator from 'react-native-simple-animators'; // eslint-disable-line

import styles from './styles.js';

import Button from './components/Button';
import TabBar from './components/TabBar';

const AVATAR = require('./avatar.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setAnimation = this.setAnimation.bind(this);
    this.toggleShouldAnimateIn = this.toggleShouldAnimateIn.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);

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

    this.tabs = ['Static', 'Event'];

    this.state = {
      animation: this.animations[0],
      shouldAnimateIn: false,
      activeTab: this.tabs[0],
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

  setActiveTab(activeTab) {
    this.setState({
      activeTab,
    });
  }

  render() {
    const { animation, shouldAnimateIn, activeTab } = this.state;

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
                  textStyle={animationObject.type === animation.type && { color: 'white' }}
                  style={animationObject.type === animation.type && { backgroundColor: 'black' }}
                />
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.tabBarContainer}>
          <TabBar tabs={this.tabs} activeTab={activeTab} handlePress={this.setActiveTab} />
        </View>
      </View>
    );
  }
}
