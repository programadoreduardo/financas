import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header'
import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const {user, singOut} =useContext(AuthContext)
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Header title="Meu perfil" />

            <Text style={styles.title}>Hey, bem vindo de volta! </Text>

            <Text style={styles.nome} numberOfLines={1}>
                {user && user.name}
            </Text>

            <TouchableOpacity style={styles.newLink} onPress={()=> navigation.navigate('Registrar')}>
                <Text style={styles.newtext}>Fazer registro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={()=> singOut()}>
                <Text style={styles.LogoutText}>Sair</Text>
            </TouchableOpacity>

        </View>
    );
}