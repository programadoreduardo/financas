import { Keyboard, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import Header from '../../components/Header'
import { TouchableOpacity } from "react-native";

export default function New() {
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItems: "center" }}>

                    <TextInput style={styles.input}
                        placeholder="Descrição deste registro"
                    />

                    <TextInput style={styles.input}
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Registrar</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}