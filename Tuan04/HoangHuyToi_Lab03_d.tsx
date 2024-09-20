import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  // Tạo một mảng chứa 5 ngôi sao
  const stars = new Array(5).fill('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fffb49b5b499ed16d2d95c301d07fd24');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d88baa9157ced04778f464a27d151178' }}
          style={{ height: 230, width: 200 }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>

        {/* Hiển thị ngôi sao bên trái và đánh giá bên phải */}
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

        {/* Hiển thị giá với chữ to hơn và in đậm cho giá mới, chữ nhỏ hơn và gạch ngang cho giá cũ */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text style={{ fontSize: 16, textDecorationLine: 'line-through', color: 'gray' }}>1.790.000 đ</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10}}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}> Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Nút có màu trắng, viền đen và chữ đen */}
        <TouchableOpacity 
          style={{
            backgroundColor: '#FFFFFF',  // Nền trắng
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderRadius: 10,            // Bo góc
            borderWidth: 1,              // Độ rộng viền
            borderColor: '#000000',      // Màu viền đen
            elevation: 3,                // Tạo hiệu ứng nổi (dành cho Android)
          }}
          onPress={() => alert('Chọn màu!')} // Hành động khi bấm nút
        >
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity 
          style={{
            backgroundColor: 'red', // màu nền của nút
            paddingVertical: 10,
            paddingHorizontal: 80,
            borderRadius: 10, // bo góc nút
            elevation: 3,     // tạo hiệu ứng nổi (dành cho Android)
          }}
          onPress={() => alert('Chọn màu!')} // Hành động khi bấm nút
        >
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;
