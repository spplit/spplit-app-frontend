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
    height: 20%;
    width : ${MODAL_WIDTH};
    display: flex;
    align-items: flex-end;
`;

const ModalContent = styled.View`
    height: 50%;
    width : ${MODAL_WIDTH};
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.View`
    position: absolute;
    top: 10px;
`;

const FlexRow = styled.View`
    display: flex;
    flex-direction: row;
`;

const ModalButtom = styled.View`
    height: 15%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Button = styled.TouchableOpacity`
    border-radius: 10px;
    width: ${MODAL_WIDTH / 3};
    height: 80%;
    background-color: #29548e;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
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
                setVisible(false);
            })
            .catch((err) => console.log(err))
    }

    const decline = (id) => {
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request/${id}/decline`
        axios.get(url, { headers: { Authorization: auth } })
            .then((response) => {
                console.log("decline success")
                alert(`you declined request`);
                setVisible(false);
            })
            .catch((err) => console.log(err))
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
                            <Icon name="close" size={20} />
                        </CloseBox>
                    </ModalHeader>
                    <ModalContent>
                        <ContentBox>
                            <FlexRow>
                                <Text style={{ color: '#29548e' }}>약속  </Text>
                                <Text>{props.title}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{ color: '#29548e' }}>약속 요청한 사람  </Text>
                                <Text>{props.sender_name}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{ color: '#29548e' }}>약속 대상  </Text>
                                <Text>{props.receiver_name}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{ color: '#29548e' }}>약속 내용  </Text>
                                <Text>{props.content}</Text>
                            </FlexRow>
                            <FlexRow>
                                <Text style={{ color: '#29548e' }}>약속 시간  </Text>
                                <Text>{props.appointment_date}</Text>
                            </FlexRow>
                        </ContentBox>
                    </ModalContent>
                    <ModalButtom>
                        <Button onPress={() => accept(props.id)}><Text style={{ color: 'white' }}>accept</Text></Button>
                        <Button onPress={() => decline(props.id)}><Text style={{ color: 'white' }}>decline</Text></Button>
                    </ModalButtom>
                </ModalMain>
            </ModalContainer>
        </Modal>
    )
}