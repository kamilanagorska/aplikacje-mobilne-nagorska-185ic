import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style'

export default function DateEx() {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [showD, setShowDate] = useState(false)
    const [showT, setShowTime] = useState(false)
    const [mode, setMode] = useState('date')

    const showMode = (currentMode) => {
        if(currentMode == 'date'){
            setShowDate(true)
        } else {
            setShowTime(true)
        }
        setMode(currentMode)
    }
    const showDate = () => {
        showMode('date')
    }
    const showTime = () => {
        showMode('time')
    }
    const showTerm = () => {
        let day = date.getDate()
        let month = date.getMonth() + 1
        if(month < 10) {
            month = "0" + month
        }
        let year = date.getFullYear()
        let hours = time.getHours()
        if(hours< 10) {
            hours = "0" + hours
        }
        let minutes = time.getMinutes()
        if(minutes < 10) {
            minutes = "0" + minutes
        }
            Alert.alert("Wybrany termin:", day + "." + month + "." + year + " " + hours + ":" + minutes)
    }
    //zapisuje datę
    const onChangeDate = (event, selectedDate) => {
        setShowDate(false);
        setDate(selectedDate);
      };
      //zapisuje godzine
    const onChangeTime = (event, selectedTime) => {
        setShowTime(false);
        setTime(selectedTime);
      };
    return (
        <View style={styles.date.container}>
            <View style={styles.textInp.explain}>
                <Text style={styles.textInp.text2}>Wykorzystanie DateTimePicker do wybierania daty i czasu</Text>
            </View>
            <View style={styles.date.example}>
                <TouchableOpacity style={styles.date.button} onPress={showDate}>
                    <Text style={styles.textInp.text}>Wybierz datę</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date.button} onPress={showTime}>
                    <Text style={styles.textInp.text}>Wybierz czas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date.button} onPress={showTerm}>
                    <Text style={styles.textInp.text}>Wyświetl termin</Text>
                </TouchableOpacity>
          </View>
          <View>
          {showD && (
                <DateTimePicker mode={mode} value={date}  display='spinner' onChange={onChangeDate}/>
            )}
            {showT && (
                <DateTimePicker mode={mode} value={time}  onChange={onChangeTime}/>
            )}
          </View>

        </View>
    );
}