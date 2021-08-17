import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';

//타인 명함 한 개 컴포넌트

const NameCardContainer = styled.View`
    position: relative;
    width: 100%;
    height: 115px;
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
    margin-bottom: 6px;
`;

const JobText = styled.Text`
    font-size: 15px;
`;

const TagContainer = styled.View`
    position: absolute;
    flex-direction: row;
    bottom: 10;
    margin-left: 12px;
`;

const TagBox = styled.View`
    width: auto;
    height: 20px;
    background-color: #29548E;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    padding: 2px 7px;
`;

const TagText = styled.Text`
    font-size : 10px;
    color: #fff;
`;

export default function NameCard({ name, job, email, phone, tag1, tag2, tag3, custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked }) {
    const navigation = useNavigation();
    return (
        <TouchableScale
            activeScale={0.9}
            tension={18}
            friction={7}
            useNativeDriver={true}
            onPress={() => navigation.navigate('Detail', { name, job, email, phone, tag1, tag2, tag3, 
                    custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked })}
        >
        <NameCardContainer>
            <NameText>{name}</NameText>
            <JobText>{job}</JobText>
            <TagContainer>

                <TagBox><TagText>{tag1}</TagText></TagBox>
                <TagBox><TagText>{tag2}</TagText></TagBox>
                <TagBox><TagText>{tag3}</TagText></TagBox>
            </TagContainer>
        </NameCardContainer>
        </TouchableScale>
    )
}

