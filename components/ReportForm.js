// components/ReportForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../lib/supabase';
import { Report } from '../models/Report';
import { reportService } from '../services/reportService';
import { validateForm } from '../utils/validateForm';
import 'react-native-url-polyfill/auto';

export default function ReportForm({ onReportAdded }) {
  const [form, setForm] = useState({
    type: '',
    description: '',
    location: '',
    image: '',
  });
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      console.log('Subiendo imagen desde URI:', uri);
      const uploadedUrl = await uploadImageToSupabase(uri);
      if (uploadedUrl) {
        setForm({ ...form, image: uploadedUrl });
        setPreview(uploadedUrl);
      }
    }
  };

  const uploadImageToSupabase = async (uri) => {
    try {
      setUploading(true);
      const fileExt = uri.split('.').pop();
      const filename = `${Date.now()}.${fileExt}`;

      const response = await fetch(uri);
      const blob = await response.blob();

      const { data, error } = await supabase.storage
        .from('report-images')
        .upload(filename, blob, {
          contentType: 'image/jpeg',
        });

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from('report-images')
        .getPublicUrl(data.path);

      return publicUrlData.publicUrl;
    } catch (error) {
      console.error('Error al subir imagen:', error);
      Alert.alert('Error al subir imagen', error.message);
      return null;
    } finally {
      setUploading(false);
    }
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
    setPreview(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar Mascota</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo (Perdido/Encontrado)"
        value={form.type}
        onChangeText={(text) => handleChange('type', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={form.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={form.location}
        onChangeText={(text) => handleChange('location', text)}
      />

      {Platform.OS === 'web' ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="URL de imagen (web)"
            value={form.image}
            onChangeText={(text) => {
              setForm({ ...form, image: text });
              setPreview(text);
            }}
          />
          {preview && <Image source={{ uri: preview }} style={styles.preview} />}
        </>
      ) : (
        <>
          <Button title={uploading ? 'Subiendo imagen...' : 'Subir imagen'} onPress={handlePickImage} color="#4CAF50" />
          {preview && <Image source={{ uri: preview }} style={styles.preview} />}
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Publicar Reporte" onPress={handleSubmit} color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 6, borderRadius: 8, backgroundColor: '#fff' },
  buttonContainer: { marginTop: 10 },
  preview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#eee',
  },
});
