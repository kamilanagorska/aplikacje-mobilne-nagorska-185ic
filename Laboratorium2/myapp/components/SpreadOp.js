import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default function SpreadOp({navigation}) {
  const example = `
  function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers)); 
  // oczekiwany wynik: 6
  `
    return (
      <View style={styles.spread.container}>
        <View style={styles.spread.top}>
          <View style={styles.spread.desc}>
          <Text style={styles.rest.optxt}>Składnia (...) umożliwia rozbijanie iterowanej wartości na składowe. Mogą nimi być
          stringi (bo składają się z poszczególnych liter), tablice (bo składają się z elementów) oraz kolekcje lub obiekty, po których często robimy pętle. </Text>
          </View>
          <View style={styles.spread.buttons}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.home.btntext}>Rest Parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.btntext}>useState</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.home.btntext}>Strona główna</Text>
        </TouchableOpacity >
          </View>
        </View>
        <View style={styles.spread.bottom}>
        <Text style={styles.rest.extxt1}>･༓ Przykład ༓･</Text>
        <Text style={styles.rest.extxt2}>{example}</Text>
        </View>
      </View>
    );
}
