import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ShopNear = ({ navigation }) => {
  const shops = [
    {
      id: '1',
      name: 'Kitanda Espresso & Acai-U District',
      status: 'Accepting Orders',
      time: '5-10 minutes',
      address: '1121 NE 45 St',
      imageUrl: 'https://i.postimg.cc/P5gsWHZd/Image-2.png',
    },
    {
      id: '2',
      name: 'Jewel Box Cafe',
      status: 'Temporary Unavailable',
      time: '10-15 minutes',
      address: '1145 GE 54 St',
      imageUrl: 'https://i.postimg.cc/L8qvHMrF/Image.png',
    },
    {
      id: '3',
      name: 'Javasti Cafe',
      status: 'Temporary Unavailable',
      time: '15-20 minutes',
      address: '1167 GE 54 St',
      imageUrl: 'https://i.postimg.cc/yxjsjGKv/Image-1.png',
    },
  ];

  const navigateToDrinks = (shop) => {
    navigation.navigate('Drinks', { shop });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Shops Near Me</Text>
        <FontAwesome name="search" size={24} color="#000" style={styles.searchIcon} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <View style={styles.shopCard}>
              <TouchableOpacity onPress={() => navigateToDrinks(item)}>
                <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
              </TouchableOpacity>
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{item.name}</Text>
                <Text style={styles.shopStatus}>{item.status}</Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.shopTime}>{item.time}</Text>
                  <Text style={styles.shopAddress}>{item.address}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  searchIcon: {
    marginLeft: 10,
  },
  shopCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    padding: 10,
  },
  shopInfo: {
    marginTop: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopStatus: {
    color: 'green',
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  shopTime: {
    color: '#888',
  },
  shopAddress: {
    color: '#888',
  },
  shopImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 100,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default ShopNear;