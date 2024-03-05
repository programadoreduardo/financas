import { useContext, useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";


export default function Home() {
    const isFocused = useIsFocused()
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
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Header title="Minhas movimentações" />

            <FlatList
            data ={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item})=>(<BalanceItem data={item}/>)}
            />
        </View>
    )
}