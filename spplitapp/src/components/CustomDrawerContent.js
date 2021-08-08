import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native';
import styled from 'styled-components';


const ProfileImageContainer = styled.View`
    margin-top: 10px;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    background-color: #d9d9d9;
    border-radius: 40px;
`;

const ProfileImage = styled.Image`

`;

const LogoutButtonContainer = styled.View`

`;

const LogoutButton = styled.Text`
    margin: auto;
`;

export default function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ProfileImageContainer>
                <ProfileImage />
            </ProfileImageContainer>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            
            <TouchableOpacity>
                <LogoutButton>LOGOUT</LogoutButton>
            </TouchableOpacity>
        </SafeAreaView>
    )
}