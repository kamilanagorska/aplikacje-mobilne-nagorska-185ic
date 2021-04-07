import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default function RestParam({navigation}) {
  const example = `
  function sum(...theArgs) {
    return theArgs.reduce((previous, 
      current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // oczekiwany wynik: 6
  
  console.log(sum(1, 2, 3, 4));
  // oczekiwany wynik: 10
  `
    return (
      <View style={styles.rest.container}>
        <View style={styles.rest.text}>
          <View style={styles.rest.op}>
          <Text style={styles.rest.optxt}>Składnia ta pozwala funkcji na przyjmowanie wielu parametów. Zapewnia sposób reprezentowania funkcji wariadycznych w JavaScript (z niestałą liczbą argumentów).</Text>
          </View>
          <View style={styles.rest.ex}>
            <Text style={styles.rest.extxt1}>･༓ Przykład ༓･</Text>
            <Text style={styles.rest.extxt2}>{example}</Text>
          </View>
        </View>
        <View style={styles.rest.buttons}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
            <Text style={styles.home.btntext}>Spread Operator</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.btntext}>useState</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.home.btntext}>Strona główna</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}