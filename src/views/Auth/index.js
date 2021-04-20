import React, { useState} from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Auth() {

    const [isLogin, setIsLogin] = useState(true)

    const changeForm = () => {
        setIsLogin(!isLogin)
    }

    return (

        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        // extraHeight={20}
        // enableOnAndroid   
        >
            <View
                style={styles.view}
            >
                <Image
                    style={styles.logo}
                    source={require('./../../assets/logo.png')} />
                {isLogin ? (
                    <LoginForm changeForm={changeForm} />
                ) : (
                    <RegisterForm changeForm={changeForm} />
                )}
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center', 
        flex: 1,
    },
    logo: {
        width: '80%',
        resizeMode: 'contain',
        // alignSelf:'center',
        height: 240,
        marginVertical: 16
    }

})
