import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        signIn(email, password)
    }

    return (
        <View style={styles.body}>
            <KeyboardAvoidingView style={styles.teclado} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
                <View style={styles.viewLogo}>
                    <Image style={styles.imgLogo}
                        source={require('../../assets/Logo.png')} />
                </View>

                <View style={styles.viewInput}>
                    <TextInput style={styles.inputEmail}
                        placeholder='Seu e-mail'
                        value={email}
                        onChangeText={(text) => setEmail(text)} />

                    <TextInput style={styles.inputEmail}
                        placeholder='Sua senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)} />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
                        <Text style={styles.textButton}> Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAccount} onPress={() => navigation.navigate('SignUp')} >
                        <Text style={styles.textAccount}> Criar uma conta!</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}