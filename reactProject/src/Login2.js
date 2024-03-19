import {Link } from 'expo-router'
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';

export default function App({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Registered", "User registration Successful", [{ text: "ok", onPress: () => navigation.navigate("Home") }]);
  };

  const handleSignup=()=> {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.textLabel}></Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          returnKeyType='next'
          onSubmitEditing={() => { passwordInput.focus(); }}
        />
        <Text style={styles.textLabel}></Text>
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder='password'
        ref={(input) => { passwordInput = input; }}
        returnKeyType="done"
        onSubmitEditing={handleLogin}
        />

      </View>
      <View style={styles.textContainer}>
            <Text style={styles.textsign}>Don't have an account?
            <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity></Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#007bff'
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
    gap:0,
    marginBottom:30,
  },

  textLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  textContainer:{
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:30,
  },
  textsign:{
    fontSize:17,
    paddingRight:30,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F4F7F8',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    fontSize: 16,
  },
  signupLink:{
    fontSize:20,
    color:'#007bff',
    fontWeight:'bold',
  },
  loginButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
