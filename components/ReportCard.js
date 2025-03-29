import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReportCard({ report, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: report.image }} style={styles.image} />
        <Text style={styles.type}>{report.type}</Text>
        <Text>{report.description}</Text>
        <Text style={styles.location}>📍 {report.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, backgroundColor: '#fff', marginBottom: 12, borderRadius: 10, elevation: 2 },
  image: { height: 180, borderRadius: 10, marginBottom: 8 },
  type: { fontWeight: 'bold', fontSize: 16 },
  location: { color: 'gray', marginTop: 4 },
});