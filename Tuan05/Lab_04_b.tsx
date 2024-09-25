import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    imageUrl: 'https://i.imgur.com/lGwqRrf.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '2',
    imageUrl: 'https://i.imgur.com/kD5dRHJ.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '3',
    imageUrl: 'https://i.imgur.com/0EGgD4B.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '4',
    imageUrl: 'https://i.imgur.com/QWLANKP.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '5',
    imageUrl: 'https://i.imgur.com/a9i9XNi.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '6',
    imageUrl: 'https://i.imgur.com/nTVRkva.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '7',
    imageUrl: 'https://i.imgur.com/lGwqRrf.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
  {
    id: '8',
    imageUrl: 'https://i.imgur.com/kD5dRHJ.png',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    imageUrl2: 'https://i.imgur.com/XOIBtmk.png',
    price: '69.900',
    discount: '-39%',
  },
];

const YourApp = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* First Image */}
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      
      {/* Product Name */}
      <Text style={styles.itemName}>{item.productName}</Text>
      
      {/* Second Image */}
      <Image source={{ uri: item.imageUrl2 }} style={styles.itemImage2} />
      
      {/* Price and Discount Row */}
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableOpacity>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Dây cáp usb"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <TouchableOpacity>
          <Icon name="cart" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ellipsisIcon}>
          <Icon name="ellipsis-horizontal" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="menu" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="home" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="resize" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0084FF',
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 30,
    color: '#000',
  },
  ellipsisIcon: {
    marginLeft: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0084FF',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  footerIcon: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  itemImage2: {
    width: 150,
    height: 15,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flat-start',
    width: '100%',
  },
  itemPrice: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDiscount: {
    marginLeft: 20,
    fontSize: 13,
    fontWeight: '300',
    color: '#555',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default YourApp;
