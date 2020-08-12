import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './context/language/LanguageContext';
import * as Screen from './screens'

const Stack = createStackNavigator();

function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={Screen.Auth.LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={Screen.Main.HomeScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}

export default App;