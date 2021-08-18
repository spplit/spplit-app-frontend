import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Alert, Modal, Pressable, TouchableOpacity, TouchableOpacityBase, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const close = require('../assets/images/close_icon.png');

const CardListContainer = styled.ScrollView`
    width : 100%;
    height : 100%;
`;


// 누르면 모달 오픈
const CardContainer = styled.View`
    width: 300px;
    height: 400px;
    border-radius: 14px;
    background-color: #d9d9d9;
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
    justify-content : center;
    align-items : center;
    margin-top : 150px;
    margin-left : 10px;
    margin-right : 10px;
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

const NameText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const JobText = styled.Text`
    font-size: 20px;
    margin-bottom: 15px;
`;

const PhoneText = styled.Text`
    font-size: 20px;
    margin-bottom: 15px;
`;

const EmailText = styled.Text`
    font-size: 20px;
    margin-bottom: 15px;
`;

const TagContainer = styled.View`
    flex-direction: row;
`;

const TagText = styled.Text`
    background-color: #29548E;
    font-size : 15px;
    margin-left : 5px;
    color : #ffffff;
    padding : 3px;
    border-radius: 3px;
`;


export default function MyNameCardContainer() {
    const [isLoading, setLoading] = useState(true);
    const [myCardList, setMyCardList] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');

    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        console.log(token)
        return token
    }

    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/mycard";

    useEffect(() => {
        async function getData() {
            const USER_TOKEN =  await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            console.log(AuthStr)
            axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("Mycard loading success")
                setMyCardList(response.data)
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                console.log("Mycard loading failure");
            })
        }
        getData()

    }, [modalVisible])

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const SubmitBtnClick = () => {

        const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/mycard/";
 
        if (firstName && lastName && job && phone && email && tag1 && tag2 && tag3) {

            const body = {
                name : firstName + " " + lastName,
                job : job,
                phone : phone,
                email : email,
                tag1 : tag1,
                tag2 : tag2,
                tag3 : tag3,
            }


            async function createMyCard() {
                const USER_TOKEN =  await getToken();
                const AuthStr = "Token ".concat(USER_TOKEN)
                console.log(AuthStr)
                axios.post(
                    url, body, 
                    { headers: { Authorization : AuthStr} 
                    })
                    .then((response) => { 
                        setFirstName("")
                        setLastName("")
                        setJob("")
                        setEmail("")
                        setPhone("")
                        setTag1("")
                        setTag2("")
                        setTag3("")
                        console.log("Mycard submit success")
                    })
                    .then(() => {
                        alert("Your Card is successfully added !")
                    })
                    .then(() => {
                        setModalVisible(!modalVisible)
                    })
                    .catch(function (error) {
                        console.log("Mycard submit failure");
                        console.log(error)
                    })
            }
            createMyCard()
        }

        else {
            alert("You should fill out all the contents above !")
        }
    }

    return (
            <CardListContainer 
                horizontal={true}
                showsHorizontalScrollIndicator = {true}
            >
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
                        <FirstNameInput placeholder="First Name" value={firstName} onChangeText={text => setFirstName(text)}/>
                        <LastNameInput placeholder="Last Name" value={lastName} onChangeText={text => setLastName(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <JobInput placeholder="Your Job" value={job} onChangeText={text => setJob(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <PhoneNumberInput placeholder="Your PhoneNumber" value={phone} onChangeText={text => setPhone(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <EmailInput placeholder="Your Email Address" value={email} onChangeText={text => setEmail(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <TagInput placeholder="First Tag" value={tag1} onChangeText={text => setTag1(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <TagInput placeholder="Second Tag" value={tag2} onChangeText={text => setTag2(text)}/>
                    </InputContainer>

                    <InputContainer>
                        <TagInput placeholder="Third Tag" value={tag3} onChangeText={text => setTag3(text)}/>
                    </InputContainer>

                    <SubmitButtonContainer>
                        <TouchableOpacity onPress={() => SubmitBtnClick()}>
                            <SubmitButton>
                                <SubmitText>Submit</SubmitText>
                            </SubmitButton>
                        </TouchableOpacity>
                    </SubmitButtonContainer>
                
                </Modal>

                {myCardList && (
                    myCardList.map((mycard) => (
                    <CardContainer>
                        <NameText>{mycard.name}</NameText>
                        <JobText>{mycard.job}</JobText>
                        <EmailText>{mycard.email}</EmailText>
                        <PhoneText>{mycard.phone}</PhoneText>
                        <TagContainer>
                            <TagText>{mycard.tag1}</TagText>
                            <TagText>{mycard.tag2}</TagText>
                            <TagText>{mycard.tag3}</TagText>
                        </TagContainer>
                    </CardContainer>
                    )))}

                <TouchableScale
                    activeScale={0.9}
                    tension={18}
                    friction={7}
                    useNativeDriver={true}
                    onPress={() => setModalVisible(true)}
                >
                    <CardContainer/>
                </TouchableScale>
            </CardListContainer>
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