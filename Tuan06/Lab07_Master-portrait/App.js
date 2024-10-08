import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Master_Portrait from './Master_Portrait';
import Detail_Portrait from './Detail_Portrait';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Master_Portrait">
        <Stack.Screen 
          name="Master_Portrait" 
          component={Master_Portrait} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Detail_Portrait"
          component={Detail_Portrait} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
