/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/splash';
import Dashboard from './src/screens/dashboard';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Splash'}
            options={{headerShown: false}}
            component={Splash}
          />
          <Stack.Screen
            name={'Dashboard'}
            options={{headerShown: false}}
            component={Dashboard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
