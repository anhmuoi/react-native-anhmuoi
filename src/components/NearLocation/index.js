import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Dimensions } from 'react-native';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

function NearLocation({ restaurant }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { restaurant })}>
            <View className="rounded-sm relative mx-1 bg-white" style={{ width: width / 2, height: width / 2 }}>
                <Image className="flex-1 w-full rounded-sm" source={restaurant.img}></Image>
                <View className="z-10 px-2 pb-4 pt-2">
                    <Text className="text-black font-bold text-xl">{restaurant.title}</Text>
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row ">
                            {Array(restaurant?.star)
                                .fill('a')
                                .map((item, key) => (
                                    <IconEntypo
                                        name="star"
                                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }], paddingRight: 4 }}
                                        key={key}
                                        color="#7DBB7B"
                                    ></IconEntypo>
                                ))}
                        </View>
                        <Text className="text-[#7A7A7A] text-xs">{restaurant.type}</Text>
                    </View>
                    <View className="flex-row items-center mt-1">
                        <IconEvilIcons name="location" style={{ transform: [{ scaleX: 2 }, { scaleY: 1.7 }] }} color="#7A7A7A"></IconEvilIcons>
                        <Text className="text-[#7A7A7A] text-xs ml-1">{restaurant.location}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default NearLocation;
