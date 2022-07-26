import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import * as Animation from 'react-native-animatable';
import * as Progress from 'react-native-progress';

function PreparingOrder() {
    const navigation = useNavigation();
    const {
        params: { restaurant },
    } = useRoute();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.navigate('Order', { restaurant });
        }, 3000);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    return (
        <View className="bg-[#00CCBB] justify-center items-center w-full h-full">
            <Animation.Text animation="slideInUp" iterationCount={1} className="text-center text-white font-bold text-lg">
                chờ nhà hàng xác nhận order
            </Animation.Text>
            <Progress.Circle size={60} indeterminate={true} color="white" className="mt-4" />
        </View>
    );
}

export default PreparingOrder;
