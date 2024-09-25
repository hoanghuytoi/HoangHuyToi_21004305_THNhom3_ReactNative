import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const bikesData = [
  { id: '1', name: 'Mountain Bike', price: 1800, image: 'https://i.imgur.com/xMfCBMT.png' },
  { id: '2', name: 'Road Bike', price: 1700, image: 'https://i.imgur.com/yPpaHeH.png' },
  { id: '3', name: 'Mountain Bike', price: 1500, image: 'https://i.imgur.com/cIZBXvO.png' },
  { id: '4', name: 'Road Bike', price: 1900, image: 'https://i.imgur.com/mCbnaBJ.png' },
  { id: '5', name: 'Mountain Bike', price: 2700, image: 'https://i.imgur.com/cIZBXvO.png' },
  { id: '6', name: 'Road Bike', price: 1350, image: 'https://i.imgur.com/xMfCBMT.png' }
];

const YourApp = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  const renderBikeItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
      <Image 
        source={{ uri: 'https://i.imgur.com/p4raGDx.png' }} 
        style={styles.heartIcon} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>The world’s Best Bike</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity 
          style={styles.btn_trending} 
          onPress={() => handleButtonPress('All')}
        >
          <Text style={[styles.btnText, { color: activeButton === 'All' ? 'red' : '#888' }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_trending} 
          onPress={() => handleButtonPress('Roadbike')}
        >
          <Text style={[styles.btnText, { color: activeButton === 'Roadbike' ? 'red' : '#888' }]}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_trending} 
          onPress={() => handleButtonPress('Mountain')}
        >
          <Text style={[styles.btnText, { color: activeButton === 'Mountain' ? 'red' : '#888' }]}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={bikesData}
          renderItem={renderBikeItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 24,
    textAlign: 'left',
    color: 'red'
  },
  menu: {
    flex: 1,
    backgroundColor: '#E941411A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn_trending: {
    width: 90,
    height: 35,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
  },
  body: {
    flex: 11,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 20,
    height: 20,
  },
  flatList: {
    paddingVertical: 5,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    padding: 3,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: 'relative',
  },
  bikeImage: {
    width: 120,
    height: 110,
    borderRadius: 10,
  },
  bikeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  bikePrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default YourApp;
