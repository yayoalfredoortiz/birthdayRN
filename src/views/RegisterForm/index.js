import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HBButton from '../../components/HBButton'
import HBTextInput from '../../components/HBTextInput'
import { validateEmail } from '../../utils/validations'; 
import firebase from './../../utils/firebase'

export default function RegisterForm({changeForm}) {
 
    const passwordRef = useRef(null);
    const [formData, setFormData] = useState({email:'',password:'',repeatPassword:''})
    const [formError, setFormError] = useState({})

    const handlePressRegister=()=>{ 
        let errors={}; 
        if(!formData.email||!formData.password||!formData.repeatPassword){
            if(!formData.email)errors.email=true;
            if(!formData.password)errors.password=true;
            if(!formData.repeatPassword)errors.repeatPassword=true;
        }else if (!validateEmail(formData.email)){
            errors.email=true;
        }else if (formData.password!==formData.repeatPassword){
            errors.password=true;
            errors.repeatPassword=true;
        }else if (formData.password<6){
            errors.password=true;
            errors.repeatPassword=true;
        }else{
            console.log('success');
            registerUser();
        }
        setFormError(errors);
    }

    const registerUser=async()=>{
        const errors={};
        firebase.auth()
        .createUserWithEmailAndPassword(formData.email,formData.password)
        .then((res)=>{
            console.log('usuario creado correctamente')
        })
        .catch((e)=>{
            errors.email=true;
            errors.password=true;
            errors.repeatPassword=true;
        });
        setFormError(errors);
    }

    const setChangeValue=(name,text)=>{
        setFormData({...formData,[name]:text});
    }

    return (
        <>
            <HBTextInput
            placeholder={'Correo electrónico'}
            onSubmitEditing={()=>passwordRef.current.focus()}
            returnKeyType={'next'}
            value={formData?.email}
            onChangeText={e=>setChangeValue('email',e)}
            error={formError.email}
            />
            <HBTextInput
            placeholder={'Contraseña'}
            secureTextEntry
            reference={passwordRef}
            value={formData?.password}
            onChangeText={e=>setChangeValue('password',e)}
            error={formError.password}
            />
            <HBTextInput
            placeholder={'Repetir contraseña'}
            secureTextEntry
            value={formData?.repeatPassword}
            onChangeText={e=>setChangeValue('repeatPassword',e)}
            error={formError.repeatPassword}
            /> 
            <HBButton
            value={'Regístrate'}
            onPress={handlePressRegister}/>
            <HBButton
            value={'Iniciar Sesión'}
            onPress={changeForm}
            style={styles.btnLogin}
            />
        </>
    )
}

const styles = StyleSheet.create({
    btnLogin:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:16
    }
})
