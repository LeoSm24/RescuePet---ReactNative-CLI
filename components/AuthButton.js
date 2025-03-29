import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AuthButton({ label, onPress, outline }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, outline && styles.outline]}
    >
      <Text style={[styles.text, outline && styles.outlineText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 6,
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  outline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  outlineText: {
    color: '#4CAF50',
  },
});
