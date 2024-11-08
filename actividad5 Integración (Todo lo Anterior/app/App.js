import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#388E3C', '#A5D6A7']} style={styles.container}>
      <Image
        source={require('./assets/logo1.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Button
        title="Ir a Home"
        color="#4CAF50"
        onPress={() => navigation.navigate("Home")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default App;
