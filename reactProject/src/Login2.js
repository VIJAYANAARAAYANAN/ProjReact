import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';
import CustomAlert from './CustomAlert';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const passwordInput = useRef(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleLogin = async () => {
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });

      const response = await fetch('http://192.168.10.84:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setShowAlert(true);
      } else {
        const responseData = await response.json();
        Alert.alert('Login Failed', responseData.message);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage = error.errors.join('\n');
        Alert.alert('Validation Error', errorMessage);
      } else {
        console.error('Error logging in:', error);
        Alert.alert('Login Failed', 'An error occurred while logging in. Please try again later.');
      }
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

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
          onSubmitEditing={() => { passwordInput.current.focus(); }}
        />
        <Text style={styles.textLabel}></Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Password'
          ref={passwordInput}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textsign}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Custom alert component */}
      <CustomAlert
        visible={showAlert}
        message="Login Successful"
        onClose={() => {
          setShowAlert(false);
          navigation.navigate('Home'); // Navigate to home after closing alert
        }}
      />
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
    color: '#007bff',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
    gap: 0,
    marginBottom: 30,
  },
  textLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  textsign: {
    fontSize: 17,
    paddingRight: 5,
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
  signupLink: {
    fontSize: 20,
    color: '#007bff',
    fontWeight: 'bold',
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
