import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function CalendarModal({setVisible}) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>

            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.buttonFilter}>
                    <Text style={styles.buttonFilterText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}