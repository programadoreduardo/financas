import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import styles from '../SignIn/styles';

export default function SignUp() {
    return (
        <View styles={styles.body} >
            <KeyboardAvoidingView style={styles.teclado} behavior={Platform.OS === 'ios' ? padding : ''} enabled>

                <View style={styles.viewInput}>
                    <TextInput style={styles.inputEmail}
                        placeholder='Seu e-mail' />

                    <TextInput style={styles.inputEmail}
                        placeholder='Sua senha' />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} >
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

