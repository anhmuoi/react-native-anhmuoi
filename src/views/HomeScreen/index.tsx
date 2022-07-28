import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import Header from '../../components/Header/index';
import Home from './Home';
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width } = Dimensions.get('screen');

const cardWidth = width / 2 - 20;

type RootStackParamList = {
    Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.container}>
                <Header />
            </View>
            <Home />
        </View>
    );
};

export default HomeScreen;
