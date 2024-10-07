import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const API_Screen_03 = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');

  const handleFinish = async () => {
    if (!newTask.trim()) {
      return Alert.alert('Error', 'Please input your job.');
    }

    try {
      const response = await fetch('https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask }),
      });

      if (response.ok) {
        const addedTask = await response.json();
        // Điều hướng về màn hình danh sách và truyền task mới
        navigation.navigate('List', { newTask: addedTask });
      } else {
        Alert.alert('Error', 'Failed to add your job.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while adding the task.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Image style={styles.imgProfile} source={{ uri: 'https://i.imgur.com/ZS8OUv8.png' }} />
        <View>
          <Text style={styles.titleHi}>Hi Twinkle</Text>
          <Text style={styles.title}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.titleAdd}>ADD YOUR JOB</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="pencil" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          placeholderTextColor="gray"
          value={newTask}
          onChangeText={setNewTask}
        />
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishText}>FINISH</Text>
      </TouchableOpacity>

      <Image style={styles.image} source={{ uri: 'https://i.postimg.cc/T3YrTGCv/f6ee0953600008083c32857b2d79ab5e.png' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 50,
  },
  imgProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  titleHi: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    color: 'gray',
  },
  titleAdd: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    margin: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
  },
  finishButton: {
    backgroundColor: '#00BDD6',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 20,
  },
  finishText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default API_Screen_03;
