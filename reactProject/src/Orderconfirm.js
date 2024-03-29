import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CustomAlert from './CustomAlert';

export default function OrderConfirmation({ navigation }) {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleConfirmOrder = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    navigation.navigate('Home');
  };

  const isFormValid = () => {
    return name.trim() !== '' && address.trim() !== '' && phone.trim() !== '';
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Confirm Your Order</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          ref={nameRef}
          returnKeyType="next"
          onSubmitEditing={() => addressRef.current.focus()}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          ref={addressRef}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current.focus()}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          ref={phoneRef}
          keyboardType="phone-pad"
          returnKeyType="done"
          onSubmitEditing={handleConfirmOrder}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <TouchableOpacity
        style={[styles.confirmButton, !isFormValid() && { backgroundColor: '#ccc' }]}
        onPress={handleConfirmOrder}
        disabled={!isFormValid()} >
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={showAlert}
        message="Successful!,Order has been placed."
        onClose={handleAlertClose}
        navigation={navigation}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  confirmButton: {
    backgroundColor: '#1170FF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
