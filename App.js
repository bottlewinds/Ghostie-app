import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import Home from './screens/home'
import ProductsScreen from './screens/products'
import ProductDetailScreen from "./screens/detail"

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
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