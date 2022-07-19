import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Currency from 'react-currency-formatter';

function Menu({ menu }) {
    return (
        <TouchableOpacity className="bg-white flex-row items-center mb-4 mx-2">
            <View className="px-4 pt-4 flex-1">
                <Text className="font-medium mb-1 ">{menu.title}</Text>
                <Text className="text-[#BBB7B9] mb-1">{menu.desc}</Text>
                <Text className="pb-4">
                    <Text className="font-bold text-[#C0BFC0]">{String(menu.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</Text>
                </Text>
            </View>
            <View>
                <Image source={menu.img} className="h-16 w-16 mr-2  "></Image>
            </View>
        </TouchableOpacity>
    );
}

export default Menu;
