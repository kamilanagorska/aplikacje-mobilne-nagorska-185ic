import * as React from 'react';
import { TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './style'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
          <View>
            <Image style={styles.home.image} source={{uri: 'https://animal-crossing.com/assets/img/home/tom-nook.png'}} />
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