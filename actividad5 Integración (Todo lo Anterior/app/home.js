import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#e0f7fa', '#80deea']} style={styles.container}>
      <Text style={styles.message}>Soy Barter y estoy creando una ventana</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006064',
    textAlign: 'center',
  },
});

export default HomeScreen;
