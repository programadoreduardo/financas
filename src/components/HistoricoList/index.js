import { Text, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({ data }) {
    return (
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
    );
}