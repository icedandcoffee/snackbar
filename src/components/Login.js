import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import LoginForm from './LoginForm';


export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Who are you?',
  };

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.state = {
      name: ''
    };
  }

  onChangeName(text) {
    this.setState({ name: text });
    console.log(this.state.name);
  }

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../images/cool-background.png')}
      >
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../images/Snickers.png')}
          />
        </View>

        <View style={styles.loginFormContainer}>
          <LoginForm
            navigation={this.props.navigation}
            onChangeName={(name) => this.onChangeName(name)}
            name={this.state.name}
          />
        </View>

        <TouchableOpacity style={styles.signupContainer}>
          <Text style={styles.buttonText}>Signup!</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    imageContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    loginFormContainer: {
      flex: 1
    },
    signupContainer: {
        padding: 20,
        backgroundColor: '#2c3e50',
    },
    logo: {
      flex: 1
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    backgroundImage: {
      flex: 1
    }
  });
