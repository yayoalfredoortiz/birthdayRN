import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionBar from '../ActionBar'

const ListBirthday = () => {
    return (
        <View
        style={styles.container}
        >
            <Text>Hola mundo</Text>
            <ActionBar/>
        </View>
    )
}

export default ListBirthday

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

