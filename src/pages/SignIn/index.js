import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <KeyboardAvoidingView style={styles.teclado} behavior={Platform.OS=== 'ios' ? padding: ''} enabled>
                <View style={styles.viewLogo}>
                    <Image style={styles.imgLogo}
                        source={require('../../assets/Logo.png')} />
                </View>

                <View style={styles.viewInput}>
                    <TextInput style={styles.inputEmail}
                        placeholder='Seu e-mail' />

                    <TextInput style={styles.inputEmail}
                        placeholder='Sua senha' />

                    <TouchableOpacity style={styles.button} activeOpacity={0.8} >
                        <Text style={styles.textButton}> Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAccount} onPress={()=> navigation.navigate('SignUp')} >
                        <Text style={styles.textAccount}> Criar uma conta!</Text>
                    </TouchableOpacity>
                    
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

