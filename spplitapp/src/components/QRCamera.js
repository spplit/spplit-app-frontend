import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

const { width, height } = Dimensions.get('window');
const boxLen = width * 4 / 5;
const viewMinX = (width - boxLen) / 2;
const viewMinY = (height - boxLen) / 2;

const BackContainer = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const BackText = styled.Text`
    color: white;
    font-size: 22px;
`;

export default function QRCamera({ visible, setVisible }) {
    const url = "https://spplit.herokuapp.com/request";
    USER_TOKEN = "6a9c0aa53ae62715659b3575b1cdd011f097e1c9"
    const AuthStr = "Token ".concat(USER_TOKEN)

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        axios.post(
            url,
            { headers: { Authorization: AuthStr } },
            { cardId: code })
            .then((response) => { console.log("success") })
            .then(() => {
                alert('card request success');
            })
            .catch(function (error) {
                console.log("card request failure");
            })

    }, [code])


    const handleBarCodeScanned = (BarCodeScannerResult) => {
        const { type, data, bounds: { origin } = {} } = BarCodeScannerResult;
        const { x, y } = origin;
        if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + boxLen / 2) && y <= (viewMinY + boxLen / 2)) {
            setScanned(true);
            setVisible(false);
            setCode(data);
            setScanned(false);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            {visible ? <Modal style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[StyleSheet.absoluteFillObject, {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },]}
                >
                    <View style={{
                        borderWidth: 4,
                        borderColor: "white",
                        width: boxLen,
                        height: boxLen
                    }}>

                    </View>
                    <BackContainer onPress={() => setVisible(false)}>
                        <BackText>BACK</BackText>
                    </BackContainer>
                </BarCodeScanner>
            </Modal> :
                <></>
            }

        </>
    )
}