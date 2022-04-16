import React from 'react';
import {LoginScreen} from '../screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../screens/RegisterScreen';

const Stack = createStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator persantation="modal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
