import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const BackButton = require('../assets/images/backbutton_icon.png');
const Logo = require('../assets/images/spplit_logo.png');
const Unlock = require('../assets/images/unlock_icon.png');

const HeaderContainer = styled.View `
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    background-color: white;
    flex-direction: row;
    align-items: flex-end;
`;

const BackButtonContainer = styled.View `
    position: absolute;
    left: 0;
    width: 20%;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

const BackButtonImage = styled.Image `
    width: 22px;
`;

const LogoContainer = styled.View`
    flex: 1;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.Image`
    width: 20px;
    height: 23px;
`;


const LoginContainer = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`

const MidContainer = styled.View`
    /* position: relative; */
    height: 350px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    /* background-color: yellow; */
    justify-content: space-between;
    align-items: center;
`;

const WelcomeText = styled.Text`
    font-size: 22;
    text-align: center;
    color: #707070;
`

const LoginFormContainer = styled.View`
    /* top: 100; */
    width: 100%;
    height: 200px;
    /* background-color: purple; */
    justify-content: center;
    align-items: center;
`

const IDInput = styled.TextInput`
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 10px;
    height: 40px;
    font-size: 19px;
    padding-left: 12px;
    
`

const PasswordInput = styled.TextInput`
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 10px;
    height: 40px;
    border: none;
    font-size: 19px;
    padding-left: 12px;
    top: 20px;
`

const LoginButton = styled.View`
    height: 45px;
    width: 45px;
    background-color: #f2f2f2;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const LoginImage = styled.Image`
    width: 20px;
`;

export default function Login({ navigation }) {
    return (
        <LoginContainer>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthCheck')}>
                        <BackButtonImage resizeMode="contain" source={BackButton} />
                    </TouchableOpacity>
                </BackButtonContainer>

                <LogoContainer>
                    <LogoImage source={Logo} />
                </LogoContainer>
            </HeaderContainer>

            <MidContainer>
                <WelcomeText>WELCOME!</WelcomeText>
                <LoginFormContainer>
                    <IDInput autoCapitalize='none' placeholder="Username or Email" />
                    <PasswordInput autoCapitalize='none' placeholder="Password" />
                </LoginFormContainer>
                <LoginButton>
                    <LoginImage resizeMode="contain" source={Unlock}/>
                </LoginButton>
            </MidContainer>
        </LoginContainer>
    )
}