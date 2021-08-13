import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Text } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/AntDesign';

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
    background-color: white;
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

const ModalButtom = styled.View`
    /* background-color: yellow; */
    height: 20%;
    width: ${QR_SIZE};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloseBox = styled.TouchableOpacity`
    padding: 15px;
`;

export default function QRModal({ visible, setVisible }) {

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
                    <QRCode
                        size={QR_SIZE}
                        value={"hello"}
                    />
                    <ModalButtom>
                        <Text>명함 고르세요</Text>
                    </ModalButtom>
                </ModalMain>
            </ModalContainer>
        </Modal>
    )
}