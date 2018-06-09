import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const WritedownButton = ({ onPress, children }) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#2980b6',
    paddingVertical: 5,
    margin: 15
  }
};

export default WritedownButton;
