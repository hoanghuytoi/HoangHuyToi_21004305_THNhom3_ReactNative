import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addTask, updateTask } from './store/tasksToolkit';

const CreateList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { editTask } = route.params || {};
  
  const [title, setTitle] = useState(editTask ? editTask.title : '');

  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Task title cannot be empty');
      return;
    }

    const taskData = { title };
    
    if (editTask) {
      dispatch(updateTask({ id: editTask.id, ...taskData }));
    } else {
      dispatch(addTask(taskData));
    }

    navigation.goBack();
  };

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
    }
  }, [editTask]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name='arrow-left' size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{editTask ? 'Edit Task' : 'Create Task'}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{editTask ? 'Update Task' : 'Add Task'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backButton: { padding: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  input: { 
    borderWidth: 1, 
    borderColor: '#e0e0e0', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 20 
  },
  submitButton: {
    backgroundColor: '#00BDD6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: { 
    color: '#ffffff', 
    fontWeight: 'bold' 
  },
});

export default CreateList;