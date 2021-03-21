import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class App extends Component{
  state = {
    toCalculate: '',
    result: '',
  }

  letsCalculate(text){
    const toCalculate = text
    //eval wylicza wynik z obliczenia zapisanego za pomocą stringa
    //czyli jak mamy '2+4' to eval z tego da nam 6
    let res = eval(toCalculate)
    this.setState({result: res})
  }
  //sprawdzenie, czy wpisane przez uzytkownika dzialanie nie konczy się znakiem operacji lub kropką, co powoduje error
  checkIfOk(){
    const text = this.state.toCalculate
    if(text.slice(-1)=="+" || text.slice(-1)=="-" || text.slice(-1)=="/" || text.slice(-1)=="*" || text.slice(-1)=="."){
      return false
    }
    return true
  }
  //gdy wcisniemy ktorys z guzików 
  onPressed(nr){
    //jeśli wcisniemy C wszystkie zapisane wartosci się usuwają
    if(nr == 'C'){
      return this.setState({
        toCalculate: '',
        result: ''
      })
    }
    //jeśli wcisniemy symbol usuwania, usunie nam się ostatni wpisany znak
    if(nr == '⌫'){
      //rozdzielenie wpisanego tekstu na poszczegolne symbole, utworzenie tablicy z symbolami
      let text = this.state.toCalculate.split('')
      //usunięcie ostatniego elementu z tablicy text
      text.pop()
      return this.setState({
        //polaczenie tablicy text w jeden lancuch znakow
        toCalculate: text.join('')
      })
    }
    if(nr == '='){
      //zabezpieczenie, by uzytkownik nie wcisnal = gdy ostatni wybrany znak to np +, co powoduje error
      //jesli checkIfOk zwroci false to wykonanie obliczenia się nie odbędze
      return this.checkIfOk() && this.letsCalculate(this.state.toCalculate)
    }

    //gdy zaden z ifów nie mial miejsca nastepuje nadpisanie stanu dodając do niego symbol z przed chwilą wciśniętego guzika
    this.setState({toCalculate: this.state.toCalculate+nr})
  }


  render(){
    let rows = []
    //liczby jakie potrzebujemy
    let numbers = [[7, 8, 9], [4,5, 6], [1,2,3], ['.', 0, '=']]
    //4 wiersze
    for(let i=0; i<4; i++) {
      let row =[]
      //3 kolumny liczb
      for(let j=0;j<3; j++){
        //dodawanie kolejnych elementow do tablicy row
        row.push(<TouchableOpacity onPress={() => this.onPressed(numbers[i][j])} style={styles.button1}>
          <Text style={styles.text}>{numbers[i][j]}</Text>
        </TouchableOpacity>)
      }
      //dodawanie kolejnych elementow do tablicy rows
      rows.push(<View style={styles.row}>{row}</View>)
    }
    //operacje jakie potrzebujemy
    let operations = ['⌫','C','+','-','*','/']
    let opers = []
    for(let i=0; i<6; i++){
      //push dodaje kolejny element na koniec tablicy
      //najpierw mamy pustą tablice nastepnie dodajemy jeden element z symbolem usuwania
      //nastepnie kolejny z C itd az dojdziemy do /
      opers.push(<TouchableOpacity onPress={() => this.onPressed(operations[i])} style={styles.button2}>
        <Text style={[styles.text, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calcText}>{this.state.toCalculate}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resText}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {opers}
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calcText: {
    fontSize: 40,
    color: '#6e6c70',
  },
  text: {
    fontSize: 30
  },
  white:{
    color: 'white'
  },
  resText: {
    fontSize: 50,
    color: 'black'
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: '#bebdbf',
    borderWidth: 0.3
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: '#6d6675',
    borderWidth: 0.3
  },
  row: {
    //są nie pod soba a 3 w lini
    flexDirection: 'row',
    //rozciaga na caly ekran guziki
    flex: 1,
    //wyśrodkowuje jednak ladnie
    alignItems: 'center',
    //guziczki ladnie na srodku
    justifyContent: 'space-around'
  },
  calculation: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'

  },
  numbers: {
    flex: 3,
    backgroundColor: '#cdcccf'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#766e80',
    alignItems: 'stretch'
  }
});
