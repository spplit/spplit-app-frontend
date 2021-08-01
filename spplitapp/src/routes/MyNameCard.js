import React from 'react';
import { StyleSheet, Text, View, Button, PanResponder, Animated } from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';


const CardView = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const CardContainer = styled.View`
    width: 315px;
    height: 460px;
    border-radius: 14px;
    background-color: blue;
`;



export default function MyNameCard() {
    return ( 
        <CardView>
            <Header />
            <CardContainer />
        </CardView>
    )
}
