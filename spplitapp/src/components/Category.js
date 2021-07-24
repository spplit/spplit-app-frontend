import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

const home = require('../assets/images/home_icon.png')
const bookmark = require('../assets/images/bookmark_icon.png')
const coffee = require('../assets/images/coffee_icon.png')
const book = require('../assets/images/book_icon.png')

const CategoryContainer = styled.View `
    position: absolute;
    width: 100%;
    height: 110px;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

const Categorybar = styled.View `
    background-color: white;
    box-shadow: 4px 4px 10px rgba(17, 17, 26, 0.25);
    width: 90%;
    height: 70px;
    border-radius: 60px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

const CategoryIconContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const CategoryIcon = styled.Image`
    width: 28px;
    height: 28px;
`;

const CategoryIconList = [home, bookmark, coffee, book]

export default function Category() {
    return (
        <CategoryContainer>
            <Categorybar>
                {CategoryIconList.map((icon, index) => {
                    return (
                        <CategoryIconContainer>
                            <CategoryIcon resizeMode='contain' key={index} source={icon} />
                        </CategoryIconContainer>
                    )
                })}
            </Categorybar>
        </CategoryContainer>
    )
}
