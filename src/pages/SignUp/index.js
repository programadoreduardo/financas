import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import styles from '../SignIn/styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { signUp } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp() {
        signUp(email, password, nome);
    }

    return (
        <View style={styles.body} >
            <KeyboardAvoidingView style={styles.teclado}
                behavior={Platform.OS === 'ios' ? padding : ''}
                enabled>

                <View style={styles.viewInput}>

                    <TextInput style={styles.inputEmail}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />

                    <TextInput style={styles.inputEmail}
                        placeholder='E-mail'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput style={styles.inputEmail}
                        placeholder='Senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleSignUp}>
                        <Text style={styles.textButton}> Cadastrar</Text>
                    </TouchableOpacity>


                </View>

            </KeyboardAvoidingView>
        </View>
    );
}

