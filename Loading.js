import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";

export default function Loading () {
    return (
        <View style={style.loadingContainer}>
            <StatusBar barStyle="dark-content" />
            <Text style={style.loadingText}>Loading...</Text>
        </View>
    );
}

const style = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 100
    },
    loadingText: {
        fontSize: 50
    }
});
