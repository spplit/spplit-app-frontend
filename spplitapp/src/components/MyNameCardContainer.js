import React, { useRef } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Button, PanResponder, Animated } from 'react-native';

const CardContainer = styled.View`
    width: 315px;
    height: 460px;
    border-radius: 14px;
    background-color: #d9d9d9;
`;

export default function MyNameCardContainer() {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            // onPanResponderGrant: () => {
            //     pan.setOffset({
            //         x: pan.x._value,
            //         y: pan.y._value,
            //     });
            // },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease : () => {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 }
                }).start();
            }
        })
    ).current;

    return (
        <View>
            <Animated.View style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }} {...panResponder.panHandlers}>
                <CardContainer />
            </Animated.View>
        </View>
    )
}