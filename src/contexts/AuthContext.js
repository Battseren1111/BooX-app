import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        res && setToken(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const userLogin = async userToken => {
    await AsyncStorage.setItem('token', userToken)
      .then(console.log('Token storred'))
      .catch(error => console.log(error));
    setToken(userToken);
  };

  const userLogout = async () => {
    await AsyncStorage.removeItem('token')
      .then(console.log('Token removed'))
      .catch(error => console.log(error));
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{token, userLogin, userLogout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
