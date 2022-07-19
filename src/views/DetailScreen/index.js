import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../components/Menu/index.js';

const dataMenu = [
    {
        title: 'KFC  Kitchen',
        desc: 'KFC nổi tiếng thế giới với công thức chế biến gà rán truyền thống Original Recipe...',
        price: '100000',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'Haidilao Hotpot',
        desc: 'Haidilao là chuỗi nhà hàng lẩu được thành lập vào năm 1994 tại thành phố Giàn Dương',
        price: '1200000',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'KOBE beef',
        desc: 'USSINA là một thương hiệu ẩm thực cao cấp đến từ xứ sở hoa anh đào với rất nhiều nhà hàng tại cùng NAGOYA-Nhật Bản',
        price: '3500000',
        img: require('../../assets/catergories/hadilao.png'),
    },
];

const DetailScreen = ({ navigation }) => {
    const {
        params: { restaurant },
    } = useRoute();
    console.log(restaurant);

    return (
        <ScrollView className="bg-[#F0EEF0]">
            <View>
                <Image source={restaurant.img} className="w-full h-56  p-4 object-contain"></Image>
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full  absolute top-5 left-5 p-2 bg-gray-50">
                    <IconAnt name="arrowleft" className="" size={15} color="#61CEB2"></IconAnt>
                </TouchableOpacity>
            </View>
            <View className="pt-4 px-4 bg-white">
                <Text className="font-bold text-2xl">{restaurant.title}</Text>
                <View className="flex-row items-center pb-2 ">
                    <IconAnt name="staro" size={15} className="" color="#ABD4AA"></IconAnt>
                    <Text className="ml-1 font-medium text-xs text-[#8DCBAE]">{restaurant.star}</Text>
                    <Text className="text-xs  text-[#919094]">{restaurant.type}</Text>
                    <View className="flex-row items-center ml-1">
                        <IconEvilIcons size={20} name="location" color="#919094"></IconEvilIcons>
                        <Text className="text-xs text-[#919094]">{restaurant.location}</Text>
                    </View>
                </View>
                <Text className=" pb-4 text-[#9A9E9E]">{restaurant.desc}</Text>
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
                {dataMenu?.map((item, key) => (
                    <Menu menu={item} key={key}></Menu>
                ))}
            </View>
        </ScrollView>
    );
};

export default DetailScreen;
