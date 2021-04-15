import React, {Component} from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import styles from './style'

export default class Sort extends Component {
    //konstruktor
    constructor(){
        super();
        //pusta tablica, w której będą nasze losowe liczby
        const numbers = [];
        //generowanie 100 pseudolosowych liczb z zakresu (0,1000)
        for (let i=0; i<100; i++) {
            numbers.push(Math.floor(Math.random() * 999) + 1);
        }
        //stan
        this.state = {
            numbers: numbers, 
            sortedUp: 0,
            sortedDown: 0
        };
        //te funkcje powodują zmiany
        this.writeNumbers = this.writeNumbers.bind(this);
        this.generate = this.generate.bind(this);
        this.sortDown = this.sortDown.bind(this);
        this.sortUp = this.sortUp.bind(this);
    }
    //wypisanie liczb w aplikacji
    writeNumbers(numbers) {
        return(
            <View style={styles.sort.numbers}>
                {numbers.map(number => <Text style={styles.sort.nrText}>{number}</Text>)}
                </View>
        )
    }
    //wygenerowanie nowej tablicy po wcisnieciu guzika
    generate(){
        const newNumbers = [];
        for (let i=0; i<100; i++) {
            newNumbers.push(Math.floor(Math.random() * 999) + 1);
        }
        //podstawienie do stanu nowej tablicy
        //powoduje ponowne wyrenderowanie
        this.setState({
            numbers: newNumbers,
            sortedUp: 0,
            sortedDown: 0
        });
    }
    //sortowanie w dół
    sortDown(){
        if(this.state.sortedDown == 0){
            const numbers = this.state.numbers
            this.setState({
                numbers: numbers.sort((a,b) => a > b ? -1:1),
                sortedDown: 1,
                sortedUp: 0
            })
        }

    }
    //sortowanie w górę
    sortUp(){
        if(this.state.sortedUp == 0){
            const numbers = this.state.numbers
            this.setState({
                numbers: numbers.sort((a,b) => a > b ? 1:-1),
                sortedUp: 1,
                sortedDown: 0
            })
        }
    }
    render(){
    return (
        <ScrollView>
      <View style={styles.home.container}>
          <View style={styles.sort.sort}>
              <View style={styles.sort.description}>
                  <Text style={styles.sort.text}>Sortowanie 100 wygenerowanych pseudolosowych liczb z zakresu (0,1000)</Text>
              </View>
              <View style={styles.sort.options}>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.generate}><Text style={styles.sort.optText}>Wygeneruj</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.sortDown}><Text style={styles.sort.optText}>Sortuj ↓</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.sortUp}><Text style={styles.sort.optText}>Sortuj ↑</Text></TouchableOpacity>
              </View>
              {this.writeNumbers(this.state.numbers)}
          </View>
      </View>
      </ScrollView>
    );
}
}