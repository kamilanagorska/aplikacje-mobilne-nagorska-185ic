import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function SpreadOp({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.push('Rest Param')}>
              <Text>Rest Param</Text>
          </TouchableOpacity >
      </View>
    );
}