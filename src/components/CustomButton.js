import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { COLORS } from '../constants/Colors';

export default function CustomButton({
    title,
    loading,
    disabled,
    disabledStyle,
    onPress,
    wrapperStyle,
    buttonStyle,
    titleStyle,
    buttonColor
}) {
    return (
        <View style={wrapperStyle}>
            <Button
                titleStyle={titleStyle ? titleStyle : null}
                loading={loading}
                loadingProps={buttonColor == "white" ? { color: COLORS.primary } : { color: COLORS.white } }
                disabled={disabled}
                disabledStyle={[styles.inspectionButton, disabledStyle]}
                buttonStyle={[styles.inspectionButton, buttonStyle]}
                onPress={() => onPress()}
                title={title || "Button"}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inspectionButton: {
        backgroundColor: COLORS.primary,
        height: 45,
        marginTop: 10,
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: 10,
    },
    loadingStyle:{
        color: COLORS.primary
    }
});