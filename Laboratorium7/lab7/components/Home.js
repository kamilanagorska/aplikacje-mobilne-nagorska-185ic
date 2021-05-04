import * as React from 'react';
import { TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
          <View>
            <Image style={styles.home.image} source={{uri: 'https://images.unsplash.com/photo-1595314222058-2f62757e6a6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}} />
        </View>
        <View >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('newDB')}  >
            <Text style={styles.home.text}>Utworzenie nowej bazy danych</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('oldDB')} >
            <Text style={styles.home.text}>Wykorzystanie istniejącej bazy danych</Text>
        </TouchableOpacity >
        </View>
        
      </View>
    );
}