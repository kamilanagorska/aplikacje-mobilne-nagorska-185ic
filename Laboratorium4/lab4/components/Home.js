import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View >
        <TouchableOpacity  onPress={() => navigation.push('text')} style={styles.home.button} >
            <Text style={styles.home.text}>TextInput</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity onPress={() => navigation.push('select')} style={styles.home.button}  >
            <Text style={styles.home.text}>Select</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity onPress={() => navigation.push('switch')} style={styles.home.button} >
            <Text style={styles.home.text}>Switch</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity onPress={() => navigation.push('date')} style={styles.home.button} >
            <Text style={styles.home.text}>Data i czas</Text>
        </TouchableOpacity >
        <View >
        <TouchableOpacity onPress={() => navigation.push('toast')} style={styles.home.button} >
            <Text style={styles.home.text}>ToastAndroid</Text>
        </TouchableOpacity >
        </View>
        </View>
      </View>
    );
}