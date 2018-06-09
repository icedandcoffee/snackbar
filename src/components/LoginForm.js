import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { onChangeName, name } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Dein Name'
          placeholderTextColor='rgba(225,225,225,0.7)'
          onChangeText={text => onChangeName(text)}
          textAlign={'center'}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            this.props.navigation.navigate('Snacks', {
              name: { name },
            })
          }
        >
        <Text style={styles.buttonText}>Get Snacks!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     padding: 20,
    },
    input: {
        fontSize: 30,
        height: 60,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#2980b6'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 30,
        color: '#f9f2f2',
        textAlign: 'center',
        fontWeight: '700'
    }
  });
