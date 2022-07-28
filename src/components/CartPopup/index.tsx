import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCountSelector, cartItemTotalSelector } from '../../Features/Cart/selectors';
import { Restaurant } from '../../model/restaurant';

interface Props {
    restaurant: Restaurant;
}

function CartPopup({ restaurant }: Props) {
    const cartItemCount = useSelector(cartItemCountSelector);

    const cartTotalPrice = useSelector(cartItemTotalSelector);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <TouchableOpacity className="absolute bottom-3 w-full z-20" onPress={() => navigation.replace('Cart', { restaurant })}>
            <View className="mx-5 flex-row bg-[#5CC9B7] p-4 rounded-lg items-center space-x-1 justify-between">
                <Text className="font-bold text-white border-spacing-1 bg-[#45a79e] p-1 px-2 rounded-sm">{cartItemCount}</Text>
                <Text className="text-white font-bold">View Cart</Text>
                <Text className="font-bold text-white">{String(cartTotalPrice).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CartPopup;
