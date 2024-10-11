import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  GestureResponderEvent,
} from 'react-native';

const RegisterScreen = () => {
  const [otp, setOtp] = useState('');

  function enterOTP(text: string): void {
    throw new Error('Function not implemented.');
  }

  function handleSubmit(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={otp}
          onChangeText={enterOTP}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
  otpButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
