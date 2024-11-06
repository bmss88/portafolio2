import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, View, Image, Alert, Button, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './Home'; // Importa la pantalla Home

const Stack = createNativeStackNavigator();

const App = () => {
  const showAlert = (message) => {
    Alert.alert("Alerta", message);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#E0F7FA', '#A5D6A7']} style={styles.container}>
      
      {/* Imagen de la Municipalidad de Quinchao */}
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logoQuinchao}
        resizeMode="contain"
      />

      {/* Texto de la Municipalidad */}
      <Text style={styles.title}>Municipalidad de Quinchao</Text>
      <Text style={styles.subtitle}>Departamento de Medioambiente</Text>

      {/* Botón estándar que navega a Home */}
      <Button
        title="PULSA AQUÍ"
        color="#4CAF50"
        onPress={() => navigation.navigate("Home")}
      />

      {/* Botón personalizado con TouchableHighlight */}
      <TouchableHighlight
        style={styles.touchableButton}
        underlayColor="#66BB6A"
        onPress={() => showAlert("Este es el botón personalizado con TouchableHighlight")}
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight>

      {/* Botón personalizado con Pressable e icono de envío */}
      <Pressable
        style={styles.pressableButton}
        onPress={() => showAlert("Este es el botón con Pressable e icono")}
      >
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Envelope_font_awesome.svg' }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
      
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
  logoQuinchao: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  subtitle: {
    fontSize: 16,
    color: '#388E3C',
    marginBottom: 30,
  },
  touchableButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
