import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';
import NameCard from '../components/NameCard';

const MainView = styled.View `
    flex: 1;
`;


export default function Main() {
    return(
        <MainView>
            <NameCard />
            <Header />
            <Search />           
            <Category />
        </MainView>
    )
}
