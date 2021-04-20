import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function HBTextInput({placeholder, onChangeText,onSubmitEditing,reference,
    returnKeyType,secureTextEntry,value,error}) {
    return (
        <TextInput 
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor='#969696'
        style={[styles.input,error&&styles.errorInput]}
        autoCapitalize='none'
        onSubmitEditing={onSubmitEditing}
        ref={reference}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        value={value||''} 
        /> 
    )
}

const styles = StyleSheet.create({
    input:{
        height:50,
        color:'#fff',
        width:'80%',
        backgroundColor:'#1e3040',
        marginBottom:16,
        paddingHorizontal:20,
        fontSize:18,
        borderWidth:1,
        borderRadius:25,
        borderColor:'#1e3040',
        fontFamily: "roboto-regular"
    },
    errorInput:{
        borderColor:'#940C0C'
    }
})
