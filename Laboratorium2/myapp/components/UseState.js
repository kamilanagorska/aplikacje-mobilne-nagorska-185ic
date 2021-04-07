import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

export default function UseState({navigation}) {
  const example = `
   import React, { useState } from 'react';
  
    function Example() {
      const [count, setCount] = useState(0);
  
      return (
        <div>
          <p>Kliknięto {count} razy</p>
          <button 
          onClick={() => setCount(count + 1)}>
          Kliknij mnie
         </button>
       </div>
     );
   }
   `
    return (
      <View style={styles.state.container}>
        <View style={styles.state.buttons}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
            <Text style={styles.home.btntext}>Spread Operator</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.home.btntext}>Rest Parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Strona Główna')}>
            <Text style={styles.home.btntext}>Strona główna</Text>
        </TouchableOpacity >
          </View>

        <View style={styles.state.descr}>
          <View style={styles.state.text}>
          <Text style={styles.rest.optxt}>Jest to hook, który pozwala korzystać ze stanu w komponencie funkcyjnym. Wywołanie useState deklaruje "zmienną stanu".
          Jest to sposób na przechowywanie wartości stanu w React'cie.</Text>
          </View>
          <View style={styles.state.ex}>
          <Text style={styles.rest.extxt1}>･༓ Przykład ༓･</Text>
          <Text style={styles.rest.extxt2}>{example}</Text>
          </View>
        </View>

      </View>
    );
}