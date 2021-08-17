import { StyleSheet, Dimensions, Modal, Text } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import { validatePathConfig } from '@react-navigation/native';

const MODAL_WIDTH = 350
const MODAL_HEIGHT = 600

const ModalContainer = styled.View`
    background-color: #000000aa ;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalMain = styled.View`
    background-color: white;
    border-radius: 10px;
    width : ${MODAL_WIDTH}px;
    height: ${MODAL_HEIGHT}px;
    display: flex;
    align-items: center;
`;

const ModalHeader = styled.View`
    /* background-color: yellow; */
    height: 15%;
    width : ${MODAL_WIDTH};
    display: flex;
    align-items: flex-end;
`;

const ModalContent = styled.View`
    background-color: pink;
    height: 70%;
    width : ${MODAL_WIDTH};
`;
const ModalButtom = styled.View`
    background-color: yellow; 
    height: 15%;
    width: ${MODAL_WIDTH}px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const Button = styled.TouchableOpacity`
    border-radius: 10;
    width: ${MODAL_WIDTH / 3};
    height: 80%;
    background-color: #29548e;
    color: white;
`;
const CloseBox = styled.TouchableOpacity`
    padding: 15px;
`;

export default function AppointModal({ visible, setVisible, props, auth }) {
    const accept = (id) => {
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request/${id}/accept`
        axios.get(url, { headers: { Authorization: auth } })
            .then((response) => {
                console.log("accept success")
                alert(`you accepted request`);
            })
    }

    const decline = (id) => {
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request/${id}/decline`
        axios.get(url, { headers: { Authorization: auth } })
            .then((response) => {
                console.log("decline success")
                alert(`you declined request`);
            })
    }
    return (
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
                    <ModalContent>
                        <Text>약속 : {props.title}</Text>
                        <Text>약속 요청한 사람 : {props.sender_name}</Text>
                        <Text>약속 대상 : {props.receiver_name}</Text>
                        <Text>약속 내용 : {props.content}</Text>
                        <Text>약속 시간 : {props.appointment_date}</Text>
                    </ModalContent>
                    <ModalButtom>
                        <Button onPress={() => accept(props.id)}><Text>accept</Text></Button>
                        <Button onPress={() => decline(props.id)}><Text>decline</Text></Button>
                    </ModalButtom>
                </ModalMain>
            </ModalContainer>
        </Modal>
    )
}