import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';


const NameCardContent = ({ name, job }) => {
    const navigation = useNavigation();
    return (
        <TouchableScale
            activeScale={0.9}
            tension={30}
            friction={7}
            onPress={() => navigation.navigate('Detail')}
        >
        <NameCardContainer>
            <NameText>{name}</NameText>
            <JobText>{job}</JobText>
        </NameCardContainer>
        </TouchableScale>
    )
}

const PersonalInfo = [
    {
        id: 1,
        name: 'Mango Kim',
        job: 'Frontend Designer',
        tags: ['Kakao', 'Pangyo', 'Designer']
    },
    {
        id: 2,
        name: 'HyeonMin Park',
        job: 'Samsung EE Intern',
        tags: ['Intern', 'Tech', 'EE']
    },
    {
        id: 3,
        name: 'Johnson Smith',
        job: 'Baker',
        tags: ['Bread', 'Itaewon', 'Florence']
    },
    {
        id: 4,
        name: 'Hyebin Lee',
        job: 'Designer',
        tags: ['Zeplin', 'UI/UX', 'Naver']
    },
    {
        id: 5,
        name: 'HeungMin Son',
        job: 'Student',
        tags: ['HYU', 'Biz', 'Likelion']
    },
]


// 명함 담겨있는 공간
const NameCardListContainer = styled.View`
    position: absolute;
    width: 100%;
    top: 140px;
    justify-content: center;
    align-items: center;
`;

const NameCardList = styled.ScrollView`
    width: 97%;
    flex: 1;
    /* background-color: lightpink; */
    flex-direction: column;
    padding: 30px 20px;
`;


//명함
const NameCardContainer = styled.View`
    width: 100%;
    height: 130px;
    background-color: #f2f2f2;
    box-shadow: rgba(149, 157, 165, 0.3) 3px 5px 5px;
    border-radius: 9px;
    margin-bottom: 20px;
    padding: 12px;
`;

const NameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const JobText = styled.Text`
    font-size: 15px;
`;

export default function NameCard() {
    return (
        <NameCardListContainer>
            <NameCardList>
                {PersonalInfo.map((info, id) => {
                    return(
                        <NameCardContent key={ id } name={ info.name } job={ info.job } />
                    )
                })}
            </NameCardList>
                
        </NameCardListContainer>
    )
}