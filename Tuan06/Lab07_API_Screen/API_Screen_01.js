import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const API_Screen_01 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/CnWy3tG.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>MANAGE YOUR</Text>
      <Text style={styles.title}>TASK</Text>
      <View style={styles.input}>
        <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
        <Text style={styles.textButton}>GET STARTED →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
     width: 100,
    height: 100,
    marginBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    marginTop: 50,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 50,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default API_Screen_01;
