import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import { snacks } from '../data/snacksdata';
import SnackCard from './SnackCard';
import CheckoutPopup from './CheckoutPopup';

const { width, height } = Dimensions.get('window');

export default class SnacksScreen extends Component {
    static navigationOptions = {
      title: 'Alle Snackis'
    };

    constructor(props) {
      super(props);
      const { navigation } = this.props;
      const { name } = navigation.getParam('name');
      this.onAdd = this.onAdd.bind(this);
      this.onSubstract = this.onSubstract.bind(this);
      this.state = {
        orders: {},
        popupIsOpen: false,
        username: name,
        showButton: true
      };
      console.log('[Snacks.js] username state:');
      console.log(this.state.username);
    }

    componentWillMount() {
      console.log('ComponentWillMount');
      console.log(this.state.username);
    }

    openCheckout = () => {
    this.setState({
      popupIsOpen: true,
      showButton: false,
    });
  }

  closeCheckout = () => {
    this.setState({
      popupIsOpen: false,
      showButton: true,
    });
  }

  //Create an Object which contains all possible snacks and the order quantity
  componentWillMount() {
    let availableSnacks = [];
    let ordersObject = {};
    console.log('componentWillMount');
    //Create Array with Snack Names
    snacks.map((snack) =>
      availableSnacks.push(snack.title)
    );
    //Create Object with assigned quantity value
    availableSnacks.forEach(item => {
      const key = item;
      ordersObject[key] = 0;
    }
    );
    //setState from orders to ordersObject
    this.setState(
      { orders: ordersObject }
    );
  }


  onAdd(snackIdentity) {
    //Clone this.state.orders Object
    let ordersObject = { ...this.state.orders };
    //Key to access the snack
    let key = snackIdentity;
    ordersObject[key] += 1;
    //Replace this.state.orders Object with updated Object
    this.setState({ orders: ordersObject });
  }

  onSubstract(snackIdentity) {
    //Clone this.state.orders Object
    let ordersObject = { ...this.state.orders };
    //Key to access the snack
    let key = snackIdentity;
    if (ordersObject[key] > 0) {
    ordersObject[key] -= 1;
  } else {
    Alert.alert(
      'Zu wenig',
      'Noch nen Znickerz geht immma!',
      [
        { text: 'OK', onPress: () => console.log('Ok pressed') },
      ]
    );
  }

    //Replace this.state.orders Object with updated Object
    this.setState({ orders: ordersObject });
  }

  renderSnacks() {
    return (
      snacks.map((snack, index) =>
        <SnackCard
          key={index}
          snackProps={snack}
          onAddButton={() => this.onAdd(snack.title)}
          onSubstractButton={() => this.onSubstract(snack.title)}
          snackQuantity={this.state.orders[snack.title]}
        />)
    );
  }

  renderButton() {
    if (this.state.showButton) {
      return (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.openCheckout}
        >
        <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  render() {
    const ordersObject = { ...this.state.orders };
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../images/cool-background.png')}
      >
      <View style={styles.container}>

        <ScrollView
        bounces
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >

          {this.renderSnacks()}

        </ScrollView>

        {this.renderButton()}

        <CheckoutPopup
          username={this.state.username}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeCheckout}
          ordersObject={ordersObject}
        />

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  },
  scrollContent: {
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },
  checkoutButtonContainer: {
    paddingLeft: 44,
    paddingRight: 44,
    paddingTop: 20
  },
  checkoutButton: {
    flex: 1,
    borderRadius: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
    height: 50
  },
  backgroundImage: {
    flex: 1
  },
  buttonContainer: {
      backgroundColor: '#2980b6',
      paddingVertical: 15,
      margin: 15
  },
  buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20
  }
});
