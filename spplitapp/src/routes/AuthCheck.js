// 로그인할 지 회원가입할 지 확인하는 페이지입니다.
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native';

const Logo = require('../assets/images/spplit_logo.png');
const Lock = require('../assets/images/lock_icon.png');
const Pen = require('../assets/images/pen_icon.png');

// 페이지 전체
const OuterContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

// 로고와 로그인, 회원가입이 들어가있는 컨테이너
const InnerContainer = styled.View`
    width: 60%;
    height: 60%;
`;

const LogoContainer = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: center;
`;

const LogoImage = styled.Image`
    width: 65px;
    height: 75px;
    margin-bottom: 15px;
`;

const LogoText = styled.Text`
    font-size: 40px;
    color: #29548e;
`;

const AuthContainer = styled.View`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

const ButtonContainer = styled.View`
    width: 50px;
    height: 60px;
    margin: 0px 4px;
`;

const LoginButton = styled.View`
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    
`;

const LoginImage = styled.Image`
    width: 22px;
`;

const SignUpButton = styled.View`
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`;

const SignUpImage = styled.Image`
    width: 24px;
`;

const TextContainer = styled.View`
    width: 100%;
    height: 10%;
    align-items: center;
`;

export default function AuthCheck() {
    const navigation = useNavigation();

    return(
        <OuterContainer>
            <InnerContainer>
                {/* 로고 이미지와 로고 텍스트가 담긴 공간 */}
                <LogoContainer>
                    <LogoImage resizeMode='contain' source={Logo} />
                    <LogoText>Spplit!</LogoText>
                </LogoContainer>

                {/* 로그인과 회원가입 버튼이 담긴 공간 */}
                <AuthContainer>
                    <ButtonContainer>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <LoginButton>
                                <LoginImage resizeMode='contain' source={Lock} />
                            </LoginButton>
                        </TouchableOpacity>
                    </ButtonContainer>
                    <ButtonContainer>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <SignUpButton>
                                <SignUpImage resizeMode='contain' source={Pen} />
                            </SignUpButton>
                        </TouchableOpacity>
                    </ButtonContainer>
                </AuthContainer>

                {/* Login or SignUp */}
                <TextContainer>
                    <Text>Login or SignUp</Text>
                </TextContainer>
            </InnerContainer>
        </OuterContainer>
    )  
}