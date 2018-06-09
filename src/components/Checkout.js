import React, { Component } from 'react';
import { Alert, ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from './Header';
import WritedownButton from './Writedown';

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderOrderItems() {
    const { ordersObject } = this.props;
    const orderedItems = {};

    Object.keys(ordersObject).forEach(key => {
      const snackQuantity = ordersObject[key];

      if (snackQuantity > 0) {
        orderedItems[key] = snackQuantity;
        console.log(`Putting ${key} the stuff in orderedItems Object`);
      }
    });
    console.log('Ordered items object');
    console.log(orderedItems);
    console.log('ordersObject:');
    console.log(ordersObject);

    return (
      Object.entries(orderedItems).map((orderedSnack, index) =>
        <View
          key={index}
          style={{flex: 1}}>
          <TouchableOpacity
            key={index}
            style={styles.orderedItemContainer}
          >

            <View style={styles.orderedItemNameContainer}>
              <Text style={styles.orderedItemNameText}> {orderedSnack[0]} </Text>
            </View>
            <View style={styles.orderedItemQuantityContainer}>
              <Text style={styles.orderedItemQuantityText}> x </Text>
            </View>
            <View style={styles.orderedItemQuantityContainer}>
              <Text style={styles.orderedItemQuantityText}> {orderedSnack[1]} </Text>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: '#000000' }}>
          </View>
          </View>
      ));
  }

  checkoutFinishedAlert() {
    Alert.alert(
      'Genieß den Snack',
      'Habs aufgeschrieben, danke!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
    );
  }

  render() {
    const { username, onClose } = this.props;
    const checkoutHeaderText = `Moin ${username}, das sind deine Snacks.`;
    return (
    <View style={styles.container}>
      <Header
        headerText={checkoutHeaderText}
      />

      <ScrollView style={styles.scrollContent}>
        {this.renderOrderItems()}
      </ScrollView>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', overflow: 'hidden' }}
      >
        <WritedownButton
          onPress={onClose}
        >
          Zurück
        </WritedownButton>
        <WritedownButton
          onPress={() => this.checkoutFinishedAlert()}
        >
          Aufschreiben
        </WritedownButton>
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  scrollContent: {
    flex: 6
  },
  orderedItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  orderedItemNameContainer: {
    flex: 2,
  },
  orderedItemNameText: {
    fontSize: 30
  },
  orderedItemQuantityContainer: {
    flex: 1,
  },
  orderedItemQuantityText: {
    fontSize: 30
  },
});
