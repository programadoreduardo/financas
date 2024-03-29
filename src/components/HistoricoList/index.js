import { Alert, Text, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from 'react-native';

export default function HistoricoList({ data, deleteItem }) {
    function handleDeleteItem() {
        Alert.alert('Atenção',
            'Você tem certeza de que deseja deletar este registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <View style={styles.container}>
                <View style={styles.tipo}>
                    <View style={[styles.iconVIew, { backgroundColor: data.type === 'despesa' ? '#c62c36' : '#049301' }]} tipo={data.type}>
                        <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            size={20}
                            color='#fff'
                        />
                        <Text style={styles.tipoTxt}>{data.type}</Text>
                    </View>
                </View>

                <Text style={styles.valorTxt}>
                    R$ {data.value}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}