import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { reportService } from '../services/reportService';

export default function ReportDetailScreen({ route }) {
  const report = reportService.getReportById(route.params.id);

  if (!report) return <Text>Reporte no encontrado</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: report.image }} style={styles.image} />
      <Text style={styles.title}>{report.type}</Text>
      <Text style={styles.description}>{report.description}</Text>
      <Text style={styles.location}>📍 {report.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  image: { height: 250, borderRadius: 10, marginBottom: 12, backgroundColor: '#eee' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 6, color: '#4CAF50' },
  description: { fontSize: 16 },
  location: { color: 'gray', marginTop: 6 },
});
