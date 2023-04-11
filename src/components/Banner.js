import {Image, View} from 'react-native';

import React from 'react';
import {styles} from '../screens/styles';

export const Banner = props => {
  return (
    <View
      style={[
        styles.margin10,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Image source={props.link} style={styles.banner} />
    </View>
  );
};
