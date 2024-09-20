import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
return (
<View style={{ flex: 1 }}>
    <View style={{ flex: 2, backgroundColor: '#CDF4F6' , alignItems: 'center' , justifyContent: 'center' }}>
        <Image source={{ uri: 'https://img.icons8.com/?size=100&id=37601&format=png&color=000000' }} style={{ height:
            100, width: 100 }} />
    </View>

    <View style={{ flex: 1, backgroundColor: '#CDF4F6' , alignItems: 'center' , justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' , textTransform: 'uppercase' }}>GROW</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' , textTransform: 'uppercase' }}>YOUR BUSINESS</Text>
        </View>
    </View>

    <View style={{ flex: 1, backgroundColor: '#CDF4F6' , alignItems: 'center' , justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold' , textTransform: 'uppercase' }}>We will help you to grow
                your business using</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold' , textTransform: 'uppercase' }}>online server</Text>
        </View>
    </View>

    <View style={{ flex: 1, backgroundColor: '#CDF4F6' , alignItems: 'center' , justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' , justifyContent: 'space-between' , width: '50%' }}>
            <TouchableOpacity style={{ backgroundColor: '#FFD700' , padding: 10, borderRadius: 5, marginRight: 10, flex:
                1, alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' , color: '#000000' }}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#FFD700' , padding: 10, borderRadius: 5, flex: 1,
                alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' , color: '#000000' }}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={{ flex: 1, backgroundColor: '#CDF4F6' , alignItems: 'center' , justifyContent: 'flex-start' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' , textTransform: 'uppercase' }}>HOW WE WORK</Text>
    </View>
</View>
);
};

export default YourApp;