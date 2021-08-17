import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Category from './Category';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 내가 가지고 있는 타인의 명함 정보를 불러옴

export default function CardList() {
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(true);
    const [cardList, setCardList] = useState([]);

    // 토큰 획득
    async function getToken() {
        const token = await AsyncStorage.getItem("StorageKey")
        console.log(token)
        return token
    }

    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/card";

    useEffect(() => {
        async function getData() {
            const USER_TOKEN =  await getToken();
            const AuthStr = "Token ".concat(USER_TOKEN)
            console.log(AuthStr)
            axios.get(url, { headers: { Authorization: AuthStr } })
            .then((response) => {
                console.log(response.data)
                setCardList(response.data)
                console.log(cardList)
                console.log("Card-data loading success");
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                console.log("Card-data loading failure");
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

    return (
        <Category cardList={cardList} />
    )
}