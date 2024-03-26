import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date())
    const [markedDate, setMarkedDate] = useState({})

    function hadleOnDayPress(date){
       setDateNow(new Date(date.dateString))

       let markedDay = {}

       markedDay[date.dateString] = {
        selected: true,
        selectedColor: '#3b3dbf',
        textColor: '#fff'
       }

       setMarkedDate(markedDay)
    }

    function handleFilterDate(){
        handleFilter(dateNow)
        setVisible()
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <View style={styles.modalContent}>

                <Calendar 
                onDayPress={hadleOnDayPress}
                markedDates={markedDate}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: '#ff0000',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor:'#fff'
                }}
                />

                <TouchableOpacity style={styles.buttonFilter} onPress={handleFilterDate}>
                    <Text style={styles.buttonFilterText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}