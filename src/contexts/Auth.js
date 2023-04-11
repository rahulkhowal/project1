import * as Keychain from 'react-native-keychain';

import React, {createContext, useContext, useEffect, useState} from 'react';

import {Alert} from 'react-native';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log('Credentials successfully loaded for user ', credentials);

        setAuthData(credentials.password);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (email, password) => {
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch('https://reqres.in/api/login', params)
      .then(response => response.json())
      .then(async responseJson => {
        console.log(responseJson, '===hello');
        if (responseJson.token != undefined) {
          setAuthData(responseJson.token);
          await Keychain.setGenericPassword('Token', responseJson.token);
        } else {
          Alert.alert(responseJson.error);
        }
      })
      .catch(error => {
        console.error(JSON.stringify(error));
        Alert.alert(error.error);
        // throw error;
      });
  };

  const signOut = async () => {
    setAuthData('');

    await Keychain.resetGenericPassword();
  };

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};
