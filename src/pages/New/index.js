import { Keyboard, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import Header from '../../components/Header'
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import RegisterTypes from "../../components/RegisterTypes";

export default function New() {
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('despesa')
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItems: "center" }}>

                    <TextInput style={styles.input}
                        placeholder="Descrição deste registro"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <TextInput style={styles.input}
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Registrar</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}