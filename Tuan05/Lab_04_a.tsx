import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using react-native-vector-icons for icons

const data = [
  {
    id: '1',
    productName: 'Ca nấu lẩu, nấu mì mini siêu giá rẻ',
    shopName: 'Shop DeVang',
    imageUrl: 'https://i.imgur.com/YoWBWUk.png',
  },
  {
    id: '2',
    productName: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'Shop LTD Food',
    imageUrl: 'https://i.imgur.com/DRxAwrR.png',
  },
  {
    id: '3',
    productName: 'Xe cần cẩu đa năng',
    shopName: 'Shop Thế giới đồ chơi',
    imageUrl: 'https://i.imgur.com/mtlDVRl.png',
  },
  {
    id: '4',
    productName: 'Đồ chơi dạng mô hình',
    shopName: 'Shop Thế giới đồ chơi',
    imageUrl: 'https://i.imgur.com/2PoODun.png',
  },
  {
    id: '5',
    productName: 'Lãnh đạo đơn giản',
    shopName: 'Shop Minh Long Book',
    imageUrl: 'https://i.imgur.com/bTBMPCn.png',
  },
  {
    id: '6',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Shop Minh Long Book',
    imageUrl: 'https://i.imgur.com/RJK1fPs.png',
  },
  {
    id: '7',
    productName: 'Donal Trump thiên tài lãnh đạo',
    shopName: 'Shop Minh Long Book',
    imageUrl: 'https://i.imgur.com/58hMyWL.png',
  },
];

const YourApp = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text
          style={styles.productName}
          numberOfLines={1} // Limit to one line
          ellipsizeMode="tail" // Add ellipsis at the end if text overflows
        >
          {item.productName}
        </Text>
        <Text style={styles.shopName}>{item.shopName}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Icon name="cart" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Additional Text below header */}
      <Text style={styles.infoText}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
      </Text>

      {/* Product List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'left',
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f1f1f1',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 17,
  },
  shopName: {
    fontSize: 13,
    color: 'red',
  },
  chatButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0084FF',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  footerIcon: {
    flex: 1,
    alignItems: 'center',
  },
});

export default YourApp;
