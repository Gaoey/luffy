import * as React from 'react';
import { Button, View, Text } from 'react-native';
import store from './stores/store.js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './context/language/LanguageContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Screen from './screens'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainRoute() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Screen.Main.HomeScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
      <Tab.Screen name="SecondScreen" component={Screen.Main.SecondScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
      <Tab.Screen name="ThirdScreen" component={Screen.Main.ThirdScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
    </Tab.Navigator>
  );
}

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Screen.Auth.LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Route />
      </LanguageProvider>
    </Provider>
  );
}

export default App;