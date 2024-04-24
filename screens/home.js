// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Autenticación exitosa, redirigir a la pantalla principal
      // En una aplicación real, aquí enviarías las credenciales al servicio de autenticación
        Alert.alert('Inicio de sesión exitoso');
        navigation.navigate('Details')
        // Aquí deberías navegar a la pantalla principal de tu aplicación
        console.log('Inicio de sesión exitoso',email,password);
    } else {
        
      // Autenticación fallida, mostrar mensaje de error
        Alert.alert('Error', 'Credenciales incorrectas');
        alert('Credenciales incorrectas');
        console.log('Credenciales incorrectas',email,password);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Correo electrónico"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button
        title="Iniciar sesión"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;
