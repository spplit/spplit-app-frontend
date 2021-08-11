import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

const CardContainer = styled.View`
    width: 315px;
    height: 400px;
    border-radius: 14px;
    background-color: #d9d9d9;
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
`;

export default function MyNameCardContainer() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                presentationStyle='pageSheet'
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
            >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </Modal>
            <TouchableScale
                activeScale={0.9}
                tension={18}
                friction={7}
                useNativeDriver={true}
                onPress={() => setModalVisible(true)}
            >
                <CardContainer />
            </TouchableScale>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });