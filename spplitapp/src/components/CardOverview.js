import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import TouchableScale from 'react-native-touchable-scale';


const NameCardContent = ({ name, job, email, phone, tag1, tag2, tag3, custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked }) => {
    const navigation = useNavigation();
    return (
        <TouchableScale
            activeScale={0.9}
            tension={30}
            friction={7}
            useNativeDriver={true}
            onPress={() => navigation.navigate('Detail', { name, job, email, phone, tag1, tag2, tag3, 
                    custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked })}
        >
        <NameCardContainer>
            <NameText>{name}</NameText>
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

const NameCardContainer = styled.View`
    width: 100%;
    /* height: 130px; */
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

const CardOverview = ({ results }) => {

    return (
        <NameCardListContainer>
            <NameCardList>
                {results.map((card) => (
                    <NameCardContent id={card.id} name={card.friend_card.name} job={card.friend_card.job} email={card.friend_card.email} phone={card.friend_card.phone}
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
