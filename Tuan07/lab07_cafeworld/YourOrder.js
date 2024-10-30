import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const YourOrder = ({ route, navigation }) => {
  const { drinks } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Your Order</Text>
        <FontAwesome name="search" size={24} color="#000" style={styles.searchIcon} />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <FlatList
          data={drinks}
          renderItem={({ item }) => (
            <View style={styles.shopCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{item.name}</Text>
                <Text style={styles.shopPrice}>${item.price}</Text>
                <Text style={styles.shopQuantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.shopTotalPrice}>Total: ${item.price * item.quantity}</Text>
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
        onPress={() => console.log('Proceed to payment...')}
      >
        <Text style={styles.getStartedButtonText}>PAY NOW</Text>
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
  shopQuantity: {
    fontSize: 16,
    color: '#333',
  },
  shopTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0fa958',
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

export default YourOrder;