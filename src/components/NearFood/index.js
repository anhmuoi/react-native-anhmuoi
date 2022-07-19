import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import NearLocation from '../NearLocation/index.js';

const data = [
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Hotpot',
    },
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Wainosuke',
    },
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Salad Hakubaku',
    },
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Hotpot',
    },
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Hotpot',
    },
    {
        title: 'Hadilao',
        img: require('../../assets/catergories/hadilao.png'),
        star: 5,
        location: 'Near . 101 Tôn Dật Tiên',
        desc: 'haidilao-thương hiệu lẩu đình đám xứ Trung đã làm dậy sóng cộng đồng ẩm thực Việt Nam',
        type: 'Hotpot',
    },
];

function NearFood({ recommend }) {
    return (
        <View className="mt-2">
            <View className="px-2 flex-row justify-between items-baseline">
                <View>
                    <Text className="text-[#010101] font-bold text-lg">{recommend.heading}</Text>
                    <Text className="text-[#87888C] font-medium">{recommend.desc}</Text>
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
                {data.map((item, key) => (
                    <NearLocation restaurant={item} key={key} />
                ))}
            </ScrollView>
        </View>
    );
}

export default NearFood;
