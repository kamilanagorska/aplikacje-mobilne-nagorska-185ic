import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function RestParam({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.push('useState')}>
              <Text>Spread Operator</Text>
          </TouchableOpacity >
      </View>
    );
}