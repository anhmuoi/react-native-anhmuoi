import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const [category, setCategory] = useState([]);

    useEffect(() => {
        // declare the data fetching function
        const getListCategory = async () => {
            axios
                .get(
                    `https://zezx3haz.api.sanity.io/v2021-10-21/data/query/production?query=%20%20%20*%5B_type%20%3D%3D%20%22category%22%5D%20%20%20%20`
                )
                .then((res) => {
                    setCategory(res.data.result);
                })
                .catch((error) => console.log(error));
        };
        // call the function
        getListCategory();
    }, []);

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
                {category?.map((item, key) => (
                    <Location className="" location={item} key={key} />
                ))}
            </ScrollView>
        </View>
    );
}

export default HotLocation;
