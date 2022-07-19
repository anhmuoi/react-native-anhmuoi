// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import DetailScreen from './src/views/DetailScreen/index.js';
import HomeScreen from './src/views/HomeScreen/index.js';
import { TailwindProvider } from 'tailwindcss-react-native';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>
    );
}

export default App;
