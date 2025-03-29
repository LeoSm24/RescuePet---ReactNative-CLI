import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReportCard({ report, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {report.image ? (
          <Image source={{ uri: report.image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Sin imagen</Text>
          </View>
        )}
        <Text style={styles.type}>{report.type}</Text>
        <Text style={styles.description}>{report.description}</Text>
        <Text style={styles.location}>📍 {report.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: '#ffffff',
    marginBottom: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  placeholder: {
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#777',
    fontStyle: 'italic',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4CAF50',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
  location: {
    color: 'gray',
    marginTop: 6,
    fontSize: 13,
  },
});
