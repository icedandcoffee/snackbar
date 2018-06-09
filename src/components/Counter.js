import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAddButton, onSubstractButton, snackQuantity } = this.props;
    return (
      <View style={styles.container}>
      <Button
        onPress={onSubstractButton}
        icon={{ name: 'code' }}
        color='#aaafff'
        title='-'
        style={styles.substractButton}
      />

      <Text style={styles.counterField}> {snackQuantity} </Text>

      <Button
        onPress={onAddButton}
        icon={{ name: 'code' }}
        color='#aaafff'
        title='+'
        style={styles.addButton}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  addButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  substractButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  counterField: {
    color: '#000000',
    fontSize: 40
  }
});
