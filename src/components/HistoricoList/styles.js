import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f3ff',
        borderRadius: 4,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        padding:12
    },
    tipo:{
        flexDirection:'row'
    },
    tipoTxt:{
        color:'#fff',
        fontSize: 16,
        fontStyle: 'italic'
    },
    iconVIew:{
        flexDirection: 'row',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        marginBottom:4
    }, 
    valorTxt:{
        color:'#121212',
        fontSize:22
    }
})