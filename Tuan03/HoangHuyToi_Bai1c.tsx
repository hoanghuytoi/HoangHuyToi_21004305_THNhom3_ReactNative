import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8']}>
        <View style={styles.centered}>
          <Text style={styles.title}>CODE</Text>
          <Text style={styles.subtitle}>VERIFICATION</Text>
          <Text style={styles.text}>Enter one-time password sent on ++849092605798</Text>
        </View>

        <View style={styles.codeContainer}>
          {Array(6).fill(null).map((_, index) => (
            <View key={index} style={styles.codeBox}></View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>VERIFY CODE</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { flex: 2, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 60, fontWeight: 'bold' },
  subtitle: { fontSize: 25, fontWeight: 'bold' },
  text: { fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  codeContainer: { flex: 1, flexDirection: 'row', justifyContent: 'center' },
  codeBox: { width: 40, height: 40, borderColor: 'black', borderWidth: 1, marginHorizontal: 5 },
  buttonContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#E3C000', justifyContent: 'center', alignItems: 'center', height: 45, width: 305},
  textButton: { fontSize: 20, fontWeight: 'bold' },
});
