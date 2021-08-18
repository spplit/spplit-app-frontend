import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, Modal, CheckBox } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'
import { Checkbox } from 'react-native-paper';

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

const backbutton = require('../assets/images/backbutton_icon.png')

const DetailContainer = styled.View`
    flex: 1;
    background-color: white;
`;

// 회색 컨테이너
const NameCardContainer = styled.View`
    overflow: visible;
    position: relative;
    width: 100%;
    flex: 48;
    background-color: #d9d9d9;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

// 회색 부분 안에 명함 주인 정보를 모아둔 컨테이너
const NamecardContentContanier = styled.View`
    position: absolute;
    width: 100%;
    bottom: 25px;
    left: 30px;
`;


// 흰색 컨테이너
const ContentContainer = styled.View`
    width: 100%;
    flex: 52;
    background-color: #ffffff;
    margin-top : 20px;
`;

const BackButtonContainer = styled.View`
    position: absolute;
    top: 50px;
    left: 22px;
    width: 30px;
    height: 30px;
`;

const BackButton = styled.Image`
    position: absolute;
    width: 30px;
    height: 30px;
`;

const MemoButtonContainer = styled.View`
    position: absolute;
    bottom: -10px;
    right: 40px;
`;

const MemoButton = styled.View`
    background-color: #4672af;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    box-shadow: 0px 5px 5px rgba(149, 157, 165, 0.8);
    align-items: center;
    justify-content: center;
`;

const MemoButtonText = styled.Text`
    color : #ffffff;
    font-size : 30px;
`;

const AppointmentButtonContainer = styled.View`
    position: absolute;
    bottom: 25px;
    width: 100%;
    height: 55px;
`;

const AppointmentButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 55px;
    background-color: #4672af;
    margin: auto;
    border-radius: 15px;
`;

const AppointmentText = styled.Text`
    color: white;
    font-size: 20px;
`;


const NameText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const JobText = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;

const TagContainer = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

const TagBox = styled.View`
    background-color: #29548E;
    border-radius: 5px;
    margin-right: 4px;
`;

const TagText = styled.Text`
    font-size : 15px;
    margin-left : 2px;
    color : #ffffff;
    padding : 3px;
`;

const EditText = styled.Text`
    font-size: 15px;
    margin-top : 10px;
    margin-bottom : 5px;
    margin-right : 20px;
    margin-left : 20px;
`;

const EditTextInput = styled.TextInput`
    font-size: 15px;
    width : 90%;
    height : 35px;
    margin-bottom: 18px;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding : 5px;
    margin-left : 10px;
`;

const EditTagInput = styled.TextInput`
    font-size: 12px;
    width: auto;
    height : 35px;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding : 4px 6px;
    margin-right: 10px;
    text-align : center;
`;

const CustomTagContainer = styled.View`
    flex-direction: row;
    margin-top : 10px;
`;

const CustomTagBox = styled.View`
    background-color: #707070;
    border-radius: 5px;
    margin-right: 4px;
`;

const CustomTagText = styled.Text`
    font-size : 15px;
    color : #ffffff;
    padding : 3px;
`;

const CategoryContainer = styled.View`
    flex-direction: row;
`;

const CheckBoxContainer = styled.View`
    display: flex;
    flex-direction: row;

`;

const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-left : 20px;
    margin-top: 8px;

`;

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

const TitleInputText = styled.Text`
    font-size: 18px;
    margin-left : 20px;
    margin-top : 20px;
    color: #707070;
`;

const ContentInputText = styled.Text`
    font-size: 18px;
    margin-top : 20px;
    margin-left : 20px;
    color: #707070;
`;

const DateInputText = styled.Text`
    font-size: 18px;
    margin-top : 20px;
    margin-left : 20px;
    color: #707070;
`;

const TitleInput = styled.TextInput`
    width: 90%;
    height : 50px;
    margin-top : 10px;
    margin-left : 20px;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f2f2f2;
    box-shadow: 0px 6px 5px rgba(50, 50, 93, 0.25);
`;

const ContentInput = styled.TextInput`
    width: 90%;
    height : 200px;
    margin-top : 10px;
    margin-left : 20px;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f2f2f2;
    box-shadow: 0px 6px 5px rgba(50, 50, 93, 0.25);
`;

const DateInput = styled.TextInput`
    width: 90%;
    height : 50px;
    margin-top : 10px;
    margin-left : 20px;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f2f2f2;
    box-shadow: 0px 6px 5px rgba(50, 50, 93, 0.25);
`;

const DateContainer = styled.View`
    position: relative;
    flex-direction : row;
    margin-top: 20px;
