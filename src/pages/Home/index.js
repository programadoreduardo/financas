import { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
import api from "../../services/api";


export default function Home() {
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')

            const balance = await api.get('/balance', {
                params:{
                    date:dateFormated
                }
            })
            if(isActive){
                setListBalance(balance.data);
            }
        }
        getMovements()

        return()=>isActive = false;
    }, [])

    return (
        <View style={styles.container}>
            <Header title="Minhas movimentações" />
        </View>
    )
}