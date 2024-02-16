import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import styles from '../SignIn/styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { user } = useContext(AuthContext)

    return (
        <View style={styles.body} >
            <KeyboardAvoidingView style={styles.teclado}
                behavior={Platform.OS === 'ios' ? padding : ''}
                enabled>

                <View style={styles.viewInput}>

                    <TextInput style={styles.inputEmail}
                        placeholder='Nome' />

                    <TextInput style={styles.inputEmail}
                        placeholder='E-mail' />

                    <TextInput style={styles.inputEmail}
                        placeholder='Senha' />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} >
                        <Text style={styles.textButton}> Cadastrar</Text>
                    </TouchableOpacity>


                </View>

            </KeyboardAvoidingView>
        </View>
    );
}

