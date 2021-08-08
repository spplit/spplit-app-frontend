import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const backbutton = require('../assets/images/backbutton_icon.png')

const DetailContainer = styled.View`
    flex: 1;
    background-color: white;
`;

// 회색 컨테이너
const NameCardContainer = styled.View`
    width: 100%;
    flex: 48;
    background-color: #d9d9d9;
    border-radius: 40px;
`;

// 회색 부분 안에 명함 주인 정보를 모아둔 컨테이너
const NamecardContentContanier = styled.View`

`;


// 흰색 컨테이너
const ContentContainer = styled.View`
    width: 100%;
    flex: 52;
    background-color: white;
`;

const BackButtonContainer = styled.View`
    position: absolute;
    top: 50px;
    left: 22px;
    width: 30px;
    height: 30px;
`;

const BackButton = styled.Image`
    position: absolute;
    width: 30px;
    height: 30px;
`;

const MemoButtonContainer = styled.View`
    position: absolute;
    top: 400px;
    right: 40px;
`;

const MemoButton = styled.View`
    background-color: #4672af;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    box-shadow: 0px 5px 5px rgba(149, 157, 165, 0.8);
`;

const AppointmentButtonContainer = styled.View`
    position: absolute;
    bottom: 25px;
    width: 100%;
    height: 55px;
`;

const AppointmentButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 55px;
    background-color: #4672af;
    margin: auto;
    border-radius: 15px;
`;

const AppointmentText = styled.Text`
    color: white;
    font-size: 20px;
`;


export default function Detail({ navigation }) {
    return (
        <DetailContainer>
            <NameCardContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackButton source={ backbutton } />
                    </TouchableOpacity>
                </BackButtonContainer>
            </NameCardContainer>

            <ContentContainer>
                <AppointmentButtonContainer>
                    <TouchableOpacity>
                        <AppointmentButton>
                            <AppointmentText>Make An Appointment</AppointmentText>
                        </AppointmentButton>
                    </TouchableOpacity>
                </AppointmentButtonContainer>
            </ContentContainer>

            <MemoButtonContainer>
                <TouchableOpacity>
                    <MemoButton />
                </TouchableOpacity>
            </MemoButtonContainer>
        </DetailContainer>
    )
}