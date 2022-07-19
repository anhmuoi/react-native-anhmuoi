import React from 'react';
import { ScrollView } from 'react-native';
import HotLocation from '../../components/HotLocation/index.js';
import NearFood from '../../components/NearFood/index.js';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        heading: 'Feature',
        desc: 'Tổng hợp các món ăn gần đây',
    },
    {
        heading: 'Tasting discount',
        desc: 'Thực đơn tuyệt vời không thể bỏ lỡ',
    },
    {
        heading: 'Offer nears you~~',
        desc: 'Gợi ý các món ngon gần bạn',
    },
];

function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 110,
            }}
        >
            <HotLocation />
            {data.map((item, key) => (
                <NearFood recommend={item} key={key} />
            ))}
        </ScrollView>
    );
}

export default Home;
