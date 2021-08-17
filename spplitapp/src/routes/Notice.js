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
import AppointModal from '../AppointModal';


const backbutton = require('../assets/images/backbutton_icon.png')

const HeaderContainer = styled.View`
    background-color: white;
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 15px;
`;

const BackButtonContainer = styled.View`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 22px;
    bottom: 12px;
`;

const BackButton = styled.Image`
    width: 30px;
    height: 30px;
`;

const NoticeOuterContainer = styled.ScrollView`
    position: absolute;
    top: 100px;
    background-color: white;
    width: 100%;
`;

const NoticeCardContainer = styled.View`
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

const NoticeAppointContainer = styled.TouchableOpacity`
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
const CardText = styled.View`
    width: 80%;
`;

const CardIcons = styled.View`
    width: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
const CardIcon = styled.View`
    width: 25;
`;


export default function Notice({ navigation }) {
    const USER_TOKEN = "57c05ec10b751d982859426d129b2553d78fc5c1"
    const AuthStr = "Token ".concat(USER_TOKEN)
    const cardurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/request";
    const appointurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request";
    const userurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/user"
    const [cards, setCards] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [username, setUsername] = useState();
    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState();
    const [isLoading1, setLoading1] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [isLoading3, setLoading3] = useState(true);
    const isFocused = useIsFocused();
    useEffect(() => {
        console.log(AuthStr)
        axios.get(cardurl, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("card request loading success")
                // console.log(response.data)
                setCards(response.data)
            })
            .finally(() => setLoading1(false))
            .catch((error) => {
                console.log(error)
                console.log("category loading failure");
            })
        axios.get(appointurl, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("appoint request loading success")
                // console.log(response.data)
                setAppointments(response.data)
            })
            .finally(() => setLoading2(false))
            .catch((error) => {
                console.log(error)
                console.log("category loading failure");
            })
        axios.get(userurl, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("user loading success")
                // console.log(response.data)
                setUsername(response.data[0].username)
            })
            .finally(() => setLoading3(false))
            .catch((error) => {
                console.log(error)
                console.log("user loading failure");
            })
    }, [visible])

    const acceptCard = (pk) => {
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/request/${pk}/accept`
        axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("accept success");
                alert(`you accepted request`);
            })
    }

    const declineCard = (pk) => {
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/request/${pk}/decline`
        axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("decline success");
                alert(`you declined request`);
            })
    }

    const cardRequests = cards.filter((request, index) => request.sender !== username).map((val, index) => {
        return <NoticeCardContainer>
            <CardText>
                <Text numberOfLines={1}>{val.sender} 님께서 명함을 요청하였습니다.</Text>
            </CardText>
            <CardIcons>
                <TouchableOpacity onPress={() => acceptCard(val.pk)}><Icon name="check" size={25} /></TouchableOpacity>
                <TouchableOpacity onPress={() => declineCard(val.pk)}><Icon name="x" size={25} /></TouchableOpacity>
            </CardIcons>
        </NoticeCardContainer>
    })


    const appointRequests = appointments.filter((request, index) => request.sender_name !== username).map((val, index) => {
        return <NoticeAppointContainer key={index} onPress={() => {
            setClicked(val)
            console.log(clicked)
            setVisible(true)
        }}>
            <CardText>
                <Text numberOfLines={1}>{val.sender_name} 님께서 약속 요청을 보내셨습니다.</Text>
            </CardText>
            <CardIcons>
                <CardIcon></CardIcon>
                <Icon name="chevron-right" size={25} />
            </CardIcons>
            {visible && <AppointModal visible={visible} setVisible={setVisible} props={clicked} auth={AuthStr} />}
        </NoticeAppointContainer>
    })

    return (
        <View>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackButton source={backbutton} />
                    </TouchableOpacity>
                </BackButtonContainer>
                <Title>Notifications</Title>
            </HeaderContainer>
            <NoticeOuterContainer>
                {(isLoading1 && isLoading2 && isLoading3) ? <Text>isLoading</Text> :
                    <>
                        {cardRequests}
                        {appointRequests}
                    </>
                }
            </NoticeOuterContainer>
        </View>

    )
}
