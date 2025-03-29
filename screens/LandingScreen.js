import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-RescuePet.png')} // Usa tu logo o una imagen representativa
        style={styles.image}
      />
      <Text style={styles.title}>¡Bienvenido a RescuePet!</Text>
      <Text style={styles.description}>
        Encuentra, reporta y ayuda a mascotas perdidas cerca de ti. Únete a la comunidad solidaria de rescate animal.
      </Text>
      <View style={styles.buttonGroup}>
        <Button title="Iniciar sesión" onPress={() => navigation.navigate('Login')} color="#4CAF50" />
        <View style={{ height: 10 }} />
        <Button title="Registrarse" onPress={() => navigation.navigate('Register')} color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: 160, height: 160, marginBottom: 20, borderRadius: 50 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 30 },
  buttonGroup: { width: '80%' },
});
