import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Back = require('../assets/images/backbutton_icon.png');
const Logo = require('../assets/images/spplit_logo.png');

const SignUpContainer = styled.View `
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

// 헤더에 버튼 2개와 View 3개 제작 (3번째 View 'EmptyContainer' 는 빈 거야 간격 맞추려고 ㅠ.ㅠ)

const HeaderContainer = styled.View `
    /* position: absolute; */
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
    width: 32px;
    margin-left: 25px;
`;

const LogoContainer = styled.View`
    flex: 1;
    height: 60px;
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

// 여기서부터 아래쪽 View 만들고 안에 요소 집어 넣기
const SignUpQuestionContainer = styled.View`
    position: absolute;
    display: flex;
    height: 85%;
    width: 90%;
    /* background-color: yellow; */
    justify-content: space-between;
    bottom: 15;
`

const UpConatiner = styled.View`
    display: flex;
    padding-left: 12px;
    padding-right: 12px;
`

const SignUpQuestion = styled.Text`
    font-size: 18;
    color: #707070;
`

const SignUpInputContainer = styled.View`
    /* background-color: gold; */
    border-bottom-width: 1px;
    border-color: #707070;
`

const SignUpInput = styled.TextInput`
    width: 100%;
    height: 30px;
    border: none;
    font-size: 18px;
`

const NextButton = styled.View`
    background-color: #F2F2F2;
    justify-content: center;
    height: 48px;
    border-radius: 15px;
`

const NEXT = styled.Text`
    text-align: center;
    font-size: 26;
    color: #707070;
`

    // 색깔을 바꾸자
    // return () => {
    //     console.log('컴포넌트가 화면에서 사라짐');
    //   };

    // useEffect(() => {
    //     const id = setInterval(() => {
    //       setCount(c => c + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    //   }, []);  

export default function Signup({navigation}) {
    const [text, setText] = useState('');

    useEffect(() => { 
        console.log(text);
        // 색깔 바꾸는 코드 넣기, 여기 맞나?
      }, [text]);


    const isEmpty = (value) => {
        if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ 
            console.log("아무 값도 들어있지 않습니다");
            // 색깔 바꾸고 터치 막기
        }else{
            console.log("값이 있어요");
            // 파란색 바뀌면 터치 되는거? 여기? 함수랑 useEffect 관계가 헷갈리네
        }
    };
    
    return (
        <SignUpContainer>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <BackButton source={Back} />
                    </TouchableOpacity>
                </BackButtonContainer>
                <LogoContainer>
                    <LogoImage source={Logo} />
                </LogoContainer>
                <EmptyContainer></EmptyContainer>
            </HeaderContainer>
            <SignUpQuestionContainer>
                <UpConatiner>
                    <SignUpQuestion>What`s Your Name?</SignUpQuestion>
                    <SignUpInputContainer>
                        <SignUpInput onChangeText={(text) => setText(text)}></SignUpInput>
                    </SignUpInputContainer>
                </UpConatiner>
                <NextButton>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Main')}> */}
                    <TouchableOpacity onPress={() => isEmpty(text)}>
                        <NEXT>NEXT</NEXT>
                    </TouchableOpacity>
                </NextButton>
            </SignUpQuestionContainer>
        </SignUpContainer>
    )
}
