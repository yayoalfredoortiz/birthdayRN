import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HBButton from '../../components/HBButton'
import firebase from '../../utils/firebase'

const ActionBar = () => {
    const logout=()=>{
        firebase.auth().signOut();
      }
    return (
        <View
        style={styles.viewFooter}
        >
            <HBButton
                value='Cerrar sesión'
                style={styles.closeBtn}
                onPress={logout}
            />
            <HBButton
                style={styles.newBtn}
                value='Nueva Fecha'
            />
        </View>
    )
}

export default ActionBar

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        alignItems:'center',
        height:50,
        marginBottom:16
    },
    closeBtn:{
        backgroundColor:'red', 
        borderRadius:50,
        paddingHorizontal:30,
        paddingVertical:10, 
    },
    newBtn:{
        backgroundColor:'blue', 
        borderRadius:50,
        paddingHorizontal:30,
        paddingVertical:10, 
    }
})
