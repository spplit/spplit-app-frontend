import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
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
    const [data, setData] = useState('');
    const [cardCount, setCardCount] = useState();
    const [appointCount, setAppointCount] = useState();
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingCard, setLoadingCard] = useState(true);
    const [loadingAppoint, setLoadingAppoint] = useState(true);
    // const isFocused = useIsFocused();

    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        return token
    }

    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/user";
    const cardurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/card/";
    const scheduleurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment"


    useEffect(() => {
        async function getData() {
            const USER_TOKEN = await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            axios.get(url, { headers: { Authorization: AuthStr } })
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
                .finally(() => setLoadingUser(false))
                .catch((error) => {
                    console.log(error)
                })
            axios.get(cardurl, { headers: { Authorization: AuthStr } })
                .then((response) => {
                    setCardCount(response.data.length)
                })
                .finally(() => setLoadingCard(false))
                .catch((error) => {
                    console.log(error)
                })
            axios.get(scheduleurl, { headers: { Authorization: AuthStr } })
                .then((response) => {
                    setAppointCount(response.data.length)
                })
                .finally(() => setLoadingAppoint(false))
                .catch((error) => {
                    console.log(error)
                })
        }

        setInterval(() => getData(), 2000)


    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ProfileContainer>
                <ProfileImageContainer>
                    <ProfileImageSkeleton>
                        <ProfileImage />
                    </ProfileImageSkeleton>
                </ProfileImageContainer>
                <ProfileTextContainer>
                    <FixedText>Welcome Back,</FixedText>
                    {/* 이용자 이름 넣는 공간 */}
                    {!loadingUser && <Text style={{ fontSize: 17, color: 'black' }}>{data[0].username}</Text>}
                </ProfileTextContainer>
            </ProfileContainer>

            <FollowerContainer>
                <NameCardNumberContainer>
                    {/* 명함 개수 변하는 부분 */}
                    <Text style={{ marginRight: 4 }}>{cardCount}</Text>
                    <FixedText>NameCards</FixedText>
                </NameCardNumberContainer>
                <AppointmentContainer>
                    {/* 약속 개수 변하는 부분 */}
                    <Text style={{ marginRight: 4 }}>{appointCount}</Text>
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
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Login')
                    props.setLogin(false)
                    AsyncStorage.removeItem('StorageKey')
                }}>
                    <LogoutButton>LOGOUT</LogoutButton>
                </TouchableOpacity>
            </LogoutButtonContainer>
        </SafeAreaView>
    )
}