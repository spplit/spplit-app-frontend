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
import ScheduleModal from '../components/ScheduleModal';

const ScheduleOuterContainer = styled.ScrollView`
    position: absolute;
    top: 100px;
    background-color: white;
    width: 100%;
`;

const ScheduleCardContainer = styled.TouchableOpacity`
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
    const scheduleurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment";
    const [isLoading, setLoading] = useState(true);
    const [appointment, setAppointment] = useState([]);
    const [clicked, setClicked] = useState();
    const [visible, setVisible] = useState();

    useEffect(() => {
        async function getData() {
            const USER_TOKEN = await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            axios.get(scheduleurl, { headers: { Authorization: AuthStr } })
                .then((response) => {
                    console.log("appointment loading success")
                    console.log(response.data)
                    setAppointment(response.data)
                })
                .finally(() => setLoading(false))
                .catch((error) => {
                    console.log(error)
                    console.log("appointment loading failure");
                })
        }
        getData()

    }, [])

    const schedules = appointment.map((schedule, index) => {
        return (
            <ScheduleCardContainer onPress={() => {
                setClicked(schedule)
                setVisible(true)
            }}>
                <Text>{schedule.appointment_date}, {schedule.title}</Text>
                {visible && <ScheduleModal visible={visible} setVisible={setVisible} props={clicked} />}
            </ScheduleCardContainer>
        )
    })

    return (
        <View>
            <Header />
            <ScheduleOuterContainer>
                {schedules}
            </ScheduleOuterContainer>
        </View>
    )
}
