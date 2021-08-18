import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Alert, Modal, Pressable, TouchableOpacity, TouchableOpacityBase, ScrollView } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalHeader = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: flex-end;
    right: 15px;
    margin-bottom: 5px;
`;

const CloseText = styled.Text`
    color: #29548e;
`;

const AnnounceText = styled.Text`
    font-size: 17px;
    margin: 10px 20px;
    color: #707070;
`;

const InputContainer = styled(Container)`
    margin-bottom: 15px;
`;

// Input의 공통항목
const Input = styled.TextInput`
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    height: 70%;
    box-shadow: 0px 6px 5px rgba(50, 50, 93, 0.25);
`;

const TagInput = styled(Input)`
    width: 90%;
`;

const SubmitButtonContainer = styled(Container)`
    margin-top: 10px;
`;

const SubmitButton = styled.View`
    width: 200px;
    height: 70%;
    background-color: #29548e;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

const SubmitText = styled.Text`
    color: white;
    font-size: 20px;
`;

export default function CustomModal({ modalVisible, setModalVisible, route }) {
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            presentationStyle='pageSheet'
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <ModalHeader>

                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <CloseText>Close</CloseText>
                </TouchableOpacity>
            </ModalHeader>
            <AnnounceText>Create Your New NameCard!</AnnounceText>

            <InputContainer>
                <TagInput placeholder="First Tag" value={tag1} onChangeText={text => setTag1(text)} />
            </InputContainer>

            <InputContainer>
                <TagInput placeholder="Second Tag" value={tag2} onChangeText={text => setTag2(text)} />
            </InputContainer>

            <InputContainer>
                <TagInput placeholder="Third Tag" value={tag3} onChangeText={text => setTag3(text)} />
            </InputContainer>

            <SubmitButtonContainer>
                <TouchableOpacity onPress={() => SubmitBtnClick()}>
                    <SubmitButton>
                        <SubmitText>Submit</SubmitText>
                    </SubmitButton>
                </TouchableOpacity>
            </SubmitButtonContainer>

        </Modal>
    )
}