`;

const DatePickerButton = styled.View`
    position: absolute;
    bottom: 0px;
    right: -300px;
    width: 70px;
    height: 30px;
    background-color: #4672af;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

const DatePickerButtonText = styled.Text`
    color: white;
    font-size: 12px;
`;

const SubmitButtonContainer = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
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



export default function Detail({ route, navigation }) {


    const { id, name, job, email, phone, tag1, tag2, tag3, custom_tag1, custom_tag2, custom_tag3, custom_tag4, custom_tag5, notes, division, isBookmarked } = route.params;


    const [isLoading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [activeCardId, setActiveCardId] = useState(id)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    
    const [editNote, setEditNote] = useState(notes)
    const [editCategory, setEditCategory] = useState(division)
    const [editBookmark, setEditBookmark] = useState(isBookmarked)
    const [customTag1, setCustomTag1] = useState(custom_tag1)
    const [customTag2, setCustomTag2] = useState(custom_tag2)
    const [customTag3, setCustomTag3] = useState(custom_tag3)
    const [customTag4, setCustomTag4] = useState(custom_tag4)
    const [customTag5, setCustomTag5] = useState(custom_tag5)

    const [categoryList, setCategoryList] = useState([]);



    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        console.log(token)
        return token
    }

    useEffect(() => {
        const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/user/division"
        async function getData() {
            const USER_TOKEN =  await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            console.log(AuthStr)
            axios.get(url, { headers : { Authorization: AuthStr} })
            .then(function(response) {
                console.log("category loading success")
                setCategoryList(response.data)
            })
            .finally(() => setLoading(false))
            .catch(function(error) {
            console.log("category loading failure")
            })
        }

        getData()
        
    }, [])

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const customCategoryList = []
    customCategoryList.push(categoryList[0].category3)
    customCategoryList.push(categoryList[0].category4)
    customCategoryList.push(categoryList[0].category5)
    customCategoryList.push(categoryList[0].category6)
    customCategoryList.push(categoryList[0].category7)

    
    const hideDatePicker = () => {
        setDatePickerVisible(false);
      };
    
    const handleConfirm = (date) => {
        setAppointmentDate(date.format("yyyy/MM/dd"))
        hideDatePicker();
    };

    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        console.log(token)
        return token
    }

    const SubmitBtnClick = () => {
        

        
        const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/appointment/request";
 
        if (title && content && appointmentDate) {

            let form = new FormData()
            form.append('active_card', id)
            form.append('title', title)
            form.append('content', content)
            form.append('appointment_date', appointmentDate)

            async function createAppointment() {
                const USER_TOKEN =  await getToken();
                const AuthStr = "Token ".concat(USER_TOKEN)
                axios.post(
                    url, form, 
                    { headers: { Authorization: AuthStr } 
                    })
                    .then((response) => { 
                        setActiveCardId("")
                        setTitle("")
                        setContent("")
                        setAppointmentDate("")
                        console.log("Appointment submit success")
                    })
                    .then(() => {
                        alert("Appointment has been successfully sent !")
                    })
                    .then(() => {
                        setModalVisible(!modalVisible)
                    })
                    .catch(function (error) {
                        console.log("Appointment submit failure");
                        // console.log(error.response.data)
                        console.log(error.response.status)
                    })
            }
            createAppointment()
        }

        else {
            alert("You should fill out all the contents above !")
        }
    }

    const UpdateBtnClick = () => {
        
        const url = `http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/card/${id}`;
 

        if (editCategory) {

            const body = {
                custom_tag1 : customTag1,
                custom_tag2 : customTag2,
                custom_tag3 : customTag3,
                custom_tag4 : customTag4,
                custom_tag5 : customTag5,
                notes : editNote,
                division : editCategory,
                isBookmarked : String(editBookmark)[0].toUpperCase() + String(editBookmark).slice(1)
            }

            async function updateCard() {
                const USER_TOKEN =  await getToken();
                const AuthStr = "Token ".concat(USER_TOKEN)
                axios.patch(
                    url, body, 
                    { headers: { Authorization: AuthStr } 
                    })
                    .then((response) => { 
                        console.log("Card update success")
                    })
                    .then(() => {
                        alert("Card has been successfully updated !")
                    })
                    .then(() => {
                        navigation.navigate('Main')
                    })
                    .catch(function (error) {
                        console.log("Card update failure");
                        console.log(error)
                    })
            }
            updateCard()
        }

        else {
            alert("You should set one category !")
        }
    }

    return (
        <DetailContainer>
            <NameCardContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ backbutton } />
                    </TouchableOpacity>
                </BackButtonContainer>
                <NamecardContentContanier>
                    <NameText>{name}</NameText>
                    <JobText>{job}</JobText>
                    <Text>{email}</Text>
                    <Text>{phone}</Text>
                    <TagContainer>
                        <TagBox><TagText>{tag1}</TagText></TagBox>
                        <TagBox><TagText>{tag2}</TagText></TagBox>
                        <TagBox><TagText>{tag3}</TagText></TagBox>
                    </TagContainer>   
                    <CustomTagContainer>
                    {customTag1 ? <CustomTagBox><CustomTagText>{customTag1}</CustomTagText></CustomTagBox> : <View></View>}
                    {customTag2 ? <CustomTagBox><CustomTagText>{customTag2}</CustomTagText></CustomTagBox> : <View></View>}
                    {customTag3 ? <CustomTagBox><CustomTagText>{customTag3}</CustomTagText></CustomTagBox> : <View></View>}
                    {customTag4 ? <CustomTagBox><CustomTagText>{customTag4}</CustomTagText></CustomTagBox> : <View></View>}
                    {customTag5 ? <CustomTagBox><CustomTagText>{customTag5}</CustomTagText></CustomTagBox> : <View></View>}
                </CustomTagContainer>
                </NamecardContentContanier>
                <MemoButtonContainer>
                    <TouchableOpacity onPress={() => UpdateBtnClick()}>
                        <MemoButton>
                            <MemoButtonText>+</MemoButtonText>
                        </MemoButton>
                    </TouchableOpacity>
                </MemoButtonContainer>

            </NameCardContainer>
            <ContentContainer>
                <EditText>Write Notes</EditText>
                <EditTextInput value={editNote} onChangeText={text => setEditNote(text)}/>
                <CategoryContainer>
                    <EditText>Set Category</EditText>
                    <SelectDropdown
                        data={customCategoryList}
                        defaultValue={editCategory? editCategory : customCategoryList[0]}
                        onSelect={(selectedItem, index) => {
                            setEditCategory(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={{borderRadius: 8, width: 100, height: 40}}
                        buttonTextStyle={{fontSize: 14}}
                        dropdownStyle={{borderRadius: 8}}
                />
                </CategoryContainer>

                
                <CheckBoxContainer>
                <EditText>Bookmark?</EditText>
                    <Checkbox.Item
                            value={editBookmark}
                            onValueChange={setEditBookmark}
                            status={editBookmark ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setEditBookmark(!editBookmark);
                            }}
                        />

                </CheckBoxContainer>

                <EditText>Write Tags (Max 5 Tags available)</EditText>

                <InputContainer>
                <EditTagInput value={customTag1 ? customTag1 : "    "} onChangeText={text => setCustomTag1(text)}/>
                <EditTagInput value={customTag2 ? customTag2 : "    "} onChangeText={text => setCustomTag2(text)}/>
                <EditTagInput value={customTag3 ? customTag3 : "    "} onChangeText={text => setCustomTag3(text)}/>
                <EditTagInput value={customTag4 ? customTag4 : "    "} onChangeText={text => setCustomTag4(text)}/>
                <EditTagInput value={customTag5 ? customTag5 : "    "} onChangeText={text => setCustomTag5(text)}/>
                </InputContainer>
                <AppointmentButtonContainer>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <AppointmentButton>
                            <AppointmentText>Make An Appointment</AppointmentText>
                        </AppointmentButton>
                    </TouchableOpacity>
                </AppointmentButtonContainer>
            </ContentContainer>

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
                onPress={() => setModalVisible(!modalVisible)}>
                <CloseText>Close</CloseText>
            </TouchableOpacity>
            </ModalHeader>
            <AnnounceText>Create Appointment with your partner!</AnnounceText>
            <TitleInputText>Title</TitleInputText>
            <TitleInput placeholder="Appointment Title" value={title} onChangeText={text => setTitle(text)}/>
            <ContentInputText>Appointment</ContentInputText>
            <ContentInput placeholder="Appointment Content" value={content} onChangeText={text => setContent(text)}/>

            <DateContainer>
            <DateInputText>Date</DateInputText>
            <TouchableOpacity onPress={() => setDatePickerVisible(!isDatePickerVisible)}>
                <DatePickerButton>
                    <DatePickerButtonText>DatePicker</DatePickerButtonText>
                </DatePickerButton>
            </TouchableOpacity>
            </DateContainer>

            <DateInput value={appointmentDate} editable={false}/>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <SubmitButtonContainer>
                <TouchableOpacity onPress={() => SubmitBtnClick()}>
                    <SubmitButton>
                        <SubmitText>Submit</SubmitText>
                    </SubmitButton>
                </TouchableOpacity>
                </SubmitButtonContainer>
            </Modal>

           
        </DetailContainer>
    )
}