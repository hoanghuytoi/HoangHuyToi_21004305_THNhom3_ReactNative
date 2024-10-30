import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import store from './store';
import Home_Screen from './Home';
import CreateList from './CreateList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home_Screen" component={Home_Screen} options={{ headerShown: false }}/>
            <Stack.Screen name="CreateList" component={CreateList} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </Provider>
  );
};

export default App;
