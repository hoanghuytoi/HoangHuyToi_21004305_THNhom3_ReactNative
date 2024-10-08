import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Master_Portrait = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Donut');
  const [foodData, setFoodData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://67054609031fd46a830f59f5.mockapi.io/api/Donut')
      .then((response) => response.json())
      .then((data) => {
        setFoodData(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const filteredData = foodData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      ((selectedCategory === 'Donut') || 
      (selectedCategory === 'Pink Donut' && item.name.toLowerCase().includes('pink donut')) || 
      (selectedCategory === 'Floating' && item.name.toLowerCase().includes('floating donut')))
    );
  });

  const renderItem = ({ item }) => (
  <TouchableOpacity 
    style={styles.foodItem}
    onPress={() => navigation.navigate('Detail_Portrait', { 
      donut: {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        description: item.description,
        price: item.price,
      }
    })} 
  >
    <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
    <View style={styles.foodDetails}>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodDescription}>{item.description}</Text>
      <Text style={styles.foodPrice}>${item.price}</Text>
    </View>
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style = {styles.container}>
      <Text style={styles.text}>Welcome, Jala!</Text>
      <Text style={styles.title}>Choice you Best food</Text>

      <View style={styles.search}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Search food"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.tabsMenu}>
        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'Donut' && styles.activeTab]}
          onPress={() => setSelectedCategory('Donut')}
        >
          <Text style={styles.textMenu}>Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'Pink Donut' && styles.activeTab]}
          onPress={() => setSelectedCategory('Pink Donut')}
        >
          <Text style={styles.textMenu}>Pink Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'Floating' && styles.activeTab]}
          onPress={() => setSelectedCategory('Floating')}
        >
          <Text style={styles.textMenu}>Floating</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.foodList}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 30,
    width: '75%',
    marginLeft: 5,
  },
  inputSearch: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  tabsMenu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textMenu:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 15,
  },
  activeTab: {
    backgroundColor: '#F1B000',
  },
  foodList: {
    flexGrow: 1,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4DDDD',
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    position: 'relative',
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFA500',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  addButtonText:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Master_Portrait;
