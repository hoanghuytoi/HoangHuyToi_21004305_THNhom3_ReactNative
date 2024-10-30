import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/24af2ddc-c35d-4a77-ae34-55678a5d01c0');
        const data = await response.json();
        setCafes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#00BDD6" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Cafe World</Text>
      <FlatList
        data={cafes}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item.imageUrl }} 
            style={styles.cafeImage} 
            onError={() => console.log('Image failed to load')}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.imageList}
      />
      <TouchableOpacity 
        style={styles.getStartedButton} 
        onPress={() => navigation.navigate('ShopNear')}
      >
        <Text style={styles.getStartedButtonText}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 80,
    color: '#000',
    textAlign: 'center',
  },
  imageList: {
    width: '100%',
  },
  cafeImage: {
    width: '60%',
    height: 100,
    marginTop: 50,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
  },
  getStartedButton: {
    backgroundColor: '#00BDD6',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 80,
  },
  getStartedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Welcome;