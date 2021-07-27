import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

const Logo = require('../assets/images/spplit_logo.png');
const Bell = require('../assets/images/notice_bell.png');
const Menubar = require('../assets/images/menubar.png');

const HeaderContainer = styled.View `
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    background-color: white;
    flex-direction: row;
    align-items: flex-end;
`;

const SidebarButtonContainer = styled.View `
    flex: 1;
    height: 60px;
    /* background-color: grey; */
    justify-content: center;
`;

const SidebarButton = styled.Image `
    width: 30px;
    margin-left: 25px;
`;

const LogoContainer = styled.View`
    flex: 1;
    height: 60px;
    /* background-color: aliceblue; */
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.Image`
    width: 25px;
    height: 30px;
`;

const NoticeButtonContainer = styled.View`
    flex: 1;
    height: 60px;
    /* background-color: antiquewhite; */
    justify-content: center;
    align-items: flex-end;
`;

const NoticeButton = styled.View`
    width: 75px;
    height: 38px;
    border-radius: 7px;
    background-color: #f2f2f2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
`;

const NoticeImage = styled.Image`
    width: 20px;
    margin-right: 9px;
`;

const NoticeNumber = styled.Text`
    color: #707070;
    font-size: 22px;
`;

export default function Header() {
    const navigation = useNavigation();
    return (
        <HeaderContainer>
            <SidebarButtonContainer>
                <SidebarButton source={Menubar} />
            </SidebarButtonContainer>
            <LogoContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <LogoImage source={Logo} />
                </TouchableOpacity>
            </LogoContainer>
            <NoticeButtonContainer>
                <NoticeButton>
                    <NoticeImage resizeMode="contain" source={Bell} />
                    <NoticeNumber>7</NoticeNumber>
                </NoticeButton>
            </NoticeButtonContainer>
        </HeaderContainer>
    )   
}


