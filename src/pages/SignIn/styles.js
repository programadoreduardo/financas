import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f0f4ff'
    },
    teclado: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {

    },
    imgLogo: {
        marginBottom: 25
    },
    viewInput: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    inputEmail: {
        backgroundColor: "#fff",
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    },
    button: {
        width: '90%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3b3dbf',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonAccount: {
color: '#171717'
    },
    textAccount: {

    }
})

export default styles;