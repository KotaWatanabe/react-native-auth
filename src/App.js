import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginFrom from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyDpRkDBPeZ7mkPjpvaVstop9J9aqjobeZ8",
          authDomain: "authentication-3414d.firebaseapp.com",
          databaseURL: "https://authentication-3414d.firebaseio.com",
          projectId: "authentication-3414d",
          storageBucket: "",
          messagingSenderId: "1073963240148",
          appId: "1:1073963240148:web:3805a19a7a5701e8"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginFrom />
            </View>
        );
    }
}

export default App;
