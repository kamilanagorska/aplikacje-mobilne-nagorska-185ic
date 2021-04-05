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
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Spread Operator" component={SpreadOp} />
         <Stack.Screen name="Rest Param" component={RestParam} />
         <Stack.Screen name="useState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;