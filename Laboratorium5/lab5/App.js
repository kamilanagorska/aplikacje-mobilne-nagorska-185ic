import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Scroll1 from './components/Scroll1'
import Scroll2 from './components/Scroll2'
import Touch from './components/Touch'
import Swipe from './components/Swipe'
import Press from './components/Press'


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
          backgroundColor: '#a0d99a',
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
        title: '✧ ScrollView 1 ✧',
        headerStyle: {
          backgroundColor: '#a0d99a',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="scroll1" component={Scroll1} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '✧ ScrollView 2 ✧',
        headerStyle: {
          backgroundColor: '#a0d99a',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="scroll2" component={Scroll2} />

      {/*czwarty ekran*/}
         <Stack.Screen options={{
        title: '✧ Touchable ✧',
        headerStyle: {
          backgroundColor: '#a0d99a',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="touch" component={Touch} />

      {/*piąty ekran*/}
      <Stack.Screen options={{
        title: '✧ Swipeable ✧',
        headerStyle: {
          backgroundColor: '#a0d99a',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="swipe" component={Swipe} />

      {/*szósty ekran*/}
      <Stack.Screen options={{
        title: '✧ Pressable ✧',
        headerStyle: {
          backgroundColor: '#a0d99a',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="press" component={Press} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
