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
    height: 80%;
    width : ${MODAL_WIDTH};
`;

const CloseBox = styled.TouchableOpacity`
    padding: 15px;
`;

export default function ScheduleModal({ visible, setVisible, props }) {

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
                        <Text>약속 요청한 사람 : {props.user1_name}</Text>
                        <Text>약속 대상 : {props.user2_name}</Text>
                        <Text>약속 내용 : {props.content}</Text>
                        <Text>약속 시간 : {props.appointment_date}</Text>
                    </ModalContent>
                </ModalMain>
            </ModalContainer>
        </Modal>
    )
}