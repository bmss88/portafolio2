// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import SettingsScreen from './setting';
import HomeDetails from './HomeDetails'; // Importa la nueva pantalla

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="HomeDetails" component={HomeDetails} options={{ title: 'Home Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
