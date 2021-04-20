import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import HBButton from '../../components/HBButton';
import HBTextInput from '../../components/HBTextInput';
import firebase from '../../utils/firebase'

export default function LoginForm(props) {

    const { changeForm } = props;
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [formError, setFormError] = useState({})

    const handlePressLoggin = () => {
        let errors = {};
        if (!formData.email || !formData.password) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
        } else if (!validateEmail(formData.email)) {
            errors.email = true;
        } else if (formData.password < 6) {
            errors.password = true;
            errors.repeatPassword = true;
        } else {
            login();
        }
        setFormError(errors);
    }

    const setChangeValue = (name, text) => {
        setFormData({ ...formData, [name]: text });
    }

    const login = () => {
        let errors = {};
        firebase.auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .catch(e => {
                errors.password = true;
                errors.repeatPassword = true;
            })
        setFormError(errors);
    }

    return (
        <>
            <HBTextInput
                placeholder={'Correo electronico'}
                value={formData?.email}
                onChangeText={e => setChangeValue('email', e)}
                error={formError.email}
            />
            <HBTextInput
                placeholder={'Contraseña'}
                value={formData?.password}
                onChangeText={e => setChangeValue('password', e)}
                error={formError.password}
                secureTextEntry
            />
            <HBButton
                value={'Acceder'}
                onPress={handlePressLoggin} />

            <View
                style={styles.btnRegister}
            >
                <HBButton
                    value={'Registrate'}
                    onPress={changeForm}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    btnRegister: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 16,
    }
})
