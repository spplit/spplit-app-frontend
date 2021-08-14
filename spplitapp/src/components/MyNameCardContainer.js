import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Alert, Modal, Pressable, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import axios from 'axios';

const close = require('../assets/images/close_icon.png');

// 누르면 모달 오픈
const CardContainer = styled.View`
    width: 315px;
    height: 400px;
    border-radius: 14px;
    background-color: #d9d9d9;
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
`;

//closeText 담긴 부분
const ModalHeader = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: flex-end;
    right: 15px;
    margin-bottom: 5px;
`;

// 닫기 버튼
const CloseText = styled.Text`
    color: #29548e;
`;

// Create Your New Namecard!
const AnnounceText = styled.Text`
    font-size: 17px;
    margin: 10px 20px;
    color: #707070;
`;

// Container의 공통항목(Input, Button)
const Container = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
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

const FirstNameInput = styled(Input)`
    width: 40%;
`;

const LastNameInput = styled(Input)`
    width: 40%;
`;

const JobInput = styled(Input)`
    width: 90%;
`;

const PhoneNumberInput = styled(Input)`
    width: 90%;
`;

const EmailInput = styled(Input)`
    width: 90%;
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

export default function MyNameCardContainer() {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');


    const url = "https://spplit.herokuapp.com/request";
    USER_TOKEN = "d956ff93cd9912ce04966deef265679dadbfda4b"
    const AuthStr = "Token ".concat(USER_TOKEN)

    let form = new FormData()
    form.append('name', name)
    form.append('job', job)
    form.append('phone', phone)
    form.append('email', email)
    form.append('tag1', tag1)
    form.append('tag2', tag2)
    form.append('tag3', tag3)
    
    axios.post(
        url, form,
        { headers: { Authorization: AuthStr,
            "Content-Type" : "multipart/form-data" } 
        })
        .then(response => {
        console.log(response);
        })
        .catch(error => {
        console.log(error);
    });



    return (
        <View>
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
                    <FirstNameInput placeholder="First Name"/>
                    <LastNameInput placeholder="Last Name"/>
                </InputContainer>

                <InputContainer>
                    <JobInput placeholder="Your Job"/>
                </InputContainer>

                <InputContainer>
                    <PhoneNumberInput placeholder="Your PhoneNumber"/>
                </InputContainer>

                <InputContainer>
                    <EmailInput placeholder="Your Email Address"/>
                </InputContainer>

                <InputContainer>
                    <TagInput placeholder="First Tag"/>
                </InputContainer>

                <InputContainer>
                    <TagInput placeholder="Second Tag"/>
                </InputContainer>

                <InputContainer>
                    <TagInput placeholder="Third Tag"/>
                </InputContainer>

                <SubmitButtonContainer>
                    <TouchableOpacity>
                        <SubmitButton>
                            <SubmitText>Submit</SubmitText>
                        </SubmitButton>
                    </TouchableOpacity>
                </SubmitButtonContainer>
            
            </Modal>

            <TouchableScale
                activeScale={0.9}
                tension={18}
                friction={7}
                useNativeDriver={true}
                onPress={() => setModalVisible(true)}
            >
                <CardContainer />
            </TouchableScale>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });