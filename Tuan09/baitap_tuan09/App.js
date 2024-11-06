import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Redux Slice for Managing Products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedCategory: 'All',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    fetchProductsStart: (state) => {
      state.status = 'loading';
    },
    fetchProductsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

const { setSelectedCategory, fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, addProduct } = productSlice.actions;

// Saga for Fetching Products
const fetchProductsFromApi = async () => {
  const response = await fetch('https://672adc3e976a834dd024a3bd.mockapi.io/ApiReactToolkit/ApiListToolKit');
  const data = await response.json();
  return data;
};

function* fetchProductsSaga() {
  try {
    yield put(fetchProductsStart());
    const products = yield call(fetchProductsFromApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* watchFetchProducts() {
  yield takeEvery('products/fetchProducts', fetchProductsSaga);
}

// Configure Redux Store with Saga Middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(watchFetchProducts);

// Stack Navigator for Navigation
const Stack = createStackNavigator();

// ProductApi Component
const ProductApi = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, selectedCategory, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: 'products/fetchProducts' });
  }, [dispatch]);

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.productContainer}>
        <FontAwesome name="heart" color="gray" size={20} style={styles.icon} />
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  if (status === 'loading') return <Text>Loading...</Text>;
  if (status === 'failed') return <Text>Error: {error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleHeader}>The World’s Best Bikes</Text>
      <View style={styles.menuContainer}>
        {['All', 'Roadbike', 'Mountain'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.menuButton, selectedCategory === category && styles.activeButton]}
            onPress={() => handleCategoryChange(category)} >
            <Text style={[styles.menuText, selectedCategory === category && styles.activeText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Add Product Button */}
      <TouchableOpacity
        style={styles.addProductButton}
        onPress={() => navigation.navigate('AddProduct', { selectedCategory })}>
        <Text style={styles.addProductText}>+ Add Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// AddProduct Component
const AddProduct = ({ navigation, route }) => {
  const { selectedCategory } = route.params || {}; // Get the selected category from navigation params
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(selectedCategory || 'Roadbike'); // Set initial category to selectedCategory or default to 'Roadbike'
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  // Function to handle adding a new product to the API and Redux
  const handleAddProduct = async () => {
    if (!name || !price || !image) {
      alert('Please fill in all fields');
      return;
    }

    // Create the new product object
    const newProduct = {
      name,
      category,
      price: parseFloat(price),
      image,
    };

    try {
      // Send a POST request to the API to add the new product
      const response = await fetch('https://672adc3e976a834dd024a3bd.mockapi.io/ApiReactToolkit/ApiListToolKit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const productData = await response.json();
        // After adding the product to the API, update the Redux state
        dispatch(addProduct(productData));
        navigation.goBack(); // Go back to ProductApi screen
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <Button title="Add Product" onPress={handleAddProduct} />
    </SafeAreaView>
  );
};

// Main App Component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductApi">
          <Stack.Screen name="ProductApi" component={ProductApi} options={{ headerShown: false }} />
          <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  titleHeader: { fontSize: 20, fontWeight: 'bold', color: 'red', marginBottom: 10 },
  menuContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  menuButton: { padding: 10, borderRadius: 5, borderWidth: 1, borderColor: 'gray' },
  activeButton: { backgroundColor: 'red' },
  menuText: { fontSize: 16, color: 'gray' },
  activeText: { color: 'white' },
  productContainer: { flex: 1, alignItems: 'center', marginBottom: 15, margin: 5, borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 10 },
  icon: { position: 'absolute', top: 10, left: 10 },
  productImage: { width: 160, height: 150 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 14, color: 'gray' },
  addProductButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addProductText: { color: 'white', fontSize: 18 },
  input: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

export default App;