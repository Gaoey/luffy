import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './context/language/LanguageContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screen from './screens'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Screen.Main.HomeScreen} options={{ headerShown: true }} />
      <Tab.Screen name="SecondScreen" component={Screen.Main.SecondScreen} options={{ headerShown: true }} />
      <Tab.Screen name="ThirdScreen" component={Screen.Main.ThirdScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={Screen.Auth.LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}

export default App;