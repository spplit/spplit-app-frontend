import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import TouchableScale from 'react-native-touchable-scale';
import NameCard from "./NameCard";

// 타인 명함 리스트가 담겨있는 공간


const NameCardListContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 700px;
    top: 50px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const NameCardList = styled.ScrollView`
    width: 97%;
    flex: 1;
    /* background-color: lightpink; */
    flex-direction: column;
    padding: 30px 20px;
`;



const CardOverview = ({ results }) => {

    return (
        <NameCardListContainer>
            <NameCardList>
                {results.map((card) => (
                    <NameCard id={card.id} name={card.friend_card.name} job={card.friend_card.job} email={card.friend_card.email} phone={card.friend_card.phone}
                        tag1={card.friend_card.tag1} tag2={card.friend_card.tag2} tag3={card.friend_card.tag3} custom_tag1={card.custom_tag1}
                        custom_tag2={card.custom_tag2} custom_tag3={card.custom_tag3} custom_tag4={card.custom_tag4} custom_tag5={card.custom_tag5}
                        notes={card.notes} division={card.division} isBookmarked={card.isBookmarked}
                        />
                ))}
            </NameCardList>
        </NameCardListContainer>
    )
}

export default CardOverview;
