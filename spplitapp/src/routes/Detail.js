import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components';

const DetailContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const BackButton = styled.View`
    background-color: white;
    position: absolute;
    top: 70px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    box-shadow: 0px 8px 8px rgba(149, 157, 165, 0.6);
`;

const NameCardContainer = styled.View`
    width: 700px;
    height: 700px;
    background-color: #d9d9d9;
    border-radius: 500px;
`;

const ContentContainer = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45%;
    background-color: white;
`;

export default function Detail() {
    return (
        <DetailContainer>
            <NameCardContainer>
            </NameCardContainer>
            <ContentContainer />
            <BackButton />
        </DetailContainer>
    )
}