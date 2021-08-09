import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';
import NameCard from '../components/NameCard';
import FloatingQR from '../components/FloatingQR';
import QRModal from '../components/QRModal';
import { useNavigation } from '@react-navigation/native';

const MainView = styled.View`
    flex: 1;
`;

const Main = () => {
    const [visible, setVisible] = useState(false);

    return (
        <MainView>
            <Header />
            <Category />
            <FloatingQR setVisible={setVisible} />
            <QRModal visible={visible} setVisible={setVisible} />
        </MainView>
    )
}

export default Main;