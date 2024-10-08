import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const API_Screen_02 = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Nhận route để lấy params
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task');
        const data = await response.json();
        setTaskList(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Kiểm tra params và cập nhật taskList nếu có task mới
  useEffect(() => {
    if (route.params?.newTask) {
      setTaskList(prev => [...prev, route.params.newTask]);
    }
  }, [route.params?.newTask]);

  const openEditDialog = (task) => {
    setCurrentTask(task);
    setTaskInput(task.title);
    setIsEditing(true);
  };

  const handleEditTask = async () => {
    if (taskInput.trim() === '') return;

    const updatedTask = { title: taskInput };

    try {
      const response = await fetch(`https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task/${currentTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTaskFromApi = await response.json();
        setTaskList(taskList.map(task => (task.id === currentTask.id ? updatedTaskFromApi : task)));
        setTaskInput('');
        setCurrentTask(null);
        setIsEditing(false);
      } else {
        Alert.alert('Error', 'Failed to edit task.');
      }
    } catch (error) {
      console.error("Error editing task:", error);
      Alert.alert('Error', 'Something went wrong while editing the task.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`https://66fcb9acc3a184a84d17c7c2.mockapi.io/takeNote/task/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTaskList(taskList.filter(task => task.id !== id));
      } else {
        Alert.alert('Error', 'Failed to delete task.');
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      Alert.alert('Error', 'Something went wrong while deleting the task.');
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name='arrow-left' size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.user}>
          <Image style={styles.imgProfile} source={{ uri: 'https://i.imgur.com/ZS8OUv8.png' }} />
          <View>
            <Text style={styles.titleHi}>Hi Twinkle</Text>
            <Text style={styles.title}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.search}>
        <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="gray" />
      </View>

      {isEditing && (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={taskInput}
            onChangeText={setTaskInput}
            placeholder="Edit task"
          />
          <TouchableOpacity onPress={handleEditTask} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={taskList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <FontAwesome name="check-square" size={20} color="green" />
            <Text style={styles.taskText}>{item.title}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => openEditDialog(item)} style={styles.iconWrapper}>
                <FontAwesome name="pencil" size={20} color="red" />
                <View style={styles.underline} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <FontAwesome name="trash" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('CreateList')}
      >
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  backButton: { padding: 10 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 40 },
  user: { flexDirection: 'row', alignItems: 'center' },
  imgProfile: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 10 },
  titleHi: { fontSize: 18, fontWeight: 'bold' },
  title: { fontSize: 12, color: 'gray' },
  search: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 10, padding: 10, margin: 20 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#fff'},
  addButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -30 }],
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    padding: 15,
    margin: 10
  },
  taskText: { fontSize: 16 },
  iconContainer: { flexDirection: 'row' },
  iconWrapper: { alignItems: 'center', marginRight: 15 },
  underline: { height: 2, width: 20, backgroundColor: 'red', marginTop: 2 },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    borderColor: '#fff'
  },
  saveButton: {
    backgroundColor: '#00BDD6',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButtonText: {
    color: '#fff',
  },
});

export default API_Screen_02;
