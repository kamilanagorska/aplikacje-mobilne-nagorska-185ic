import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function UseState({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
              <Text>Spread Operator</Text>
          </TouchableOpacity >
      </View>
    );
}