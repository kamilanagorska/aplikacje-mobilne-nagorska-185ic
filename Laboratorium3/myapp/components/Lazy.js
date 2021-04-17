import React, {Suspense} from 'react';
import { View, Text} from 'react-native';
import styles from './style'
//React.lazy jako argument przyjmuje funkcje, ktora wywoluje dynamiczny import(), musi zwrócić obiekt Promise
//Suspense powoduje, ze na czas ładowania wyświetlny zostaje komponent zastępczy (jakis wskaźnik ładowania)
const GenerateComponent = React.lazy(() => import('./Generate'));
export default function Lazy() {
    return (
      <View style={styles.home.container}>
        <View style ={styles.lazy.description}>
          <Text style={styles.sort.text}> "Leniwe ładowanie" 50000 pseudolosowych liter</Text>
        </View>
        <View style={styles.lazy.letters}>
          <Suspense fallback={<Text style={styles.sort.text}>Ładowanie...</Text>}>
            <GenerateComponent />
          </Suspense>
        </View>
      </View>
    );
}

