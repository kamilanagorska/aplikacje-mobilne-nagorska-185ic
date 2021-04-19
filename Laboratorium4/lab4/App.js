import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import TextInp from './components/TextInp'
import Select from './components/Select'
import SwitchEx from './components/SwitchEx'
import Date from './components/Date'
import Toast from './components/Toast'


const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
      {/*pierwszy ekran*/}
      <Stack.Screen options={{
        title: '✧ Laboratorium 4 ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
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
        title: '✧ TextInput ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="text" component={TextInp} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '✧ Select ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="select" component={Select} />

      {/*czwarty ekran*/}
         <Stack.Screen options={{
        title: '✧ Switch ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="switch" component={SwitchEx} />

      {/*piąty ekran*/}
      <Stack.Screen options={{
        title: '✧ Data i czas ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="date" component={Date} />

      {/*szósty ekran*/}
      <Stack.Screen options={{
        title: '✧ ToastAndroid ✧',
        headerStyle: {
          backgroundColor: '#cfc3de',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="toast" component={Toast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
