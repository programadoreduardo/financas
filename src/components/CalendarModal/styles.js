import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(34,34,34,0.4)'
    },
    buttonFilterText: {
        fontSize: 22,
    },
    modalContent:{
        flex:2,
        justifyContent:'center',
        backgroundColor: '#fff',
        padding: 14
    },
    buttonFilter:{
        borderRadius: 4,
        backgroundColor: '#3B3DBF',
        height:45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonFilterText:{
        color:'#fff',
        fontSize: 19,
        fontWeight:'bold'
    }
})