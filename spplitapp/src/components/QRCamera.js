import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Text, Button } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import axios from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';

// mount : b321c5a1-1301-4107-ab0b-67d2feba4822   

export default function QRCamera({ visible, setVisible }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setVisible(false);
        setCode(data);
        console.log(data)
        setScanned(false);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
                    style={StyleSheet.absoluteFillObject}
                />
                <Button title={'go back'} onPress={() => setVisible(false)} />

            </Modal> :
                <></>
            }

        </>
    )
}