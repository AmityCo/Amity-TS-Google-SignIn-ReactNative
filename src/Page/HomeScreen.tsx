import React from 'react';
import {View, Text} from 'react-native';
import {SignIn} from '../googleSign';
import {Props} from '../utils/types';

function HomeScreen({navigation}: Props): JSX.Element {
  function goToFeeds() {
    navigation.navigate('Feeds');
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <Text
        style={{
          fontSize: 24,
          color: '#FFF',
          textAlign: 'center',
          alignContent: 'center',
          marginBottom: 10,
        }}>
        Welcome To React Native
      </Text>
      <SignIn onSignedIn={goToFeeds} />
    </View>
  );
}

export default HomeScreen;
