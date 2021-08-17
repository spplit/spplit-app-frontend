import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Text, View} from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown'
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const QR_SIZE = 210;
const MODAL_SIZE = 350;

const ModalContainer = styled.View`
    background-color: #000000aa ;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalMain = styled.View`
    background-color: #ffffff;
    border-radius: 10px;
    width : ${MODAL_SIZE}px;
    height: ${MODAL_SIZE}px;
    display: flex;
    align-items: center;
`;

const ModalHeader = styled.View`
    /* background-color: yellow; */
    height: 15%;
    width : ${MODAL_SIZE};
    display: flex;
    align-items: flex-end;
`;

const CloseBox = styled.TouchableOpacity`
    padding: 15px;
`;

const DropdownContainer = styled.View`
    width : 100%;
    height : 100%;
    margin-top : 20px;
    align-items : center;
`;

const NoMycardText = styled.Text`
    font-size : 20px;
    color : #d9d9d9;
    text-align : center;
    margin-top : 20px;
`;

const ToMycardButton = styled.View`
    width: 100px;
    height: 50px;
    background-color: #29548e;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top : 80px;
`;

const ToMycardText = styled.Text`
    text-align : center;
    color: white;
    font-size: 25px;
`;

export default function QRModal({ visible, setVisible }) {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dropList, setDropList] = useState([]);
    const [uuidList, setUuidList] = useState([]);
    const [query, setQuery] = useState("0");

    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        return token
    }

    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/mycard/";

    useEffect(() => {
        async function getData() {
            const USER_TOKEN =  await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("Card-data loading success");    
  
                for (let i = 0; i < response.data.length; i++) {
                    if (!dropList.includes(response.data[i].job)) {
                        dropList.push(response.data[i].job)
                    }

                    if (!uuidList.includes(response.data[i].id)) {
                        uuidList.push(response.data[i].id)
                    }
                }

                setQuery(uuidList[0])

            })
            .catch((error) => {
                console.log(error)
                console.log("Card-data loading failure");
            })
        }

        getData()

    }, [isFocused])
        
    return (
        <>
        {dropList.length === 0 ? 
            <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
                <ModalContainer>
                    <ModalMain>
                    <ModalHeader>
                        <CloseBox onPress={() => setVisible(false)}>
                            <Icon name="close" size={25} />
                        </CloseBox>
                    </ModalHeader>
                    <NoMycardText>You don't have your namecard yet.{"\n"}Let's GO Make your own namecard.</NoMycardText>    
                    <TouchableScale
                    onPress={() => navigation.navigate('MyNameCard')}
                    >
                        <ToMycardButton>
                            <ToMycardText>GO</ToMycardText>
                        </ToMycardButton>
                    </TouchableScale> 
                    </ModalMain>
                </ModalContainer>
            </Modal>

        : <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
            <ModalContainer>
                <ModalMain>
                    <ModalHeader>
                        <CloseBox onPress={() => setVisible(false)}>
                            <Icon name="close" size={25} />
                        </CloseBox>
                    </ModalHeader>
                    <QRCode
                        size={QR_SIZE}
                        value={query}
                    />
                    <DropdownContainer>
                        <SelectDropdown
                            data={dropList}
                            defaultValue={dropList[0]}
                            onSelect={(selectedItem, index) => {
                                setQuery(uuidList[index])
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </DropdownContainer>
                </ModalMain>
            </ModalContainer>
        </Modal>
        }
        </>  
    )
}