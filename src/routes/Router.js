import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {Loading} from '../components/Loading';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAuth} from '../contexts/Auth';
// import {NavigationContainer} from '@react-navigation/native';

// import IconsUris from './utils/IconsUris';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  console.log(authData, '====');
  return (
    <NavigationContainer>
      {authData.length !== 0 ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
