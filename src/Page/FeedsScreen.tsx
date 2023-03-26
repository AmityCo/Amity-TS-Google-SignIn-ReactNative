import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Props} from '../utils/types';
import {ClientContext} from '../amity/amityClients';

function FeedsScreen({navigation}: Props): JSX.Element {
  const client = useContext(ClientContext);
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
        {`Welcome ${client.userId}`}
      </Text>
    </View>
  );
}

export default FeedsScreen;
