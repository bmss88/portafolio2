import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card 1 */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/04/mana-mexico-lindo-y-querido-Chris-Costoso.jpg?quality=100&strip=info' }}
          style={styles.image}
        />
        <Text style={styles.name}>Maná</Text>
        <Text style={styles.role}>Banda de Rock Latino</Text>
        <Text style={styles.description}>
          Maná es una banda mexicana de rock latino formada en Guadalajara en 1986. Conocida por sus éxitos como "Rayando el Sol" y "Vivir sin Aire," han sido reconocidos como una de las bandas de rock más influyentes de habla hispana.
        </Text>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://austinlatino.com/wp-content/uploads/2023/11/LOSBUNKERS-scaled.jpeg' }}
          style={styles.image}
        />
        <Text style={styles.name}>Los Bunkers</Text>
        <Text style={styles.role}>Rock alternativo</Text>
        <Text style={styles.description}>
        Los Bunkers son un grupo de rock chileno con más de 20 años de trayectoria,  Han abordado temas como el amor, la política y la sociedad con profundidad y emotividad.  Se originaron en la ciudad costera de Concepción, Chile, en 1994 
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FAD4D8',
    padding: 16,
    paddingTop: 130, // Añade un margen superior para bajar el contenido
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'justify',
  },
});

export default App;
