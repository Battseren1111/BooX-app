import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarItem} from '../components/tab-bar-item';
import {HomeScreen} from '../screens/HomeScreen';
import {ChangeScreen} from '../screens/ChangeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <TabBarItem {...props} />}>
      <Tab.Screen
        options={{
          headerShown: false,
          icon: 'home-outline',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false, icon: 'logo-electron'}}
        name="ChangeScreen"
        component={ChangeScreen}
      />
      <Tab.Screen
        options={{headerShown: false, icon: 'person-outline'}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
