import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import Home from './screens/home'
import ProductsScreen from './screens/products'

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Holiwi" component={Home} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}