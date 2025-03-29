import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Report } from '../models/Report';
import { reportService } from '../services/reportService';
import { validateForm } from '../utils/validateForm';

export default function ReportForm({ onReportAdded }) {
  const [form, setForm] = useState({
    type: '',
    description: '',
    location: '',
    image: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!validateForm(form)) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }
    const newReport = new Report(form.type, form.description, form.location, form.image);
    reportService.addReport(newReport);
    onReportAdded();
    setForm({ type: '', description: '', location: '', image: '' });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tipo (Perdido/Encontrado)" value={form.type} onChangeText={(text) => handleChange('type', text)} />
      <TextInput style={styles.input} placeholder="Descripción" value={form.description} onChangeText={(text) => handleChange('description', text)} />
      <TextInput style={styles.input} placeholder="Ubicación" value={form.location} onChangeText={(text) => handleChange('location', text)} />
      <TextInput style={styles.input} placeholder="URL de imagen" value={form.image} onChangeText={(text) => handleChange('image', text)} />
      <Button title="Publicar Reporte" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 6, borderRadius: 6 },
});
