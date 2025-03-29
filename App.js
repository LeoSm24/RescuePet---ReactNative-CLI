// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import HeaderButtons from './components/HeaderButtons';

const Stack = createNativeStackNavigator();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    card: '#4CAF50',
    text: '#ffffff',
    primary: '#4CAF50',
    border: '#4CAF50'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="RescuePet"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
            headerRight: () => <HeaderButtons />, 
          }}
        />
        <Stack.Screen
          name="DetalleReporte"
          component={ReportDetailScreen}
          options={{ title: 'Detalle del Reporte' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});