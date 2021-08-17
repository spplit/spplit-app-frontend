import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Category from './Category';
import { useIsFocused } from '@react-navigation/native';

// 내가 가지고 있는 타인의 명함 정보를 불러옴

export default function CardList() {

    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(true);

    const [cardList, setCardList] = useState([]);


    // 토큰 획득
    USER_TOKEN = "8e773c033cd7d7dc036536190748b8ea2b6e882b"
    const AuthStr = "Token ".concat(USER_TOKEN)

    // 카드 획득
    useEffect(() => {
        const url = "http://spplit.eba-p9nfypbf.us-west-2.elasticbeanstalk.com/card/";
        axios.get(url, { headers: { Authorization: AuthStr } })
            .then(function (response) {
                console.log("Card-data loading success");
                setCardList(response.data);
            })
            .finally(() => setLoading(false))
            .catch(function (error) {
                console.log(error)
                console.log("Card-data loading failure");
            })
    }, [isFocused])

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <Category cardList={cardList} />
    )
}