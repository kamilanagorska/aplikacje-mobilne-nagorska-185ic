import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View style={styles.home.sort}>
        <TouchableOpacity  onPress={() => navigation.push('sort')} style={styles.home.button}>
            <Text style={styles.home.text}>Sortowanie</Text>
        </TouchableOpacity >
        </View>
        <View style={styles.home.lazy}>
        <TouchableOpacity onPress={() => navigation.push('lazy')} style={styles.home.button}>
            <Text style={styles.home.text}>Lazy loading</Text>
        </TouchableOpacity >
        </View>
        <View style={styles.home.step}>
        <TouchableOpacity onPress={() => navigation.push('step1')} style={styles.home.button}>
            <Text style={styles.home.text}>Step progress</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}

