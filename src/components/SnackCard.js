import React, { Component } from 'react';
import { Dimension, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Constants } from 'expo';
import Counter from './Counter';

export default class SnackCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAddButton, onSubstractButton, snackQuantity } = this.props;
    const { title, poster, price } = this.props.snackProps;
    return (
      <View style={styles.container}>
        <Card
          featuredTitle={title}
          featuredTitleStyle={{fontSize: 40}}
          containerStyle={styles.cardContainer}
          image={require('../images/Nature.jpg')}
          imageStyle={{
            borderWidth: 1,
            borderColor: '#FFFFFF',
            borderRadius: 10,
            overflow: 'hidden'
          }}
          imageWrapperStyle={{
            flex: 1
          }}
        >
        <Text style={{ marginBottom: 10 }}>
          Price: {price}
        </Text>
        <Counter
          onAddButton={onAddButton}
          onSubstractButton={onSubstractButton}
          snackQuantity={snackQuantity}
        />
      </Card>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    borderRadius: 10
  }
});
