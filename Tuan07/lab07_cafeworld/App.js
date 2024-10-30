import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import ShopNear from './ShopNear';
import Drinks from './Drinks';
import YourOrder from './YourOrder';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ShopNear" 
          component={ShopNear}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Drinks" 
          component={Drinks}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="YourOrder" 
          component={YourOrder} 
          options={{ headerShown: false,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}