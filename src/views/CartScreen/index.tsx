import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { cartItemCountSelector, cartItemTotalSelector } from '../../Features/Cart/selectors';
import { useSelector } from 'react-redux';
import CartInfo from '../../components/CartInfo/index';
import { useAppSelector } from '../../app/hooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function CartScreen() {
    const {
        params: { restaurant },
    } = useRoute<any>();

    const cartItemCount = useSelector(cartItemCountSelector);

    const cartTotalPrice = useSelector(cartItemTotalSelector);

    const cartList = useAppSelector((state) => state.cart);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <View className="h-full">
            <View className="flex-row justify-center relative pt-4 bg-white pb-8 border-b-2 border-[#05ADA3]">
                <View className="">
                    <Text className="font-bold">Thanh Toán</Text>
                    <Text className="text-gray-500">{restaurant.name}</Text>
                </View>
                <View className="absolute right-4 top-4">
                    <IconIonicons
                        onPress={() => navigation.navigate('Home')}
                        size={40}
                        name="ios-close-circle-outline"
                        color="#05ADA3"
                    ></IconIonicons>
                </View>
            </View>
            <View className="bg-white mt-4 flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <Image className="rounded-full w-20 h-20 object-contain" source={require('../../assets/catergories/salad.png')}></Image>
                    <Text className="font-semibold">Deliver in 50-75min</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { restaurant })}>
                    <Text className="font-bold text-[#05ADA3] mr-4">Change</Text>
                </TouchableOpacity>
            </View>
            {cartList.cartItems.length > 0 ? cartList.cartItems.map((item, key) => <CartInfo key={key} cart={item} />) : <></>}

            <TouchableOpacity onPress={() => navigation.navigate('PreparingOrder', { restaurant })} className="absolute bottom-1 w-full p-4 bg-white">
                <Text className="font-bold bottom-1 ">Total price: {String(cartTotalPrice).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VNĐ</Text>
                <View className="w-full justify-center bg-[#05ADA3] p-2 rounded-md text-center items-center">
                    <Text className="font-bold text-white text-xl">Order</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CartScreen;
