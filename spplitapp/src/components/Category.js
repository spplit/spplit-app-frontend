import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import Search from '../components/Search';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const home = require('../assets/images/home_icon.png')
// const bookmark = require('../assets/images/bookmark_icon.png')
// const coffee = require('../assets/images/coffee_icon.png')
// const book = require('../assets/images/book_icon.png')

const TotalContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 88%;
    bottom: 0;
    background-color: white;
`;

const CategoryContainer = styled.View `
    z-index : 100;
    position: absolute;
    width: 100%;
    height: 90px;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

const Categorybar = styled.View `
    position: absolute;
    background-color: white;
    box-shadow: 4px 4px 10px rgba(17, 17, 26, 0.25);
    width: 90%;
    height: 60px;
    bottom: 30px;
    border-radius: 60px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

// const CategoryIconContainer = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
// `;

// const CategoryIcon = styled.Image`
//     width: 23px;
//     height: 23px;
// `;

// const CategoryIconList = [home, bookmark, coffee, book]

const CategoryTextContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width : 25%;
`;

const CategoryText = styled.Text`
    text-align : center;
    border: none;
    ${({ active }) =>
        active &&
        css`
          background-color: #4672AF;
          &:hover {
            background: #4672AF;
          }
        `}
`;



export default function Category({ cardList }) {
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [clicked, setClicked] = useState(0);

     // 토큰 획득
     async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        console.log(token)
        return token
    }

    const url = "http://spplit.eba-p9nfypbf.us-west-2.elasticbeanstalk.com/user/division";

    useEffect(() => {
        async function getData() {
            const USER_TOKEN =  await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            console.log(AuthStr)
            axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log("category loading success")
                setCategoryList(response.data)
                console.log(categoryList)
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                console.log("category loading failure");
            })
        }

        getData()

    }, [isFocused])

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }


    const categoryCheckedList = []

    if (categoryList[0].is_checked_category1) {
        categoryCheckedList.push(categoryList[0].category1)
    }

    if (categoryList[0].is_checked_category2) {
        categoryCheckedList.push(categoryList[0].category2)
    }

    if (categoryList[0].is_checked_category3) {
        categoryCheckedList.push(categoryList[0].category3)
    }

    if (categoryList[0].is_checked_category4) {
        categoryCheckedList.push(categoryList[0].category4)
    }

    if (categoryList[0].is_checked_category5) {
        categoryCheckedList.push(categoryList[0].category5)
    }

    if (categoryList[0].is_checked_category6) {
        categoryCheckedList.push(categoryList[0].category6)
    }

    if (categoryList[0].is_checked_category7) {
        categoryCheckedList.push(categoryList[0].category7)
    }


    const categoryBar = categoryCheckedList.map((value, index) => {
        return (
            <CategoryTextContainer>
                <CategoryText key={index} active={clicked === index} onPress={() => setClicked(index)}>{value}</CategoryText>
            </CategoryTextContainer>
        )
    })

    const cards = cardList.filter((card)=> {
        // All 띄우기
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[0])) {
            return card
        }
        // Bookmark 띄우기
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[1]) && card.isBookmarked === true) {
            return card
        }
        // 카테고리별 필터
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[2]) && categoryCheckedList[2].toLowerCase() === card.division.toLowerCase()) {
            return card
        }
        if (clicked === categoryCheckedList.indexOf(categoryCheckedList[3]) && categoryCheckedList[3].toLowerCase() === card.division.toLowerCase()) {
            return card
        }
    })


    return (
        <TotalContainer>
            <Search cards={cards} />
            <CategoryContainer>
                <Categorybar>
                    {categoryBar}
                </Categorybar>
            </CategoryContainer>
         </TotalContainer>
    )
}
