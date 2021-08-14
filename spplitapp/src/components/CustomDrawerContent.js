import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ProfileContainer = styled.View`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
`;

const ProfileImageContainer = styled.View`
    width: 28%;
    justify-content: center;
    align-items: center;
`;

const ProfileImageSkeleton = styled.View`
    width: 50px;
    height: 50px;
    background-color: #d9d9d9;
    border-radius: 40px;
`;

const ProfileImage = styled.Image`

`;

const ProfileTextContainer = styled.View`
    width: 70%;
    justify-content: center;
    padding-left: 5px;
`;

const FixedText = styled.Text`
    color: #707070;
`;

const FollowerContainer = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;

const NameCardNumberContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 45%;
    justify-content: center;
    align-items: center;
`;

const AppointmentContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 55%;
    align-items: center;
    justify-content: center;
`;

const LogoutButtonContainer = styled.View`
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: flex-end;
`;

const LogoutButton = styled.Text`
    right: 30px;
    color: #707070;
`;

export default function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ProfileContainer>
                <ProfileImageContainer>
                    <ProfileImageSkeleton>
                        <ProfileImage />
                    </ProfileImageSkeleton>
                </ProfileImageContainer>
                <ProfileTextContainer>
                    <FixedText>Welcome Back,</FixedText>
                    {/* 이용자 이름 넣는 공간 */}
                    <Text style={{fontSize: 17, color: 'black'}}>Sukyeong</Text> 
                </ProfileTextContainer>
            </ProfileContainer>

            <FollowerContainer>
                <NameCardNumberContainer>
                    {/* 명함 개수 변하는 부분 */}
                    <Text style={{marginRight: 4}}>5</Text>
                    <FixedText>NameCards</FixedText>
                </NameCardNumberContainer>
                <AppointmentContainer>
                    {/* 약속 개수 변하는 부분 */}
                    <Text style={{marginRight: 4}}>10</Text>
                    <FixedText>Appointments</FixedText>
                </AppointmentContainer>
            </FollowerContainer>


            <DrawerContentScrollView
                contentContainerStyle={{
                    paddingTop: 0,
                }}
                {...props}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <LogoutButtonContainer>
                <TouchableOpacity>
                    <LogoutButton>LOGOUT</LogoutButton>
                </TouchableOpacity>
            </LogoutButtonContainer>
        </SafeAreaView>
    )
}