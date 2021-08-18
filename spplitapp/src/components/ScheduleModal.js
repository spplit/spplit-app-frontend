import { StyleSheet, Dimensions, Modal, Text } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import { validatePathConfig } from '@react-navigation/native';

const MODAL_WIDTH = 320
const MODAL_HEIGHT = 250

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
    position: absolute;
    bottom: 60px;
    height: 50%;
    width : ${MODAL_WIDTH};
    align-items: center;
    justify-content: center;
`;

const ContentBox = styled.View`
`;

const FlexRow = styled.View`
    display: flex;
    flex-direction: row;
`;

const CloseBox = styled.TouchableOpacity`
    padding: 10px;
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
                            <Icon resizeMode="contain" name="close" size={20} />
                        </CloseBox>
                    </ModalHeader>
                    <ModalContent>
                        <ContentBox>
                            <FlexRow>
                                <Text style={{color: '#29548e'}}>약속  </Text>
                                <Text>{props.title}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{color: '#29548e'}}>약속 요청한 사람  </Text>
                                <Text>{props.user1_name}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{color: '#29548e'}}>약속 대상  </Text>
                                <Text>{props.user2_name}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{color: '#29548e'}}>약속 내용  </Text>
                                <Text>{props.content}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{color: '#29548e'}}>약속 시간  </Text>
                                <Text>{props.appointment_date}</Text>
                            </FlexRow>
                        </ContentBox>
                    </ModalContent>
                </ModalMain>
            </ModalContainer>
        </Modal>
    )
}