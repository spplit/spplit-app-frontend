import React, { useRef } from 'react';
import { StyleSheet, Text, View, Button, PanResponder, Animated } from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import MyNameCardContainer from '../components/MyNameCardContainer';
import { useNavigation } from '@react-navigation/native';
import TouchableScale from 'react-native-touchable-scale';


const CardView = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;


export default function MyNameCard() {
    const navigation = useNavigation();

    return ( 
        <CardView>
            <MyNameCardContainer />
            <Header />
        </CardView>
    )
}
