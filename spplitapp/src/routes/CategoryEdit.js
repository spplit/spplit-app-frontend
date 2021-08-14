import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import TouchableScale from 'react-native-touchable-scale';
// import CheckBox from '@react-native-community/checkbox';



const TotalContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: white;
    align-items: center;
`;

const TitleContainer = styled.View`
    width : 100%;
    align-items: center;
    justify-content: center;
    background-color : #ffffff;
    margin-top : 100px;
    margin-bottom : 20px;
`;

const TitleText = styled.Text`
    font-size: 20px;
`;

const CategoryContainer = styled.View`
    width : 88%;
    height : 40px;
    background-color : #d9d9d9;
    flex-direction : row;
    align-items: center;
    margin-bottom : 15px;
    border-radius : 10px;
`;

const CategoryText = styled.Text`
    font-size : 20px;
    margin-left : 20px;
`;

const CategoryCheckBoxContainer = styled.View`
    position : absolute;
    right : 20;
`;

// const UpdateButtonContainer = styled.View`
//     margin-top : 20px;
//     width : 100%;
//     height : 40px;
//     background-color : navy;
//     align-items: center;
//     justify-content: center;
//     border-radius : 10px;
//     ${({ active }) =>
//         active &&
//         css`
//           background-color: #4672AF;
//           &:hover {
//             background: #4672AF;
//           }
//         `}
// `;


const UpdateButtonText = styled.Text`
    font-size : 20px;
    color : #ffffff;
    background-color : navy;
    margin-top : 20px;
    padding : 10px;
    border-radius : 10px;

    &:disabled {
    opacity: 0.5;
    background-color : #d9d9d9;
  }
`;

export default function CategoryEdit() {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    
    const [categoryList, setCategoryList] = useState([]);

    const [isChecked3, setIsChecked3] = useState(false)
    const [isChecked4, setIsChecked4] = useState(false)
    const [isChecked5, setIsChecked5] = useState(false)
    const [isChecked6, setIsChecked6] = useState(false)
    const [isChecked7, setIsChecked7] = useState(false)


    USER_TOKEN = "b8993f10696811e9da44c49e8439076c2a02a98f"
    const AuthStr = "Token ".concat(USER_TOKEN)

    useEffect(() => {
        const url = "http://spplit.eba-p9nfypbf.us-west-2.elasticbeanstalk.com/user/division"
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
           console.log("category loading failure");
        })
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
            const url = "http://spplit.eba-p9nfypbf.us-west-2.elasticbeanstalk.com/user/division/change"
            
            const body = {
                is_checked_category3 : String(isChecked3)[0].toUpperCase() + String(isChecked3).slice(1),
                is_checked_category4 : String(isChecked4)[0].toUpperCase() + String(isChecked4).slice(1),
                is_checked_category5 : String(isChecked5)[0].toUpperCase() + String(isChecked5).slice(1),
                is_checked_category6 : String(isChecked6)[0].toUpperCase() + String(isChecked6).slice(1),
                is_checked_category7 : String(isChecked7)[0].toUpperCase() + String(isChecked7).slice(1)
            }

            axios.patch(
                url, body, 
                { headers: { Authorization: AuthStr,} 
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

        else {
            alert("You should choose total 4 categories !")
        }
    }




    return (
        <TotalContainer>
            <Header />
            <TitleContainer>
                <TitleText>Categories</TitleText>
            </TitleContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[0]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={true} tintColors={{ true: 'red' }, { false: 'green' }} />
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[1]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={true}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[2]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={isChecked3} onValueChange={setIsChecked3}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[3]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={isChecked4} onValueChange={setIsChecked4}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[4]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={isChecked5} onValueChange={setIsChecked5}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[5]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={isChecked6} onValueChange={setIsChecked6}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <CategoryContainer>
                <CategoryText>{categoryEditList[6]}</CategoryText>
                <CategoryCheckBoxContainer>
                    <CheckBox value={isChecked7} onValueChange={setIsChecked7}/>
                </CategoryCheckBoxContainer>
            </CategoryContainer>
            <TouchableScale
            activeScale={0.9}
            tension={18}
            friction={7}
            useNativeDriver={true}
            onPress={() => UpdateBtnClick()}>
                <UpdateButtonText>UPDATE</UpdateButtonText>
            </TouchableScale>
        </TotalContainer>
    )
}