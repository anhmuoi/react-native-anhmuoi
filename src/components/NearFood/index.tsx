import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { getRestaurantList } from '../../Features/Restaurants/RestaurantsSlice';
import { Restaurant, RestaurantList } from '../../model/restaurant';
import NearLocation from '../NearLocation/index';

interface Props {
    recommend: RestaurantList;
}

function NearFood({ recommend }: Props) {
    return (
        <View className="mt-2">
            <View className="px-2 flex-row justify-between items-baseline">
                <View>
                    <Text className="text-[#010101] font-bold text-lg">{recommend.name}</Text>
                    <Text className="text-[#87888C] font-medium">{recommend.short_description}</Text>
                </View>
                <View className="px-3">
                    <IconFeather style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2 }] }} name="arrow-right" color="#20BD9F"></IconFeather>
                </View>
            </View>
            <ScrollView
                horizontal
                className=""
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 8,
                    paddingTop: 15,
                }}
            >
                {recommend?.restaurants.map((item, key) => (
                    <NearLocation restaurant={item} key={key} />
                ))}
            </ScrollView>
        </View>
    );
}

export default NearFood;
