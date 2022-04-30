import React from 'react';
import {View} from 'react-native';
import AuthProvider from './src/contexts/AuthContext';
import {MainStack} from './src/navigation/MainStack';

const App = () => {
  return (
    <AuthProvider>
      <View style={{flex: 1}}>
        <MainStack />
      </View>
    </AuthProvider>
  );
};

export default App;
