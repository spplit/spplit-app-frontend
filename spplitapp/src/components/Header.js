import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

const Logo = require('../assets/images/spplit_logo.png');
const Bell = require('../assets/images/notice_icon.png');
const Menubar = require('../assets/images/menubar_icon.png');

const HeaderContainer = styled.View `
    position: absolute;
    height: 98px;
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
    width: 18px;
    height: 18px;
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
    width: 20px;
    height: 23px;
`;

const NoticeButtonContainer = styled.View`
    flex: 1;
    height: 60px;
    /* background-color: antiquewhite; */
    justify-content: center;
    align-items: flex-end;
`;

const NoticeButton = styled.View`
    width: 50px;
    height: 26px;
    border-radius: 7px;
    background-color: #f2f2f2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
`;

const NoticeImage = styled.Image`
    width: 14px;
    margin-right: 6px;
`;

const NoticeNumber = styled.Text`
    color: #707070;
    font-size: 15px;
`;

export default function Header() {
    const navigation = useNavigation();
    return (
        <HeaderContainer>
            <SidebarButtonContainer>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SidebarButton source={Menubar} />
                </TouchableOpacity>
            </SidebarButtonContainer>
            <LogoContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <LogoImage source={Logo} />
                </TouchableOpacity>
            </LogoContainer>
            <NoticeButtonContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
                    <NoticeButton>
                        <NoticeImage resizeMode="contain" source={Bell} />
                        <NoticeNumber>7</NoticeNumber>
                    </NoticeButton>
                </TouchableOpacity>
            </NoticeButtonContainer>
        </HeaderContainer>
    )   
}


