import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import FloatingQR from '../components/FloatingQR';
import QRCamera from '../components/QRCamera';
import CardList from '../components/CardList';

const MainView = styled.View`
    flex: 1;
`;


const Main = () => {

    return (
        <MainView>
            <CardList />
            <Header />
            <QRCamera />
            <FloatingQR />
        </MainView>
    )
}

export default Main;