import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Images from './components/Images'
import SliderImg from './components/SliderImg'
import Lazy from './components/Lazy'
import NetInfo from './components/NetInfo'
import AsyncS from './components/AsyncS'
import DataSyn from './components/DataSyn'


const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
      {/*pierwszy ekran*/}
      <Stack.Screen options={{
        title: '✧ Laboratorium 6 ✧',
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
      name="home" component={Home} />

      {/*drugi ekran*/}
        <Stack.Screen options={{
        title: '✧ Images ✧',
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
      name="images" component={Images} />

      {/*trzeci ekran*/}
         <Stack.Screen options={{
        title: '✧ Slider + Image ✧',
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
      name="sliderImg" component={SliderImg} />

      {/*czwarty ekran*/}
         <Stack.Screen options={{
        title: '✧ Lazy Loading ✧',
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
      name="lazy" component={Lazy} />

      {/*piąty ekran*/}
      <Stack.Screen options={{
        title: '✧ NetInfo ✧',
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
      name="netinf" component={NetInfo} />

      {/*szósty ekran*/}
      <Stack.Screen options={{
        title: '✧ AsyncStorage ✧',
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
      name="async" component={AsyncS} />

      {/*siódmy ekran*/}
      <Stack.Screen options={{
        title: '✧ Synchronizacja danych ✧',
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
      name="datasyn" component={DataSyn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;