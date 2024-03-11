import { Alert, Keyboard, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import Header from '../../components/Header'
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import RegisterTypes from "../../components/RegisterTypes";
import api from '../../services/api'
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";



export default function New() {
    const navigation = useNavigation()
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('despesa')

    function handleSubmit() {
        Keyboard.dismiss();

        if (isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos')
            return;
        }

        Alert.alert(
            'confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd() {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date, 'dd/MM/yyyy')
        })

        setLabelInput('')
        setValueInput('')
        navigation.navigate('Home')
    }

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

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text}>Registrar</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}