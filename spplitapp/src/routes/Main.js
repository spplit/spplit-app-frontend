import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';
import NameCard from '../components/NameCard';
import FloatingQR from '../components/FloatingQR';
import { useNavigation } from '@react-navigation/native';

const MainView = styled.View `
    flex: 1;
`;

const Main = () => {

    return(
        <MainView>
            <Header />
            <Category />
            <FloatingQR />
        </MainView>
    )
}

export default Main;