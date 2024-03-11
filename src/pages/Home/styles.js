import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4ff'
    },
    list:{
        maxHeight: 190
    },
    area: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingLeft:14,
        paddingRight:14,
        alignItems: 'baseline'
    },
    textButton: {
        marginLeft:5,
        color:'#121212',
        marginBottom: 14,
        fontWeight: 'bold',
        fontSize:18
    },
    flatList:{
        flex:1,
        backgroundColor:'#fff'
    }
})