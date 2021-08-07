import React, { useState } from "react";
import styled from "styled-components";
import { StyleSheet, View, Text, ScrollView } from 'react-native';


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

const CardOverview = ({ card }) => {

    return (
        <NameCardContainer>
            <NameText>{card.friend_card.name}</NameText>
            <JobText>{card.friend_card.job}</JobText>
            <TagContainer>
                <TagText>{card.friend_card.tag1}</TagText>
                <TagText>{card.friend_card.tag2}</TagText>
                <TagText>{card.friend_card.tag3}</TagText>
            </TagContainer>
            <CustomTagContainer>
                <CustomTagText>{card.custom_tag1}</CustomTagText>
                <CustomTagText>{card.custom_tag2}</CustomTagText>
                <CustomTagText>{card.custom_tag3}</CustomTagText>
                <CustomTagText>{card.custom_tag4}</CustomTagText>
                <CustomTagText>{card.custom_tag5}</CustomTagText>
            </CustomTagContainer>
            <Text>메일 {card.friend_card.email}</Text>
            <Text>번호 {card.friend_card.phone}</Text>
            <Text>메모 {card.notes}</Text>
            <Text>구분 {card.division}</Text>
            <Text>즐찾 {String(card.isBookmarked)}</Text>
        </NameCardContainer>
    )
}

export default CardOverview;
