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

const HeaderContainer = styled.View `
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
    const [listData, setListData] = useState(
        Notifications.map((NotificationItem,index) => ({
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
                    <Text numberOfLines={1}>{ data.item.title }</Text>
                </NoticeCardContainer>
            </TouchableHighlight>
            </View>
        );
    };

    const renderItem = (data) => {
        return (
            <VisibleItem data={ data }/>
        );
    };

    const HiddenItemWithActions = props => {
        const {onClose, onDelete} = props;

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
            data={ data }
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)}
        />
    };

    return (
        <View>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackButton source={ backbutton } />
                    </TouchableOpacity>
                </BackButtonContainer>
                <Title>Notifications</Title>
            </HeaderContainer>
            <NoticeOuterContainer>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                />
            </NoticeOuterContainer>
        </View>
        
    )
}

export default Notice;