import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../components/Menu/index';
import { urlFor } from '../../api/sanity';
import CartPopup from '../../components/CartPopup/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dishes } from '../../model/restaurant';

type RootStackParamList = {
    Detail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({ navigation }: Props) => {
    const {
        params: { restaurant },
    } = useRoute<any>();

    return (
        <View>
            <ScrollView
                className="bg-[#F0EEF0]"
                contentContainerStyle={{
                    paddingBottom: 70,
                }}
            >
                <View>
                    <Image
                        source={{
                            uri: urlFor(restaurant.image.asset._ref).url(),
                        }}
                        className="w-full h-56  p-4 object-contain"
                    ></Image>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full  absolute top-5 left-5 p-2 bg-gray-50">
                        <IconAnt name="arrowleft" className="" size={15} color="#61CEB2"></IconAnt>
                    </TouchableOpacity>
                </View>
                <View className="pt-4 px-4 bg-white">
                    <Text className="font-bold text-2xl">{restaurant.name}</Text>
                    <View className="flex-row items-center pb-2 ">
                        <IconAnt name="staro" size={15} className="" color="#ABD4AA"></IconAnt>
                        <Text className="ml-1 font-medium text-xs text-[#8DCBAE]">{restaurant.rating}</Text>
                        <Text className="text-xs  text-[#919094]">{restaurant.type.name}</Text>
                        <View className="flex-row items-center ml-1">
                            <IconEvilIcons size={20} name="location" color="#919094"></IconEvilIcons>
                            <Text className="text-xs text-[#919094]">{restaurant.address}</Text>
                        </View>
                    </View>
                    <Text className=" pb-4 text-[#9A9E9E]">{restaurant.short_description}</Text>
                </View>
                <TouchableOpacity className=" space-x-2 px-4 border-y pt-4 pb-4 border-gray-300 bg-white flex-row items-center justify-between">
                    <View className=" flex-row items-center">
                        <IconEvilIcons name="question" size={20} color="#C6C4C6"></IconEvilIcons>
                        <Text className="font-bold ml-4">Have a good day allergy?</Text>
                    </View>
                    <IconMaterialIcons name="keyboard-arrow-right" size={25} color="#699468"></IconMaterialIcons>
                </TouchableOpacity>

                <View>
                    <Text className="font-bold pt-4 px-4 text-lg">Menu</Text>
                    {restaurant?.dishes?.map((item: Dishes, key: number) => (
                        <Menu menu={item} key={key}></Menu>
                    ))}
                </View>
            </ScrollView>
            <CartPopup restaurant={restaurant} />
        </View>
    );
};

export default DetailScreen;
