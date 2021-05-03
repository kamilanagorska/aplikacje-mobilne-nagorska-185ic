import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'

export default class AsyncS extends React.Component {
    constructor(){
        super();
    }
    state ={
        key: '0',
    }
    save = async (value) => {
        try {
          await AsyncStorage.setItem(this.state.key, value)
          alert("Zapisano '" + value + "' z kluczem " + this.state.key)
          let intKey = parseInt(this.state.key,10)
          let oneMore = intKey+1
          this.setState({
              key: oneMore.toString()
          }) 
        } catch (e) {
          alert("Zapisywanie nie powiodło się!")
        }
      }

     read = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            alert("Tekst zapisany pod kluczem " + key + " to '" + value +"'")
          }
          else(
              alert("Żadna wartość nie jest zapisana pod tym kluczem!")
          )
        } catch(e) {
          alert("Odczytanie danych nie powiodło się!")
        }
      }
    render(){
        return(
            <View style={styles.img.container}>
                <View style={styles.img.explain}>
                    <Text style={[styles.img.text, {textAlign: 'center'}]}>Zapisywanie i odczytywanie danych z wykorzystaniem AsyncStorage</Text>
                </View>
                <View style={styles.img.example}>
                    <Text style={[styles.img.text, {textAlign: 'center'}]}>Wpisz tekst jaki chcesz zapisać:</Text>
                    <TextInput
                    style={styles.img.input}
                    placeholder="Dowolny tekst"
                    onSubmitEditing={event => {this.save(event.nativeEvent.text)}}
                    />
                    <Text style={[styles.img.text, {textAlign: 'center'}]}>Wpisz wartość klucza zmiennej, którą odczytać:</Text>
                    <TextInput
                    style={styles.img.input}
                    placeholder="Dowolny klucz"
                    onSubmitEditing={event => {this.read(event.nativeEvent.text)}}
                    />
                </View>
            </View>

        )
    }
}