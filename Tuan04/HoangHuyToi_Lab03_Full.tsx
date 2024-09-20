import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// First Screen
const HomeScreen = ({ navigation, route }) => {
  const stars = new Array(5).fill('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fffb49b5b499ed16d2d95c301d07fd24');

  // Get the selected color from params, if available
  const selectedColor = route.params?.color || '#C5F1FB';
  
  // Map color to image URLs
  const colorOptions = {
    '#C5F1FB': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1a6fe2966a2993c7fa0c5ed55f94401c',
    '#F30D0D': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d88baa9157ced04778f464a27d151178',
    'black': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/927ff23faa6e4076c3b0b4dceeb45ab0',
    '#234896': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9f5d86e15e000380b47458c197c4cc2e',
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: colorOptions[selectedColor] }}
          style={{ height: 230, width: 200 }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            {stars.map((star, index) => (
              <Image
                key={index}
                source={{ uri: star }}
                style={{ height: 20, width: 20, marginHorizontal: 2 }}
              />
            ))}
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text style={{ fontSize: 16, textDecorationLine: 'line-through', color: 'gray' }}>1.790.000 đ</Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity 
          style={{
            backgroundColor: '#FFFFFF',
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000000',
            elevation: 3,
          }}
          onPress={() => navigation.navigate('SelectColor')} // Navigate to the second screen
        >
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity 
          style={{
            backgroundColor: 'red',
            paddingVertical: 10,
            paddingHorizontal: 80,
            borderRadius: 10,
            elevation: 3,
          }}
          onPress={() => alert('Chọn màu!')}
        >
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Second Screen
const SecondScreen = ({ navigation, route }) => {
  const colorOptions = {
    '#C5F1FB': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1a6fe2966a2993c7fa0c5ed55f94401c',
    '#F30D0D': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d88baa9157ced04778f464a27d151178',
    'black': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/927ff23faa6e4076c3b0b4dceeb45ab0',
    '#234896': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9f5d86e15e000380b47458c197c4cc2e',
  };

  const selectedColor = route.params.color; // Get the selected color from params

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image 
          source={{ uri: colorOptions[selectedColor] }} // Display the corresponding image
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>Màu: {selectedColor}</Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.squaresContainer}>
        <Text style={styles.leftText}>Chọn một màu bên dưới:</Text>
        {Object.keys(colorOptions).map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.square, { backgroundColor: color }]}
            onPress={() => navigation.navigate('SelectColor', { color })} // Navigate back with selected color
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home', { color: selectedColor }); // Navigate back to Home with selected color
          }}
        >
          <Text style={styles.buttonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = {
  container: { flex: 1 },
  productInfo: { 
    flex: 3, 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    marginLeft: 10, 
    marginTop: 10 
  },
  productImage: { height: 150, width: 125 },
  productDetails: { 
    marginLeft: 10, 
    justifyContent: 'space-between',
  },
  productTitle: { fontSize: 18, fontWeight: 'bold' },
  productPrice: { fontSize: 16, fontWeight: 'bold' },
  squaresContainer: { 
    flex: 6, 
    backgroundColor: '#C4C4C4', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  square: {
    width: 60, 
    height: 60, 
    marginBottom: 10
  },
  leftText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16, 
    fontWeight: 'bold'
  },
  buttonContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  button: { 
    backgroundColor: '#234896',  
    paddingVertical: 10, 
    paddingHorizontal: 120, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#CA1536', 
    elevation: 3 
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
};

// App Component
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="SelectColor" 
          component={SecondScreen} 
          initialParams={{ color: '#C5F1FB' }} // Set default color
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
