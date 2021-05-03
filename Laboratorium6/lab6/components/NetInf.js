import React, {Component} from 'react';
import NetInfo from "@react-native-community/netinfo";
import {View, Text} from 'react-native';
import styles from './style'

export default class NetInf extends Component {
  constructor(){
    super();
    this.state ={
      isConnected: false,
      type: '',
      isInternetReachable: false,
      frequency: 0,
      ipAddress: '',
      strength: 0
    };
  }
  async componentDidMount() {
   NetInfo.fetch().then( response => {
      this.setState({
        isConnected: response.isConnected,
        type: response.type,
        isInternetReachable: response.isInternetReachable,
        frequency: response.details.frequency,
        ipAddress: response.details.ipAddress,
        strength: response.details.strength
      })
    })
  }
  render() {
    return (
      <View style={styles.img.container}>
          <View style={styles.img.explain}>
            <Text style={styles.img.text}>Detekcja łączności z siecią z wykorzystaniem NetInfo</Text>
        </View>
        <View style={styles.img.example}> 
        <Text style={styles.img.text}>Połączenie z internetem: {this.state.isConnected?`Tak`:`Nie`}</Text>
        <Text style={styles.img.text}>Typ połączenia: {this.state.type}</Text>
        <Text style={styles.img.text}>Czy osiągalny internet: {this.state.isInternetReachable?`Tak`:`Nie`}</Text>
        <Text style={styles.img.text}>Częstotliwość połączenia: {this.state.frequency} MHz</Text>
        <Text style={styles.img.text}>Moc sygnału (0 - 100): {this.state.strength}</Text>
        <Text style={styles.img.text}>Adres IP: {this.state.ipAddress}</Text>
        </View>
      </View>
    );
  }
   
}