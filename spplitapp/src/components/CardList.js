import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Category from './Category';

// 내가 가지고 있는 타인의 명함 정보를 불러옴

export default function CardList() {

    const [cardList, setCardList] = useState([]);

    // 토큰 획득
    USER_TOKEN = "d956ff93cd9912ce04966deef265679dadbfda4b"


    // 카드 획득
    useEffect( async () => {
        const url = "https://spplit.herokuapp.com/card";

        await axios.get(url, { headers : { Authorization: `token ${USER_TOKEN}` } })
        .then(function(response) {
            setCardList(response.data);
            console.log("Card-data loading success");
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    

    return (
        <Category cardList={cardList}/>
    )
}