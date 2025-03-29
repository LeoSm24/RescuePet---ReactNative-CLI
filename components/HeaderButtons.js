import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthButton from './AuthButton';
import { useNavigation } from '@react-navigation/native'; // 👈 Importa esto

export default function HeaderButtons() {
  const navigation = useNavigation(); // 👈 Obtiene el objeto navigation

  return (
    <View style={styles.container}>
      <AuthButton label="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
      <AuthButton label="Registrarse" onPress={() => navigation.navigate('Register')} outline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 6,
  },
});
