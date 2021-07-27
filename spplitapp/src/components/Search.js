import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

const SearchbarContainer = styled.View`
    height: 60px;
    position: absolute;
    width: 100%;
    top: 100px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Searchbar = styled.TextInput `
    width: 88%;
    height: 70%;
    background-color: #f2f2f2;
    border-radius: 7px;
    padding-left: 15px;
    font-size: 20px;
`;

export default function Search() {
    const [text, setText] = useState('');
    return (
        <SearchbarContainer>
            <Searchbar />
        </SearchbarContainer>
    )
}
