import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import QRModal from './QRModal';

const QRCode = require('../assets/images/qrcode_icon.png')

const QRContainer = styled.View`
    position: absolute;
    bottom: 100px;
    right: 20px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

const QRButton= styled.View`
    background-color: #4672AF;
    border-radius: 60px;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.7);
    justify-content: center;
    align-items: center;
`;

const QRImage = styled.Image`
    width: 30px;
    height: 30px;
`;

export default function FloatingQR() {
    const [QRVisible, setQRVisible] = useState(false);

    return (
        <QRContainer>
            <QRModal visible={QRVisible} setVisible={setQRVisible} />
            <TouchableOpacity onPress={() => setQRVisible(!QRVisible)}>
                <QRButton>
                    <QRImage resizeMode="contain" source={QRCode} />
                </QRButton>
            </TouchableOpacity>
        </QRContainer>
    )

}
