import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <LinearGradient colors={['#FFC1E3', '#E1F5FE']} style={styles.container}>
      {/* Imagen del álbum */}
      <Image
        source={{ uri: 'https://static.wikia.nocookie.net/electropedia/images/7/79/Avicii_-_Hey_Brother_%28logo%29.jpg/revision/latest?cb=20170529204228&path-prefix=es' }}
        style={styles.albumImage}
      />

      {/* Título de la canción */}
      <Text style={styles.songTitle}>HEY BROTHER s</Text>

      {/* Nombre del artista */}
      <Text style={styles.artistName}>AVICII</Text>

      {/* Botón de me gusta */}
      <FontAwesome name="heart" size={32} color="red" style={styles.iconSpacing} />

      {/* Controles de reproducción */}
      <View style={styles.controls}>
        <FontAwesome name="step-backward" size={32} color="black" />
        <FontAwesome name="play-circle" size={48} color="black" />
        <FontAwesome name="step-forward" size={32} color="black" />
      </View>
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
  albumImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  artistName: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  iconSpacing: {
    marginVertical: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%', // Añadido para separar los iconos de los controles
  },
});

export default App;
