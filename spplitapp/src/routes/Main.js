import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';
import NameCard from '../components/NameCard';
import FloatingQR from '../components/FloatingQR';
import { useNavigation } from '@react-navigation/native';
import CardList from '../components/CardList';

const MainView = styled.View `
    flex: 1;
`;

const Main = () => {

    return(
        <MainView>
            <NameCard />
            <Header />
<<<<<<< HEAD
            <Search />           
            <Category />
=======
            {/* <Search /> */}
            <CardList />
            {/* <Category /> */}
>>>>>>> 0bda17d1682541d488c00d163f12dd076825d688
            <FloatingQR />
        </MainView>
    )
}

export default Main;