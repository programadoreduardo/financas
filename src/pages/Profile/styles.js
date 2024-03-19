import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4ff', 
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24
    },
    nome:{
        fontSize: 24,
        marginBottom: 24,
        marginTop: 8,
        paddingVertical: 0,
        paddingHorizontal: 14,
        color: '#121212'
    },
    newLink:{
        backgroundColor:"#3b3dbf",
        width: '90%',
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:14
    },
    newtext:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    },
    logoutButton:{
        width: '90%',
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c62c36'
    },
    LogoutText:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'#c62c36'
    }
})