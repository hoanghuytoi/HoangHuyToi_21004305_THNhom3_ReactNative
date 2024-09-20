import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Details */}
      <View style={styles.productDetails}>
        <Image
          source={{ uri: 'https://www.pngmart.com/files/7/USB-Pen-Drive-PNG-Transparent.png' }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Cực kỳ hài lòng</Text>
      <View style={styles.rating}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <FontAwesome
              key={i}
              name={i < rating ? 'star' : 'star-o'}
              size={40}
              color="gold"
              onPress={() => setRating(i + 1)}
            />
          ))}
      </View>

      <Pressable style={styles.imagePicker} onPress={pickImage}>
        <FontAwesome name="camera" size={32} color="black" />
        <Text style={styles.imagePickerText}>Thêm hình ảnh</Text>
      </Pressable>
      {image && <Image source={{ uri: image }} style={styles.selectedImage} />}

      <TextInput
        style={styles.feedbackInput}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Text style={styles.linkText}>https://meet.google.com/nsj-ojwi-xpp</Text>

      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0000FF',
    padding: 10,
    marginBottom: 20,
  },
  imagePickerText: {
    marginLeft: 10,
    fontSize: 18,
  },
  selectedImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    height: 200,
    marginBottom: 5,
    textAlignVertical: 'top',
  },
  linkText: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 16,
    color: '#0000FF',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
