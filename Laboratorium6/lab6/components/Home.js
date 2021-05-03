import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('images')}  >
            <Text style={styles.home.text}>Images</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('sliderImg')} >
            <Text style={styles.home.text}>Slider + Image</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('lazy')}  >
            <Text style={styles.home.text}>Lazy Loading</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('netinf')}  >
            <Text style={styles.home.text}>NetInfo</Text>
        </TouchableOpacity >
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('async')}  >
            <Text style={styles.home.text}>AsyncStorage</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('datasyn')}  >
            <Text style={styles.home.text}>Synchronizacja danych</Text>
        </TouchableOpacity >
        </View>
        </View>
      </View>
    );
}