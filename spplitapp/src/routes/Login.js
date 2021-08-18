import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    font-size: 22px;
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

const LoginButton = styled.TouchableOpacity`
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

export default function Login(props) {
    const navigation = useNavigation();
    // console.log(props)
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [hide, setHide] = useState(true);

    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/login";

    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        return token
    }

    const autoLogin = async () => {
        const userToken = await getToken()
        if (userToken) {
            props.setLogin(true)
        }
    }

    useEffect(() => {
        autoLogin()
    }, [])

    const loginSubmit = (ID, Password) => {
        let form = new FormData();
        form.append('email', ID)
        form.append('password', Password)

        axios.post(
            url, form)
            .then((response) => {
                // console.log(response.status)
                // console.log(response.data.key)
                // console.log(props.login)
                if (response.status == 200) {
                    alert(`Welcome back!`)
                    AsyncStorage.setItem('StorageKey', response.data.key)
                    props.setLogin(true)
                }
            })
            .catch((error) => {
                if (error.response.status == 400) {
                    alert('Wrong Email or Password:(');
                } else {
                    alert (`error ${error.response.status}`)
                    console.log(error)
                }
                
            })
    }

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
                    <IDInput
                        autoCapitalize='none'
                        placeholder="Username or Email"
                        onChangeText={(userEmail) => setUserEmail(userEmail)}
                        />
                    <PasswordInput
                        autoCapitalize='none'
                        placeholder="Password"
                        secureTextEntry={hide}
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        />
                </LoginFormContainer>
                <LoginButton onPress={() => loginSubmit(userEmail, userPassword)}>
                    <LoginImage
                        resizeMode="contain" 
                        source={Unlock}
                        />
                </LoginButton>
            </MidContainer>
        </LoginContainer>
    )
}