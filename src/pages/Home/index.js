import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./styles";
import Header from "../../components/Header";


export default function Home() {
    const { singOut, user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Header title="Minhas movimentações" />
        </View>
    )
}