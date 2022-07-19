import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import Header from '../../components/Header/index.js';
import Home from './Home.js';
import { styles } from './style.js';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
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
