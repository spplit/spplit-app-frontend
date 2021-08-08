import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';
import { results } from './Search';
import CardOverview from './CardOverview';


const NameCardContent = ({ custom_tag1 }) => {
    const navigation = useNavigation();
    return (
        <TouchableScale
            activeScale={0.9}
            tension={50}
            friction={7}
            useNativeDriver
            onPress={() => navigation.navigate('Detail')}
        >
        <NameCardContainer>
            <NameText>{custom_tag1}</NameText>
        </NameCardContainer>
        </TouchableScale>
    )
}


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
    /* font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px; */
`;

const JobText = styled.Text`
    font-size: 15px;
`;

export default function CardList( {results }) {

    return (
        <NameCardListContainer>
            <NameCardList>
                {results.map((card) => (
                    <CardOverview key={card.id} card={card} />
                ))}
            </NameCardList>
        </NameCardListContainer>
    )
}