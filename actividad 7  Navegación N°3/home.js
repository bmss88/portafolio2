// home.js
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.container}>
      <Text style={styles.title}>ELIGE UNA OPCIÓN</Text>
      
      <View style={styles.buttonContainer}>
        {/* Botón de Home */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeDetails")}>
          <Image source={require('./assets/home.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>

        {/* Botón de Settings */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
          <Image source={require('./assets/set.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>SETTING</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
