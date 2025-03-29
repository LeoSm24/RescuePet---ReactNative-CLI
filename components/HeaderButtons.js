import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthButton from './AuthButton';

export default function HeaderButtons() {
  return (
    <View style={styles.container}>
      <AuthButton label="Iniciar sesión" onPress={() => {}} />
      <AuthButton label="Registrarse" onPress={() => {}} outline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 6,
  },
});
