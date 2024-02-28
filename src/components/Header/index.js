import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import  Icon  from "react-native-vector-icons/Feather";



export default function Heaeder({ title }) {
    return (
        <SafeAreaView style={styles.container}>
           <TouchableOpacity>
            <Icon name="menu" size={35} color='#121212'/>
           </TouchableOpacity>
            {title && (
                <Text>{title}</Text>
            )}
        </SafeAreaView>
    )
} 