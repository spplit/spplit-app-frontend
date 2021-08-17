import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';

const ScheduleOuterContainer = styled.ScrollView`
    position: absolute;
    top: 100px;
    background-color: white;
    width: 100%;
`;

const ScheduleCardContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 95%;
    height: 50px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15) ;
`;

export default function Schedule() {
    const USER_TOKEN = "57c05ec10b751d982859426d129b2553d78fc5c1"
    const AuthStr = "Token ".concat(USER_TOKEN)
    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment"
    const [appointments, setAppointments] = useState();
    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("appointment loading success")
                // console.log(response.data)
                setAppointments(response.data)
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                console.log("appointment loading failure");
            })
    }, [])

    const schedules = appointments.map((appoint, index) => {
        return (
            <ScheduleCardContainer>
                <Text>{appoint.appoint_date} , {appoint.title}</Text>
            </ScheduleCardContainer>
        )
    })

    return (
        <View>
            <Header />
            <ScheduleOuterContainer>
                {isLoading ? <Text>isLoading</Text> :
                    <>
                        {schedules}
                    </>
                }
            </ScheduleOuterContainer>
        </View>
    )
}
