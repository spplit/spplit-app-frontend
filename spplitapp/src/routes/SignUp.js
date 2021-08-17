import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import axios from 'axios';

const Back = require('../assets/images/backbutton_icon.png');
const Logo = require('../assets/images/spplit_logo.png');

const InputInfo = [
    {
        id: 0,
        data: 'username',
        question: 'What is your name?',
        button: 'NEXT',
    },
    {
        id: 1,
        data: 'email',
        question: 'What is your email?',
        button: 'NEXT',
    },
    {
        id: 2,
        data: 'phone',
        question: 'What is your phonenumber?',
        button: 'NEXT',
    },
    {
        id: 3,
        data: 'password1',
        question: 'Please set your password',
        button: 'NEXT',
    },
    {
        id: 4,
        data: 'password2',
        question: 'Check your password once again!',
        button: 'START SPPLITTING!',
    },
]

const SignUpContainer = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`

const HeaderContainer = styled.View `
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    background-color: white;
    flex-direction: row;
    align-items: flex-end;
`;

const BackButtonContainer = styled.TouchableOpacity `
    z-index: 5;
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

// 여기서부터 아래쪽 View 만들고 안에 요소 집어 넣기
const SignUpQuestionContainer = styled.View`
    position: absolute;
    display: flex;
    top: 105px;
    width: 90%;
    justify-content: space-between;
    bottom: 15px;
`

const UpConatiner = styled.View`
    display: flex;
    padding-left: 12px;
    padding-right: 12px;
`

const SignUpQuestion = styled.Text`
    font-size: 18px;
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

const NextButton = styled.TouchableOpacity `
    position: absolute;
    margin: auto;
    bottom: 20px;
    width: 100%;
    /* background-color: #F2F2F2; */
    justify-content: center;
    height: 46px;
    border-radius: 15px;
    background-color: ${ props => props.color === true ? '#29548e' : '#f2f2f2' };
`

const NEXT = styled.Text`
    text-align: center;
    font-size: 18px;
    color: ${ props => props.color === true ? 'white' : 'black' };
`

export default function Signup({navigation}) {
    const [text, setText] = useState('');
    const [hide, setHide] = useState(true);
    const [color, setColor] = useState(false);
    const [num, setNum] = useState(0);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [body, setBody] = useState(
        {
            username : userName,
            email : email,
            phone : phone,
            password1 : password1,
            password2 : password2,
        }
    )
    const [disable, setDisable] = useState(true)

    const bodyIndex = [ "username", "email", "phone", "password1", "password2" ]

    useEffect(() => { 
        const isEmpty = (value) => {
            if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ 
                setColor(false);
                setDisable(true)
            }else{
                setColor(true)
                setDisable(false)
            }
        }
        isEmpty(text)
      }, [text]);
    
    useEffect(() => {
        console.log(body)
    }, [num])

    const handleBack = () => {
        if ( num == 0 ) {
            navigation.navigate('AuthCheck')
        } else {
            setNum(num-1)
        }

    }

    const handleNext = (text) => {
        if ( num == 4 ) {
            setBody({...body, [bodyIndex[num]] : text})
            handleSubmit()
        } else {
            setText('')
            setBody({...body, [bodyIndex[num]] : text})
            setNum(num+1)
        }
    }
 
    const handleSubmit = () => {
        console.log(body)
        const url = 'http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/register';

        axios.post(
            url, body
        )
        .then((response) => {
            if (response.status >= 200 && response.status <= 204) {
                console.log(response)
                setUserName("")
                setEmail("")
                setPhone("")
                setPassword1("")
                setPassword2("")
                alert("Welcome to Spplit")
            }
        })
        .catch(error => {
            console.log(error)
            alert("Already Spplitting?")
        })
    }

    
    return (
        <SignUpContainer>
            <HeaderContainer>
                <BackButtonContainer onPress={() => handleBack()}>
                        <BackButtonImage resizeMode='contain' source={Back} />
                </BackButtonContainer>
                <LogoContainer>
                    <LogoImage source={Logo} />
                </LogoContainer>
            </HeaderContainer>

            <SignUpQuestionContainer>

                <UpConatiner>
                    <SignUpQuestion>{InputInfo[num].question}</SignUpQuestion>
                    <SignUpInputContainer>
                        <SignUpInput value={text} onChangeText={(text) => setText(text)}></SignUpInput>
                    </SignUpInputContainer>
                </UpConatiner>

                <NextButton disabled={disable} color={color} onPress={() => handleNext(text)}>
                        <NEXT color={color}>{InputInfo[num].button}</NEXT>
                </NextButton>

            </SignUpQuestionContainer>
        </SignUpContainer>
    )
}
