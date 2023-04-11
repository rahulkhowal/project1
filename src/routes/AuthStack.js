import {Image, TouchableOpacity} from 'react-native';

import IconsUris from '../../utils/IconsUris';
import React from 'react';
import {SignInScreen} from '../screens/SignInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {styles} from '../screens/styles';

const Stack = createNativeStackNavigator();
const Left = () => {
  return (
    <TouchableOpacity>
      <Image style={styles.backicon} source={IconsUris.back} />
    </TouchableOpacity>
  );
};
export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In Screen"
        component={SignInScreen}
        options={{
          headerTitle: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => <Left />,
        }}
      />
    </Stack.Navigator>
  );
};
