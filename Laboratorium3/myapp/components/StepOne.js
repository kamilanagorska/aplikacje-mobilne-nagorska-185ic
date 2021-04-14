import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

export default function StepOne({navigation}) {
    return (
      <View >
        <View>
          <Text>✧ Laboratorium 2 ✧</Text>
          <Image source={{ uri: 'https://www.vippng.com/png/full/226-2260212_mochiko-pixel-kawaii-cake.png'}} />
        </View>
        <View>
        <TouchableOpacity  onPress={() => navigation.push('step2')}>
            <Text>Kolejny krok</Text>
        </TouchableOpacity >
        <TouchableOpacity  onPress={() => navigation.push('home')}>
            <Text>Strona główna</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.push('lazy')}>
            <Text>Lazy loading</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.push('sort')}>
            <Text>Sortowanie</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}