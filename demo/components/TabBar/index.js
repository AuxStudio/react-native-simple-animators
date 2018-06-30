import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string,
  handlePress: PropTypes.func,
};

const defaultProps = {};

const TabBar = ({ tabs, activeTab, handlePress }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        return (
          <TouchableOpacity key={tab} onPress={() => handlePress(tab)} style={styles.tabContainer}>
            <Text style={[styles.text, activeTab === tab && styles.activeText]}>{tab}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;

export default TabBar;
