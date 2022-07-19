import React from 'react';
import { Image, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

function Location({ location }) {
    return (
        <View className="rounded-sm relative mx-1 " style={{ width: width / 4.5, height: width / 5 }}>
            <Text className="absolute left-1  bottom-1 z-10 text-white font-bold">{location.title}</Text>
            <Image className="rounded-md w-full object-contain h-full" source={location.img}></Image>
        </View>
    );
}

export default Location;
