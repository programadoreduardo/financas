import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { styles } from "./styles";

export default function RegisterTypes({ type, sendTypeChanged }) {
    const [typeChecked, setTypeChecked] = useState(type);

    const handleTypeChange = (newType) => {
        setTypeChecked(newType);
        sendTypeChanged(newType);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: typeChecked === 'receita' ? '#fff' : '#e7e7e7' },
                    { borderColor: typeChecked === 'receita' ? '#3b3dbf' : 'transparent' }
                ]}
                onPress={() => handleTypeChange('receita')}
            >
                <Feather name="arrow-up" size={25} color='#121212' />
                <Text style={styles.text}>Receita</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: typeChecked === 'despesa' ? '#fff' : '#e7e7e7' },
                    { borderColor: typeChecked === 'despesa' ? '#3b3dbf' : 'transparent' }
                ]}
                onPress={() => handleTypeChange('despesa')}
            >
                <Feather name="arrow-down" size={25} color='#121212' />
                <Text style={styles.text}>Despesa</Text>
            </TouchableOpacity>
        </View>
    );
}
