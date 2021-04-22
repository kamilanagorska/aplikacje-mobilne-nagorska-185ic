import React, {Component} from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import styles from './style'

export default class Select extends Component {
    //konstruktor
    constructor(){
        super();
       this.state = {
            value: "Opcja jeden",
            countries: []
        };
    }
    async componentDidMount() {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const countries = await response.json()
        this.setState({
            countries: countries
        })
    }
    showOptions(options) {
    return(
        options.map(option => <Picker.Item key={option.name} label={option.name}></Picker.Item>)
    )}

    render(){
    return (
      <View style={styles.home.container}>
          <View style={styles.textInp.explain}>
              <Text style={styles.textInp.text2}>Wykorzystanie elementu Picker</Text>
          </View>
          <ScrollView>
              <View style={styles.textInp.example}>
              <Text style={styles.textInp.text}>Prosty przykład z dwoma opcjami do wyboru</Text>
              <Picker  style={styles.select.pick} selectedValue={this.value} onValueChange={(value) => {this.setState({value: value})}}>
                  <Picker.Item label="Opcja jeden" value="Opcja jeden" />
                  <Picker.Item label="Opcja druga" value="Opcja dwa" />
            </Picker>
            <Text style={styles.textInp.textSm}>Wybrano: {this.state.value}</Text>
              </View>
              <View style={styles.textInp.example}>
              <Text style={styles.textInp.text}>Zablokowany Picker (enabled = false)</Text>
              <Picker  enabled= {false} style={styles.select.pick}>
                  <Picker.Item label="Opcja jeden" value="1" />
                  <Picker.Item label="Opcja dwa" value="2" />
            </Picker>
              </View>
              <View style={styles.textInp.example}>
              <Text style={styles.textInp.text}>Opcje do wybrania są pobrane asynchronicznie</Text>
              <Picker  style={styles.select.pick}>
                  {this.showOptions(this.state.countries)}
            </Picker>
              </View>
          </ScrollView>
      </View>
    );
}
}