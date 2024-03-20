import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Yup from 'yup';
import CustomAlert from '../reactProject/src/CustomAlert';

export default function Login({ navigation }) {
  const [firstname, setUserFirstname] = useState('');
  const [lastname, setUserLastname] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false); 

  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSignup = async () => {
    try {
      await validationSchema.validate({ firstname, lastname, email, password }, { abortEarly: false });
  
      const response = await axios.post('http://192.168.10.84:3000/register', {
        firstname,
        lastname,
        email,
        password,
      });
      
      console.log(response.data);
      setShowAlert(true); 
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage = error.errors.join('\n');
        console.log(errorMessage);
        alert('Validation Error: ' + errorMessage);
      } else {
        console.error('Error registering user:', error);
        alert('Registration Failed: An error occurred while registering. Please try again later.');
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Enter your Details</Text>
        <View style={styles.credentials}>
          <View style={styles.inputContainer}>
            <Text style={styles.textstyle}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstname}
              onChangeText={setUserFirstname}
              returnKeyType="next"
              onSubmitEditing={() => { lastNameInput.current.focus(); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textstyle}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastname}
              onChangeText={setUserLastname}
              ref={lastNameInput}
              returnKeyType="next"
              onSubmitEditing={() => { emailInput.current.focus(); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textstyle}>Enter Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setUserEmail}
              ref={emailInput}
              returnKeyType="next"
              onSubmitEditing={() => { passwordInput.current.focus(); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textstyle}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              ref={passwordInput}
              secureTextEntry={true}
              returnKeyType="done"
              onSubmitEditing={handleSignup}
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Custom alert component */}
      <CustomAlert
      visible={showAlert}
      message="User registration Successful"
      onClose={() => setShowAlert(false)}
      navigation={navigation} 
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  head:{
    marginTop:175,
  },
  textstyle: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: '700',
  },
  credentials: {
    paddingBottom: 300,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 70,
    paddingLeft: 30,
    fontSize: 34,
    padding: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F4F7F8',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  loginButton: {
    bottom: 150,
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
