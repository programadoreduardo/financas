import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginLeft: 8,
        fontSize: 17
    },
    button: {
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 45,
        borderRadius: 4,
        borderWidth: 1.5,
        marginBottom: 14
    }
})