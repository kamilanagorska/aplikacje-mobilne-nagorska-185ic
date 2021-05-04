import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import NewDataBase from './components/NewDataBase'
import OldDataBase from './components/OldDataBase'

const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
      {/*pierwszy ekran*/}
      <Stack.Screen options={{
        title: 'Laboratorium 7',
        headerStyle: {
          backgroundColor: '#b0a99d',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="home" component={Home} />

      {/*drugi ekran*/}
        <Stack.Screen options={{
        title: 'Animal Crossing Villagers',
        headerStyle: {
          backgroundColor: '#b0a99d',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="newDB" component={NewDataBase} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '✧ Istniejąca baza danych ✧',
        headerStyle: {
          backgroundColor: '#f2cec2',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="oldDB" component={OldDataBase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;