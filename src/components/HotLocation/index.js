import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Location from './Location/index.js';

const data = [
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
    {
        title: 'hadilao',
        img: require('../../assets/catergories/hadilao.png'),
    },
];

function HotLocation(props) {
    return (
        <View className="pt-4">
            <ScrollView
                horizontal
                className=""
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 8,
                }}
            >
                {data.map((item, key) => (
                    <Location className="" location={item} key={key} />
                ))}
            </ScrollView>
        </View>
    );
}

export default HotLocation;
