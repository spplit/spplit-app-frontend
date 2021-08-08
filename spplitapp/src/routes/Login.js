import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Back = require('../assets/images/backbutton_icon.png');
const Logo = require('../assets/images/spplit_logo.png');

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
    flex: 1;
    height: 60px;
    /* background-color: grey; */
    justify-content: center;
`;

const BackButton = styled.Image `
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

const EmptyContainer = styled.View`
    flex: 1;
`

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

const InputID = styled.TextInput`
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 15px;
    height: 50px;
    border: none;
    font-size: 19px;
    padding-left: 12px;
    
`

const InputPW = styled.TextInput`
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 15px;
    height: 50px;
    border: none;
    font-size: 19px;
    padding-left: 12px;
    top: 20px;
`

const LoginButtonContainer = styled.View`
    height: 51px;
    width: 51px;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: none;
    justify-content: center;
`

const LoginButton = styled.View`
    /* flex: 1; */
    height: 40px;
    /* background-color: aliceblue; */
    justify-content: center;
    align-items: center;
`;

const LoginImage = styled.Image`
    width: 25px;
    height: 30px;
`;

export default function Login({navigation}) {
    return (
        <LoginContainer>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <BackButton resizeMode="contain" source={Back} />
                    </TouchableOpacity>
                </BackButtonContainer>
                <LogoContainer>
                    <LogoImage source={Logo} />
                </LogoContainer>
                <EmptyContainer></EmptyContainer>
            </HeaderContainer>
            <MidContainer>
                <WelcomeText>WELCOME!</WelcomeText>
                <LoginFormContainer>
                    <InputID placeholder="Username or Email" 
                    style={{
                        shadowColor: "#707070",
                        shadowOpacity: 1,
                        shadowRadius: 5,
                        shadowOffset: { height: 2, width: 0 },
                        elevation: 5
                    }}></InputID>
                    <InputPW placeholder="Password"
                    style={{
                        shadowColor: "#707070",
                        shadowOpacity: 1,
                        shadowRadius: 5,
                        shadowOffset: { height: 2, width: 0 },
                        elevation: 5
                    }}></InputPW>
                </LoginFormContainer>
                <LoginButtonContainer>
                    <LoginButton>
                        <LoginImage source={Logo}/>
                    </LoginButton>
                </LoginButtonContainer>
            </MidContainer>
        </LoginContainer>
    )
}