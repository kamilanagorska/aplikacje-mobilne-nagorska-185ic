import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View style={styles.home.text}>
          <Text style={styles.home.lab}>✧ Laboratorium 2 ✧</Text>
          <Image source={{ uri: 'https://www.vippng.com/png/full/226-2260212_mochiko-pixel-kawaii-cake.png'}} style={styles.home.img} />
        </View>
        <View style={styles.home.buttons}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.home.btntext}>Rest Parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.btntext}>useState</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
            <Text style={styles.home.btntext}>Spread Operator</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}
