import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Sort from './components/Sort'
import Lazy from './components/Lazy'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'


const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
      {/*pierwszy ekran*/}
      <Stack.Screen options={{
        title: '✧ Laboratorium 3 ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
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
        title: '✧ Sortowanie ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="sort" component={Sort} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '✧ Laboratorium 3 ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="lazy" component={Lazy} />

      {/*czwarty ekran*/}
         <Stack.Screen options={{
        title: '✧ Laboratorium 3 ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="step1" component={StepOne} />

      {/*piąty ekran*/}
         <Stack.Screen options={{
        title: '✧ Laboratorium 3 ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="step2" component={StepTwo} />
      
      {/*szósty ekran*/}
         <Stack.Screen options={{
        title: '✧ Laboratorium 3 ✧',
        headerStyle: {
          backgroundColor: '#c9dcf5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="step3" component={StepThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;