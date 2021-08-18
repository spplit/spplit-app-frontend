import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import TouchableScale from 'react-native-touchable-scale';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Checkbox } from 'react-native-paper';


const backbutton = require('../assets/images/backbutton_icon.png')

const HeaderContainer = styled.View`
    background-color: white;
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 15px;
`;

const BackButtonContainer = styled.View`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 22px;
    bottom: 12px;
`;

const BackButton = styled.Image`
    width: 22px;
`;

const TotalContainer = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
`;

const CategoryOuterContainer = styled.View`
    width: 100%;
    height: 88%;
    position: absolute;
    background-color: white;
    bottom: 0;
    align-items: center;
    padding-top: 20px;
`;

const CategoryContainer = styled.View`
    width : 88%;
    height : 40px;
    background-color : #d9d9d9;
    flex-direction : row;
    align-items: center;
    margin-bottom : 20px;
    border-radius : 10px;
`;

const CategoryText = styled.Text`
    font-size : 20px;
    margin-left : 20px;
`;

const CategoryCheckBoxContainer = styled.View`
    position : absolute;
    right : 0px;
`;



const UpdateButtonContainer = styled.View`
    width : 40%;
    height : 40px;
    background-color : #29548e;
    align-items: center;
    justify-content: center;
    border-radius : 10px;
    ${({ active }) =>
        active &&
        css`
          background-color: #4672AF;
          &:hover {
            background: #4672AF;
          }
        `}
`;


const UpdateButtonText = styled.Text`
    font-size : 20px;
    color : #ffffff;

    &:disabled {
    opacity: 0.5;
    background-color : #d9d9d9;
  }
`;

export default function CategoryEdit() {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    
    const [categoryList, setCategoryList] = useState([]);

    const [isChecked3, setIsChecked3] = useState(false)
    const [isChecked4, setIsChecked4] = useState(false)
    const [isChecked5, setIsChecked5] = useState(false)
    const [isChecked6, setIsChecked6] = useState(false)
    const [isChecked7, setIsChecked7] = useState(false)


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
                setIsChecked3(response.data[0].is_checked_category3)
                setIsChecked4(response.data[0].is_checked_category4)
                setIsChecked5(response.data[0].is_checked_category5)
                setIsChecked6(response.data[0].is_checked_category6)
                setIsChecked7(response.data[0].is_checked_category7)
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


    const categoryEditList = []
    categoryEditList.push(categoryList[0].category1)
    categoryEditList.push(categoryList[0].category2)
    categoryEditList.push(categoryList[0].category3)
    categoryEditList.push(categoryList[0].category4)
    categoryEditList.push(categoryList[0].category5)
    categoryEditList.push(categoryList[0].category6)
    categoryEditList.push(categoryList[0].category7)


    const UpdateBtnClick = () => {
        var categoryEditCheckList = []
        categoryEditCheckList.push(isChecked3)
        categoryEditCheckList.push(isChecked4)
        categoryEditCheckList.push(isChecked5)
        categoryEditCheckList.push(isChecked6)
        categoryEditCheckList.push(isChecked7)
  
        let cnt_true = 0
        for (var i = 0; i < categoryEditCheckList.length; i++) {
            if (categoryEditCheckList[i] === true) {
                cnt_true = cnt_true + 1
            }
        }

        if (cnt_true === 2) {
            const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/user/division/change"
            
            const body = {
                is_checked_category3 : String(isChecked3)[0].toUpperCase() + String(isChecked3).slice(1),
                is_checked_category4 : String(isChecked4)[0].toUpperCase() + String(isChecked4).slice(1),
                is_checked_category5 : String(isChecked5)[0].toUpperCase() + String(isChecked5).slice(1),
                is_checked_category6 : String(isChecked6)[0].toUpperCase() + String(isChecked6).slice(1),
                is_checked_category7 : String(isChecked7)[0].toUpperCase() + String(isChecked7).slice(1)
            }

            async function updateCategory() {
                const USER_TOKEN =  await getToken();
                const AuthStr = "Token ".concat(USER_TOKEN)
                console.log(AuthStr)
                axios.patch(
                    url, body, 
                    { headers: { Authorization : AuthStr} 
                    })
                    .then((response) => { 
                        console.log("category update success")
                        alert("Your Categories have been updated !")
                    })
                    .then(() => {
                        navigation.navigate('Main');
                    })
                    .catch(function (error) {
                        console.log("category update failure");
                        console.log(error)
                    })
                }
            updateCategory()
        }

        else {
            alert("You should choose total 4 categories !")
        }
    }




    return (
        <TotalContainer>
            <HeaderContainer>
                <BackButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackButton resizeMode="contain" source={backbutton} />
                    </TouchableOpacity>
                </BackButtonContainer>
                <Title>Categories</Title>
            </HeaderContainer>
            
            <CategoryOuterContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[0]}</CategoryText>
                <CategoryCheckBoxContainer>
                <Checkbox.Item
                    disabled={true}
                />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[1]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                        disabled={true}
                    />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[2]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                        value={isChecked3}
                        onValueChange={setIsChecked3}
                        status={isChecked3 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setIsChecked3(!isChecked3);
                        }}
                    />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[3]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                            value={isChecked4}
                            onValueChange={setIsChecked4}
                            status={isChecked4 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked4(!isChecked4);
                            }}
                        />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[4]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                            value={isChecked5}
                            onValueChange={setIsChecked5}
                            status={isChecked5 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked5(!isChecked5);
                            }}
                        />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[5]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                            value={isChecked6}
                            onValueChange={setIsChecked6}
                            status={isChecked6 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked6(!isChecked6);
                            }}
                    />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[6]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <Checkbox.Item
                            value={isChecked7}
                            onValueChange={setIsChecked7}
                            status={isChecked7 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked7(!isChecked7);
                            }}
                        />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <UpdateButtonContainer>
            <TouchableScale
            activeScale={0.9}
            tension={18}
            friction={7}
            useNativeDriver={true}
            onPress={() => UpdateBtnClick()}>
                <UpdateButtonText>UPDATE</UpdateButtonText>
            </TouchableScale>
            </UpdateButtonContainer>
            </CategoryOuterContainer>
        </TotalContainer>
    )
}