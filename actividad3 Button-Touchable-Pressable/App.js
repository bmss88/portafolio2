import React from 'react';
import { Text, StyleSheet, View, Image, Alert, Button, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  // Función para mostrar la alerta en cada botón
  const showAlert = (message) => {
    Alert.alert("Alerta", message);
  };

  return (
    <LinearGradient colors={['#FF5733', '#33C1FF']} style={styles.container}>
      
      {/* Imagen de la Municipalidad de Quinchao */}
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logoQuinchao}
        resizeMode="contain"
      />

      {/* Texto debajo de la imagen */}
      <Text style={styles.text}>Este es el chico Barter</Text>

      {/* Botón estándar */}
      <Button
        title="Mostrar Alerta"
        onPress={() => showAlert("Este es el botón estándar")}
      />

      {/* Botón personalizado con TouchableHighlight */}
      <TouchableHighlight
        style={styles.touchableButton}
        underlayColor="#DDDDDD"
        onPress={() => showAlert("Este es el botón personalizado con TouchableHighlight")}
      >
        <Text style={styles.buttonText}>Botón con TouchableHighlight</Text>
      </TouchableHighlight>

      {/* Botón personalizado con Pressable e icono de Google */}
      <Pressable
        style={styles.pressableButton}
        onPress={() => showAlert("Este es el botón con Pressable e icono")}
      >
        <Image
          source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x27.max-600x600.format-webp.webp' }}
          style={styles.googleIcon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Botón con Pressable e Icono</Text>
      </Pressable>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoQuinchao: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginBottom: 20,
  },
  touchableButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  googleIcon: {
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