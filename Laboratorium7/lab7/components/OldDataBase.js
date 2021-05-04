import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import styles from './style'

export default function OldDataBase({navigation}) {
    return (
      <View style={styles.home.container}>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('newDB')}  >
            <Text style={styles.home.text}>Utworzenie nowej bazy danych</Text>
        </TouchableOpacity >
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('oldDB')} >
            <Text style={styles.home.text}>Wykorzystanie istniejącej bazy danych</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}