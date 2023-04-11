import {FlatList, Image, ScrollView, Text, TextInput, View} from 'react-native';

import {Banner} from '../components/Banner';
import IconsUris from '../../utils/IconsUris';
import React from 'react';
import {ResuableView} from '../components/ResuableView';
import {styles} from './styles';

// import {useAuth} from '../contexts/Auth';

export const HomeScreen = () => {
  const arr = [
    {id: 1, link: IconsUris.Education},
    {id: 2, link: IconsUris.Education},
    {id: 3, link: IconsUris.Education},
    {id: 4, link: IconsUris.Education},
    {id: 5, link: IconsUris.Education},
    {id: 6, link: IconsUris.Education},
  ];

  const arr2 = [
    {id: 1, link: IconsUris.ItemCard1},
    {id: 2, link: IconsUris.ItemCard2},
    {id: 3, link: IconsUris.ItemCard3},
  ];
  const arr3 = [
    {id: 1, link: IconsUris.ItemCard4},
    {id: 2, link: IconsUris.ItemCard5},
    {id: 3, link: IconsUris.ItemCard3},
  ];
  const arr4 = [
    {id: 1, link: IconsUris.ItemCard6},
    {id: 2, link: IconsUris.ItemCard5},
    {id: 3, link: IconsUris.ItemCard3},
  ];
  // const auth = useAuth();
  // const signOut = () => {
  //   auth.signOut();
  // };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.LogoView}>
        <Image style={styles.smalllogo} source={IconsUris.Logo} />
        <View style={styles.cartView}>
          <Image style={styles.cart} source={IconsUris.cart} />
          <Image style={styles.bell} source={IconsUris.bell} />
        </View>
      </View>
      <View style={[styles.inputpassword, styles.searchbar]}>
        <TextInput placeholder="Search product Name" />
        <Image style={styles.bell} source={IconsUris.search} />
      </View>
      <View style={[styles.margin10]}>
        <Image source={IconsUris.poster} style={styles.slidingview} />
      </View>
      <View style={styles.LineView2}>
        <Text style={styles.lefttext}>{'Market'}</Text>
        <Text style={styles.seemore}>{'See All'}</Text>
      </View>
      <FlatList
        data={arr}
        horizontal={true}
        style={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={index} style={styles.IconView}>
            <Image source={item.link} style={styles.icon} />
          </View>
        )}
      />
      <ResuableView data={arr2} left={'Suggested for you'} />
      <Banner link={IconsUris.banner} />
      <ResuableView data={arr3} left={'New Arrival '} />
      <Banner link={IconsUris.banner} />
      <ResuableView data={arr4} left={'What’s Trending'} />
      <Banner link={IconsUris.banner} />
      <ResuableView data={arr3} left={'Top Picks- Grocery'} />
      <Banner link={IconsUris.banner} />
      <ResuableView data={arr4} left={'Top Picks - Fashion'} />

      {/* <Button title="Sign Out" onPress={signOut} /> */}
    </ScrollView>
  );
};
