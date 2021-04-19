import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function Switch({navigation}) {
    return (
      <View>
        <View>
        <TouchableOpacity  onPress={() => navigation.push('text')} >
            <Text>TextInput</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity onPress={() => navigation.push('select')} >
            <Text >Select</Text>
        </TouchableOpacity >
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.push('switch')} >
            <Text>Switch</Text>
        </TouchableOpacity >
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.push('date')} >
            <Text>Data i czas</Text>
        </TouchableOpacity >
        <View>
        <TouchableOpacity onPress={() => navigation.push('toast')} >
            <Text>ToastAndroid</Text>
        </TouchableOpacity >
        </View>
        </View>
      </View>
    );
}