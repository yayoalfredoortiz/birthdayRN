import React, { useEffect, useState } from 'react'
import {Text, SafeAreaView, StatusBar, StyleSheet, Button, View} from 'react-native'
import firebase from './utils/firebase' 
import 'firebase/auth'
import Auth from './views/Auth'
import ListBirthday from './views/ListBirthday'

export default function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
      firebase.auth().onAuthStateChanged((response)=>{
        console.log('verificando estado')
        setUser(response);
      });
  }, [])

  if(user===undefined) return null;

  return (
    <>
    <StatusBar barStyle='dark-content'/>
    <SafeAreaView style={styles.background}>
      {user?<ListBirthday/>:<Auth/>}
    </SafeAreaView>
    </>
  )
}
 
const styles = StyleSheet.create({
  background:{
      backgroundColor:'#15212b',
      height:'100%',
  }
})
