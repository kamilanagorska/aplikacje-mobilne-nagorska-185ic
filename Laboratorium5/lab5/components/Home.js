import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('scroll1')}  >
            <Text style={styles.home.text}>ScrollView 1</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('scroll2')} >
            <Text style={styles.home.text}>ScrollView 2</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('touch')}  >
            <Text style={styles.home.text}>Touchable</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('swipe')}  >
            <Text style={styles.home.text}>Swipeable</Text>
        </TouchableOpacity >
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('press')}  >
            <Text style={styles.home.text}>Pressable</Text>
        </TouchableOpacity >
        </View>
        </View>
      </View>
    );
}