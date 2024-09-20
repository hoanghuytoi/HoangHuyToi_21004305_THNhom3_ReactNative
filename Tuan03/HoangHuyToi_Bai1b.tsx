import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const YourApp = () => (
  <View style={{ flex: 1 }}>
    <LinearGradient style={{ flex: 1 }} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8']}>
      <View style={styles.centered}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/648401a3fc2da07be619ea0fcd822ae1' }} style={styles.logo} />
      </View>
      <View style={styles.centered}>
        <Text style={styles.title}>FORGET</Text>
        <Text style={styles.title}>PASSWORD</Text>
      </View>
      <Text style={styles.instructions}>Provide your account’s email to reset your password</Text>
      <SafeAreaView style={styles.centered}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="gray" />
          <TextInput style={styles.input} placeholder='Email' />
        </View>
      </SafeAreaView>
      <View style={styles.centered}>
        <Pressable style={styles.button}><Text style={styles.textButton}>NEXT</Text></Pressable>
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { height: 117, width: 105 },
  title: { fontSize: 25, fontWeight: 'bold' },
  instructions: { textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginHorizontal: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray',
  borderRadius: 5, paddingHorizontal: 10, width: 250, height: 40 },
  input: { flex: 1, marginLeft: 10 }, 
  button: { backgroundColor: '#FFD700', padding: 10, borderRadius: 5, width: 250, alignItems: 'center' },
  textButton: { color: 'black', fontWeight: 'bold', fontSize: 18 },
});

export default YourApp;
