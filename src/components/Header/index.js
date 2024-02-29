import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";



export default function Heaeder({ title }) {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttonMenu} onPress={()=> navigation.openDrawer()}>
                <Icon name="menu" size={35} color='#121212' />
            </TouchableOpacity>

            {title && (
                <Text style={styles.title}>{title}</Text>
            )}
        </SafeAreaView>
    )
}