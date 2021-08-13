import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import QRModal from './QRModal';

const QRCode = require('../assets/images/qrcode_icon.png')

const QRContainer = styled.View`
    position: absolute;
    background-color: #4672AF;
    border-radius: 60px;
    width: 50px;
    height: 50px;
    right: 20px;
    bottom: 94px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.7);
    justify-content: center;
    align-items: center;
`;

const QRImage = styled.Image`
    width: 30px;
    height: 30px;
`;

export default function FloatingQR({ setVisible }) {
    const [qrVisible, setQRVisible] = useState(false);

    return (
        <View>
        <QRModal visible={qrVisible} setVisible={setQRVisible} />
        <TouchableOpacity onPress={() => setVisible(true)}>
            <QRContainer>
                <QRImage resizeMode="contain" source={QRCode} />
            </QRContainer>
        </TouchableOpacity>
        
        </View>
    )

}
