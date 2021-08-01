import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components';

const DetailContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export default function Detail() {
    return (
        <DetailContainer>
            <Text>This is Detail Page</Text>
        </DetailContainer>
    )
}