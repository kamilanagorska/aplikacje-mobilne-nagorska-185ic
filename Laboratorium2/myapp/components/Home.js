import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function Home({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.push('Spread Operator')}>
              <Text>Spread Operator</Text>
          </TouchableOpacity >
      </View>
    );
}