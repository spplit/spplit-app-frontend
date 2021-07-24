import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Search from '../components/Search';
import Category from '../components/Category';

const MainView = styled.View `
    flex: 1;
`;


export default function Main() {
    return(
        <MainView>
            <Header />
            <Search />
            <Category />
        </MainView>
    )
}
