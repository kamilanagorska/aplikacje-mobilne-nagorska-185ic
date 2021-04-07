import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import RestParam from './components/RestParam'
import SpreadOp from './components/SpreadOp'
import UseState from './components/UseState'


const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
        {/*pierwszy ekran*/}
      <Stack.Screen options={{
        title: '✧･ﾟ Witaj ･ﾟ✧',
        headerStyle: {
          backgroundColor: '#f5e1e7',
        },
        //kolor strzałki
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Strona Główna" component={Home} />

      {/*drugi ekran*/}
        <Stack.Screen options={{
        title: '-ˏˋ⋆ Spread Operator ⋆ˊˎ-',
        headerStyle: {
          backgroundColor: '#f5e1e7',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Spread Operator" component={SpreadOp} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '-ˏˋ⋆ Rest Parameters ⋆ˊˎ-',
        headerStyle: {
          backgroundColor: '#f5e1e7',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Rest Parameters" component={RestParam} />
      
      {/*czwarty ekran*/}
         <Stack.Screen options={{
        title: '-ˏˋ⋆ useState ⋆ˊˎ-',
        headerStyle: {
          backgroundColor: '#f5e1e7',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="useState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;