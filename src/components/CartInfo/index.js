import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { urlFor } from '../../api/sanity.js';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Features/Cart/cartSlice.js';

function CartInfo({ cart }) {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const handleRemoveCart = () => {
        const action = removeFromCart(cart.id);
        dispatch(action);
    };

    return (
        <View className="w-full bg-white px-4 py-2 border-b border-gray-300 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <Text className="font-bold text-[#59B6AB]">{cart.quantity} x </Text>
                <Image
                    source={{
                        uri: urlFor(cart.product.image.asset._ref).url(),
                    }}
                    className="h-10 w-10 mr-2 rounded-full object-contain  "
                ></Image>
                <Text className="font-bold">{cart.product.name}</Text>
            </View>
            <View className="">
                <Text className="font-bold mr-2">{String(cart.product.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</Text>
                <TouchableOpacity onPress={() => handleRemoveCart()}>
                    <Text className="font-bold text-[#59B6AB]">remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartInfo;
