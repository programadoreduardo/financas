import { useContext, useEffect, useState } from "react";
import { FlatList, Modal, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./styles";
import Header from "../../components/Header";
import { format } from "date-fns";
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";


export default function Home() {
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([])
    const [movements, setMovements] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [modalvisible, setModalVisible] = useState(false)

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/mm/yyyy')

            const receives = await api.get('/receives', {
                params: {
                    data: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })
            if (isActive) {
                setMovements(receives.data)
                setListBalance(balance.data);
            }
        }
        getMovements()

        return () => isActive = false;
    }, [isFocused, dateMovements])

    async function handleDelete(id) {
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })
            setDateMovements(new Date())

        } catch (err) {
            console.log(err)
        }
    }

    function filterDateMovement(dateSelected){
        setDateMovements(dateSelected)
    }

    return (
        <View style={styles.container}>
            <Header title="Minhas movimentações" />

            <FlatList style={styles.list}
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (<BalanceItem data={item} />)}
            />

            <View style={styles.area}>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <Icon name="event" color='#121212' size={30} />
                    <Text style={styles.textButton}>Ultimas movimentações</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={movements}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <Modal visible={modalvisible} animationType="fade" transparent={true}>
            <CalendarModal
            setVisible={()=> setModalVisible(false)}
            handleFilter={filterDateMovement}
            />
            </Modal>

        </View>
    )
}