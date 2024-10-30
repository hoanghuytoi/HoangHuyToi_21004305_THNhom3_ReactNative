import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fetchTasksStart, deleteTask, selectTasks } from './store/tasksToolkit';
import { useRecoilState } from 'recoil';
import { searchQueryState } from './recoil/recoilState';

const API_Screen = ({ navigation }) => {
  const dispatch = useDispatch();
  const taskList = useSelector(selectTasks);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

  useEffect(() => {
    dispatch(fetchTasksStart());
  }, [dispatch]);

  const filteredTasks = taskList.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name='arrow-left' size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.user}>
          <Image style={styles.imgProfile} source={{ uri: 'https://i.imgur.com/ZS8OUv8.png' }} />
          <View>
            <Text style={styles.titleHi}>Hi User</Text>
            <Text style={styles.title}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.search}>
        <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <FontAwesome name="check-square" size={20} color="green" />
            <Text style={styles.taskText}>{item.title}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('CreateList', { editTask: item })}>
                <FontAwesome name="pencil" size={20} color="red" style={styles.iconSpacing} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <FontAwesome name="trash" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateList')}>
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffffff' },
  backButton: { padding: 10 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 25 },
  user: { flexDirection: 'row', alignItems: 'center' },
  imgProfile: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 10 },
  titleHi: { fontSize: 18, fontWeight: 'bold' },
  title: { fontSize: 12, color: 'gray' },
  search: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 10, padding: 10, margin: 10 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#000' },
  addButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -10,
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    padding: 15,
    margin: 10,
  },
  taskText: { fontSize: 16 },
  iconContainer: { flexDirection: 'row'},
  iconSpacing: { marginRight: 10 },
});

export default API_Screen;
