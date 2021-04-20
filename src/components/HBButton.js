import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function HBButton(props) {
    const {onPress,value}=props;
    return (
        <TouchableOpacity
        {...props}
        onPress={onPress}
        >
            <Text
            style={styles.text}
            >{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    text:{
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    }
})
