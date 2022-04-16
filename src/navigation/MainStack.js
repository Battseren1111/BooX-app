import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from './BottomNavigator';
import {AccountScreen} from '../screens/AccountScreen';
import {MyBooks} from '../screens/MyBooks';
import {RequestedBooksScreen} from '../screens/RequestedBooksScreen';
import {BookScreen} from '../screens/BookScreen';
import {AddBookScreen} from '../screens/AddBookScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {AddExangeBookScreen} from '../screens/AddExchangeBookScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {AuthStack} from './AuthStack';

const Stack = createStackNavigator();
const theme = {
  dark: false,
  colors: {
    primary: '#FF8434',
    secondary: '#2DB93B',
    background: '#FFFFFF',
    card: '#7D7D7D',
    text: '#0C0C0C',
    border: '#707070',
  },
};
export const MainStack = () => {
  const {colors} = useTheme();
  const root = {flex: 1, backgroundColor: colors.background};

  return (
    <View style={root}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          persantation="modal"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Tabs" component={BottomNavigator} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
          <Stack.Screen name="MyBooks" component={MyBooks} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="AddExangeBookScreen" component={AddExangeBookScreen}/>
          <Stack.Screen name="RequestedBooksScreen" component={RequestedBooksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
