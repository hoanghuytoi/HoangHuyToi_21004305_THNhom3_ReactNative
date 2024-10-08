import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const DonutDetails = ({ route }) => {
  const { donut } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: donut.imageUrl }} style={styles.donutImage} />
      <View style={styles.donutDetails}>
        <Text style={styles.donutName}>{donut.name}</Text>
      </View>
      <View style={styles.donutInfo}>
        <Text style={styles.donutDescription}>{donut.description}</Text>
        <Text style={styles.donutPrice}>${donut.price}</Text>
      </View>
      <View style={styles.deliverySection}>
        <View style={styles.deliveryDetails}>
          <Text style={styles.deliveryLabel}>🕒 Delivery in</Text>
          <Text style={styles.deliveryTime}>30 min</Text>
        </View>
        <View style={styles.quantitySection}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.currentQuantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.restaurantSection}>
        <Text style={styles.restaurantTitle}>Restaurant Info</Text>
        <Text style={styles.restaurantDescription}>
          Order a large pizza, but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  donutImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  donutDetails: {
    marginTop: 20,
  },
  donutName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  donutDescription: {
    fontSize: 16,
    color: 'gray',
    flex: 1,
  },
  donutPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deliverySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  deliveryDetails: {
    flexDirection: 'column',
  },
  deliveryLabel: {
    fontSize: 14,
    color: 'gray',
  },
  deliveryTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  },
  quantityButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    height: 40,
    width: 30,
    borderRadius: 10,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currentQuantity: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  restaurantSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  restaurantTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  restaurantDescription: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 50,
    backgroundColor: '#F1B000',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  donutInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DonutDetails;