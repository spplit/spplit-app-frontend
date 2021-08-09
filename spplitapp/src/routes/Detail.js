import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { results } from '../components/Search';
import { id } from '../components/CardOverview'; 
import { useRoute } from '@react-navigation/native';

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
    width: 100%;
    margin-top : 100px;
    margin-left : 20px;
`;


// 흰색 컨테이너
const ContentContainer = styled.View`
    width: 100%;
    flex: 52;
    background-color: #ffffff;
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


const NameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const JobText = styled.Text`
    font-size: 15px;
`;

const TagContainer = styled.View`
    flex-direction: row;
`;

const TagText = styled.Text`
    background-color: #29548E;
    font-size : 10px;
    margin-left : 2px;
    color : #ffffff;
    padding : 3px;
    border-radius: 3px;
`;

const CustomTagContainer = styled.View`
    flex-direction: row;
`;

const CustomTagText = styled.Text`
    background-color: #707070;
    font-size : 10px;
    margin-left : 2px;
    color : #ffffff;
    padding : 3px;
    border-radius: 3px;
`;

export default function Detail({ route, navigation }) {

    const { name, job, email, phone, tag1, tag2, tag3, custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked } = route.params;

    return (
        <DetailContainer>
            <NameCardContainer>
                {/* <BackButtonContainer>
                    <Button title="go back" onPress={() => navigation.goBack()}/>
                </BackButtonContainer> */}
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>go back</Text>
                        {/* <BackButton source={ backbutton } /> */}
                    </TouchableOpacity>
                </BackButtonContainer>
                <NamecardContentContanier>
                    <NameText>{name}</NameText>
                    <JobText>{job}</JobText>
                    <JobText>{email}</JobText>
                    <JobText>{phone}</JobText>
                    <JobText>{job}</JobText>
                    <TagContainer>
                        <TagText>{tag1}</TagText>
                        <TagText>{tag2}</TagText>
                        <TagText>{tag3}</TagText>
                    </TagContainer>
                    <CustomTagContainer>
                    {custom_tag1 && (
                    <CustomTagText>{custom_tag1}</CustomTagText>
                    )}
                    {custom_tag2 && (
                        <CustomTagText>{custom_tag2}</CustomTagText>
                    )}
                    {custom_tag3 && (
                        <CustomTagText>{custom_tag3}</CustomTagText>
                    )}
                    {custom_tag4 && (
                        <CustomTagText>{custom_tag4}</CustomTagText>
                    )}
                    {custom_tag5 && (
                        <CustomTagText>{custom_tag5}</CustomTagText>
                    )}
                    </CustomTagContainer>
                    <Text>{notes}</Text>
                    <Text>{division}</Text>
                    <Text>{isBookmarked}</Text>
                </NamecardContentContanier>
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