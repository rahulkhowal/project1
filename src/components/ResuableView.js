import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {styles} from '../screens/styles';

export const ResuableView = props => {
  return (
    <>
      <View style={styles.LineView}>
        <Text style={styles.lefttext}>{props.left}</Text>
        <Text style={styles.seemore}>{'See All'}</Text>
      </View>
      <FlatList
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={index} style={styles.listView}>
            <Image source={item.link} style={styles.card} />
          </View>
        )}
      />
    </>
  );
};
