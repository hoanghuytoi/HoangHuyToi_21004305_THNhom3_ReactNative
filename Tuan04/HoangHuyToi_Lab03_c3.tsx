import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image 
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d88baa9157ced04778f464a27d151178' }} 
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>Màu: đỏ</Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>1.790.000 đ</Text>
        </View>
      </View>

      {/* Tiêu đề chọn màu */}
      <View style={styles.colorSelectionTextContainer}>
        <Text style={styles.colorSelectionText}>Chọn một màu bên dưới:</Text>
      </View>

      {/* Các ô vuông màu */}
      <View style={styles.squaresContainer}>
        <View style={[styles.square, { backgroundColor: '#C5F1FB' }]} />
        <View style={[styles.square, { backgroundColor: '#F30D0D' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: '#234896' }]} />
      </View>

      {/* Nút XONG */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => alert('Chọn màu!')}
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
  productImage: { height: 160, width: 140 },
  productDetails: { 
    marginLeft: 10, 
    justifyContent: 'space-between',
    marginBottom: 10 
  },
  productTitle: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 16, fontWeight: 'bold' },
  colorSelectionTextContainer: { 
    flex: 1, 
    backgroundColor: '#C4C4C4', 
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginTop: 20 
  },
  colorSelectionText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginLeft: 20,
    marginBottom: 10
  },
  squaresContainer: { 
    flex: 7, 
    backgroundColor: '#C4C4C4', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  square: { 
    width: 70, 
    height: 70, 
    marginBottom: 20 
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
  buttonText: { 
    color: '#FFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
};

export default YourApp;
