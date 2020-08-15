import * as React from 'react';
import { Button, View, Text } from 'react-native';
import store from './stores/store.js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './context/language/LanguageContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { startNetworkLogging } from 'react-native-network-logger';
import { Provider as ProviderPaper } from 'react-native-paper';
import * as Screen from './screens'
import { FABSettings } from './components'

startNetworkLogging();

const RootStack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Screen.Main.HomeScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
      <Tab.Screen name="LogScreen" component={Screen.Main.LogScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
      <Tab.Screen name="ThirdScreen" component={Screen.Main.ThirdScreen} options={{ tabBarIcon: () => <Icon name="chevron-down" size={30} color="grey" /> }} />
    </Tab.Navigator>
  )
}

function AppStackScreen() {
  return (
    <React.Fragment>
      <AppStack.Navigator>
        {/* authorization */}
        <AppStack.Screen name="LoginScreen" component={Screen.Auth.LoginScreen} options={{ headerShown: false }} />
        {/* main */}
        <AppStack.Screen name="Main" component={MainTab} />
      </AppStack.Navigator>
      {/* settings */}
      <FABSettings />
    </React.Fragment>
  )
}

function RouteStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        {/* app */}
        <RootStack.Screen name="App" component={AppStackScreen} options={{ headerShown: false }} />
        {/* settings */}
        <RootStack.Screen name="FABSettings" component={FABSettings} />
        <RootStack.Screen name="HTTPInspector" component={Screen.Settings.HTTPInspector} />
      </RootStack.Navigator>
    </NavigationContainer >
  )
}

function App() {
  return (
    <Provider store={store}>
      <ProviderPaper>
        <LanguageProvider>
          <RouteStackScreen />
        </LanguageProvider>
      </ProviderPaper>
    </Provider>
  );
}

export default App;