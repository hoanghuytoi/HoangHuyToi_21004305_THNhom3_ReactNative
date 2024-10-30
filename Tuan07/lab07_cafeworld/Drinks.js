import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drinks = ({ navigation }) => {
  const [shops, setShops] = useState([
    { id: '1', name: 'Milk', price: 20, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '2', name: 'Origin', price: 68, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '3', name: 'Salt', price: 5, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '4', name: 'Espresso', price: 9, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '5', name: 'Capuchino', price: 23, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '6', name: 'Weasel', price: 20, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '7', name: 'Culi', price: 68, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
    { id: '8', name: 'Catimor', price: 5, imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png', quantity: 0 },
  ]);

  const updateQuantity = (id, change) => {
    setShops(prevShops =>
      prevShops.map(shop =>
        shop.id === id ? { ...shop, quantity: Math.max(shop.quantity + change, 0) } : shop
      )
    );
  };

  const navigateToOrder = () => {
    const selectedDrinks = shops.filter(shop => shop.quantity > 0);
    navigation.navigate('YourOrder', { drinks: selectedDrinks });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Drinks</Text>
        <FontAwesome name="search" size={24} color="#000" style={styles.searchIcon} />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <View style={styles.shopCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{item.name}</Text>
                <Text style={styles.shopPrice}>${item.price}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.button} disabled={item.quantity === 0}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
      <TouchableOpacity 
        style={styles.getStartedButton} 
        onPress={navigateToOrder}
      >
        <Text style={styles.getStartedButtonText}>GO TO CARD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  searchIcon: {
    marginLeft: 10,
  },
  cardContainer: {
    paddingBottom: 10,
  },
  shopCard: {
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  shopImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  shopInfo: {
    flex: 1,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shopPrice: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0fa958',
    borderRadius: 10,
    padding: 5,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 100,
  },
  getStartedButton: {
    backgroundColor: '#0fa958',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  getStartedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Drinks;