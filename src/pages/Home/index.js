import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function Home(){
const {singOut, user } = useContext(AuthContext)

    return(
        <View>
            <Text> Tela Home</Text>
            <Text> Nome: {user.name}</Text>

            <Button
            title="Sair da conta"
            onPress={()=>singOut()}/>
        </View>
    )
}