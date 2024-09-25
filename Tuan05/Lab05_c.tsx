import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bg_item}>
        <Image 
          source={{ uri: 'https://i.imgur.com/PhzOWxw.png' }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.textName}>
        <Text style={styles.boldTextN}>Pina Mountain</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.boldTextP}>15% OFF I 350$</Text>
        <Text style={styles.boldTextPrice}>449$</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.boldTextD}>Description</Text>
      </View>

      <View style={styles.text}>
        <Text style={styles.boldText}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>

      <View style={styles.btnStart}>
        <Image 
          source={{ uri: 'https://i.imgur.com/p4raGDx.png' }} 
          style={styles.imageHeart} 
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg_item: {
    flex: 9,
    margin: 8,
    backgroundColor: '#E941411A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    height: 220,
    width: 200,
  },
  textName: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    fontSize: 20,
  },
  boldTextN: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-start',
  },
  boldTextP: {
    color: '#00000096',
    fontSize: 22,
  },
  boldTextPrice: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  description: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  boldTextD: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    flex: 3,
    margin: 10,
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 18,
  },
  btnStart: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    flex: 2,
    justifyContent: 'space-between',
  },
  imageHeart: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default YourApp;
