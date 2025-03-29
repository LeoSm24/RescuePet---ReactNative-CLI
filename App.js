// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import { Platform } from 'react-native';
import HeaderButtons from './components/HeaderButtons';
import { supabase } from './lib/supabase';

const Stack = createNativeStackNavigator();

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f2f2f2',
    card: '#4CAF50',
    text: '#000000',
    primary: '#4CAF50',
    border: '#4CAF50',
  },
};

function HeaderMenu({ onLogout }) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{ color: '#fff', fontSize: 16, marginRight: 10 }}>☰</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.menuBox}>
            <TouchableOpacity onPress={onLogout} style={styles.menuItem}>
              <Text style={styles.menuText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!session ? (
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="RescuePet"
              component={HomeScreen}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#4CAF50' },
                headerTintColor: '#fff',
                headerRight: () => <HeaderMenu onLogout={handleLogout} />,
              }}
            />
            <Stack.Screen
              name="DetalleReporte"
              component={ReportDetailScreen}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#4CAF50' },
                headerTintColor: '#fff',
                headerRight: () => <HeaderMenu onLogout={handleLogout} />,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 10,
  },
  menuBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 150,
    elevation: 5,
  },
  menuItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});
