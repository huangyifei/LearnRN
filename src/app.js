/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';
import Main from './Main.js';

var nav;
const defaultRoute = {
  component: Main,
  title: 'Custom RN',
};

class LearnRN extends Component {
    _renderScene(route, navigator) {
    let Component = route.component;
    nav = navigator;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }

  _renderNavBar() {
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          );
        } else {
          return null;
        }
      },
      RightButton(route, navigator, index, navState) {
        if(index > 0 && route.rightButton) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
          );
        } else {
          return null;
        }

      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : 'Default Title'}</Text>
          </View>
        );
      }
    };

    return (
      <Navigator.NavigationBar
        style={{
          alignItems: 'center',
          backgroundColor: '#55ACEE',
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#55ACEE',
          shadowOpacity: 0.8,          
          }}
        routeMapper={routeMapper} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56 : 64)}}
        navigationBar={this._renderNavBar()} />
    );
  }

  componentWillMount(){ 
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  } 
 
  componentWillUnmount(){ 
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    const routers = nav.getCurrentRoutes();
    if (routers.length == 1) {
      return false;
    }
    nav.pop();
    return true;
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1, width: (Dimensions.get('window').width - 140), alignItems: 'center', justifyContent: 'center'
  },
  button: {
    flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18, color: '#FFFFFF', fontWeight: '400'
  }
});

AppRegistry.registerComponent('LearnRN', () => LearnRN);
