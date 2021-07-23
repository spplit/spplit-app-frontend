import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

const Logo = require('../assets/images/spplit_logo.png');
const Bell = require('../assets/images/notice_bell.png');
const Menubar = require('../assets/images/menubar.png');

const HeaderContainer = styled.View `
    flex: 0.12;
    /* background-color: purple; */
    flex-direction: row;
    align-items: flex-end;
`;

const SidebarButtonContainer = styled.View `
    flex: 1;
    height: 60;
    /* background-color: grey; */
    justify-content: center;
`;

const SidebarButton = styled.Image `
    width: 30;
    margin-left: 25;
`;

const LogoContainer = styled.View`
    flex: 1;
    height: 60;
    /* background-color: aliceblue; */
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.Image`
    width: 25;
    height: 30;
`;

const NoticeButtonContainer = styled.View`
    flex: 1;
    height: 60;
    /* background-color: antiquewhite; */
    justify-content: center;
    align-items: flex-end;
`;

const NoticeButton = styled.View`
    width: 75;
    height: 38;
    border-radius: 7;
    background-color: #f2f2f2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 25;
`;

const NoticeImage = styled.Image`
    width: 20;
    margin-right: 9;
`;

const NoticeNumber = styled.Text`
    color: #707070;
    font-size: 22;
`;

export default function Header() {
    return(
        <HeaderContainer>
            <SidebarButtonContainer>
                <SidebarButton source={Menubar} />
            </SidebarButtonContainer>
            <LogoContainer>
                <LogoImage source={Logo} />
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
