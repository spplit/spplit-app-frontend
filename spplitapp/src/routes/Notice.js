import React, { useState } from 'react';
import styled from 'styled-components';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Animated,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    Touchable,
} from 'react-native';
import axios from 'axios';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Notifications = [
    {
        id: 1,
        title: "New Request from Hyeonmin Park"
    },
    {
        id: 2,
        title: "There are 3 Namecards you never used"
    },
    {
        id: 3,
        title: "Check updated Spplit!"
    },
    {
        id: 4,
        title: "New Namecard added in your wallet"
    },
    {
        id: 5,
        title: "New Request from Hyebin Lee"
    },
    {
        id: 6,
        title: "Pizza Event: Share in Instagram"
    }
]

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

const NoticeOuterContainer = styled.View`
    position: absolute;
    top: 100px;
    background-color: white;
    width: 100%;
`;

const NoticeCardContainer = styled.View`
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 95%;
    height: 50px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15) ;
`;

const Notice = ({ navigation }) => {
    const cardurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/request";
    const appointurl = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request";
    const [cards, setCards] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [isLoading1, setLoading1] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    useEffect(() => {
        const USER_TOKEN = "57c05ec10b751d982859426d129b2553d78fc5c1"
        const AuthStr = "Token ".concat(USER_TOKEN)
        console.log(AuthStr)
        axios.get(cardurl, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("card request loading success")
                console.log(response.data)
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
                console.log(response.data)
                setAppointments(response.data)
            })
            .finally(() => setLoading2(false))
            .catch((error) => {
                console.log(error)
                console.log("category loading failure");
            })
    }, [])
    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
            key: `${index}`,
            title: NotificationItem.title,
        }))
    );

    const closerow = (rowMap, rowKey) => {

    }

    const deleterow = (rowMap, rowKey) => {

    }

    const VisibleItem = props => {
        const { data } = props;

        return (
            <View>
                <TouchableHighlight>
                    <NoticeCardContainer>
                        <Text numberOfLines={1}>{data.item.title}</Text>
                    </NoticeCardContainer>
                </TouchableHighlight>
            </View>
        );
    };

    const renderItem = (data) => {
        return (
            <VisibleItem data={data} />
        );
    };

    const HiddenItemWithActions = props => {
        const { onClose, onDelete } = props;

        return (
            <View>
                <Text>left</Text>
                <TouchableOpacity>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderHiddenItem = (data, rowMap) => {
        <HiddenItemWithActions
            data={data}
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)}
        />
    };

    const CardRequests = cards.map((request, index) => {
        return <NoticeCardContainer>
            <Text>{request.sender} sent you a namecard request</Text>
        </NoticeCardContainer>
    })


    const AppointRequests = appointments.map((request, index) => {
        return <NoticeCardContainer>
            <Text>{request.sender_name} sent you an appointment request</Text>
        </NoticeCardContainer>
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
                {isLoading1 && isLoading2 ? <Text>isLoading</Text> :
                    <>
                        <CardRequests />
                        <AppointRequests />
                        {/* <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                /> */}
                    </>
                }
            </NoticeOuterContainer>
        </View>

    )
}

export default Notice;