import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Text, View, Button, TouchableOpacity, Touchable } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

const Camera = require('../assets/images/camera_icon.png');
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
    font-size: 18px;
`;

const CameraContainer = styled.View`
    background-color: #f2f2f2;
    position: absolute;
    width: 26px;
    height: 26px;
    top: 55px;
    right: 85px;

    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const CameraImage = styled.Image`
    width: 18px;
    height: 18px;
`;

export default function QRCamera({ visible, setVisible }) {
    const url = "http://spplitsuccess.eba-xefre73m.us-west-2.elasticbeanstalk.com/request";
    USER_TOKEN = "d956ff93cd9912ce04966deef265679dadbfda4b"
    const AuthStr = "Token ".concat(USER_TOKEN)

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState();
    const [cameraVisible, setCameraVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        let form = new FormData()
        form.append('cardId', code)
        
        axios.post(
            url, form, 
            { headers: { Authorization: AuthStr,
            "Content-Type" : "multipart/form-data" } 
            })
            .then((response) => { console.log("success") })
            .then(() => {
                alert('card request success');
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [code])

    


    const handleBarCodeScanned = (BarCodeScannerResult) => {
        const { type, data, bounds: { origin } = {} } = BarCodeScannerResult;
        const { x, y } = origin;
        if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + boxLen / 2) && y <= (viewMinY + boxLen / 2)) {
            setScanned(true);
            setVisible(false);
            setCode(data);
            console.log(code)
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
        <View>
            <Modal
                visible={cameraVisible}
                onRequestClose={() => {setCameraVisible(!cameraVisible)}}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[StyleSheet.absoluteFillObject, {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },]}
                >
                    <View style={{
                        borderWidth: 1,
                        borderColor: "white",
                        width: boxLen,
                        height: boxLen
                    }}>

                    </View>
                    <BackContainer onPress={() => setCameraVisible(!cameraVisible)}>
                        <BackText>Close</BackText>
                    </BackContainer>
                </BarCodeScanner>
            </Modal>

            <TouchableOpacity onPress={() => setCameraVisible(true)}>
                    <CameraContainer>
                        <CameraImage resizeMode='contain' source={Camera} />
                    </CameraContainer>
            </TouchableOpacity>

        </View>
    )
}