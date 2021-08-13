import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';
import NameCard from '../components/NameCard';
import FloatingQR from '../components/FloatingQR';
import QRModal from '../components/QRModal';
import QRCamera from '../components/QRCamera';
import { useNavigation } from '@react-navigation/native';
import CardList from '../components/CardList';

const MainView = styled.View`
    flex: 1;
`;
const Camera = styled.TouchableOpacity`
    background-color: yellow;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 200px;
    z-index: 3;
`;

const Main = () => {
    const [qrVisible, setQRVisible] = useState(false);
    const [cameraVisible, setCameraVisible] = useState(false);

    return (
        <MainView>
            <Header />
            <FloatingQR setVisible={setQRVisible} />
            <CardList />
            <QRModal visible={qrVisible} setVisible={setQRVisible} />
            <QRCamera visible={cameraVisible} setVisible={setCameraVisible} />
            <Camera onPress={() => setCameraVisible(true)}>
                <Text>카메라</Text>
            </Camera>

        </MainView>
    )
}

export default Main;