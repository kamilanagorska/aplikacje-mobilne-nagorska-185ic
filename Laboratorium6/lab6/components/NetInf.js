import React, {Component} from 'react';
import NetInfo from "@react-native-community/netinfo";
import {View, Text} from 'react-native';
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 

export default class NetInf extends Component {
  constructor(){
    super();
    this.state ={
      isConnected: false,
      type: '',
      frequency: 0,
      ipAddress: '',
      strength: 0,
      isWifiEnabled: false
    };
  }
  async componentDidMount() {
   NetInfo.fetch().then( response => {
      this.setState({
        isConnected: response.isConnected,
        type: response.type,
        frequency: response.details.frequency,
        ipAddress: response.details.ipAddress,
        strength: response.details.strength,
        isWifiEnabled: response.isWifiEnabled
      })
    })
  }
  
  render() {
    return (
      <View style={styles.img.container}>
          <View style={styles.img.explain}>
            <Text style={[styles.img.text, {textAlign: 'center'}]}>Detekcja łączności z siecią z wykorzystaniem NetInfo</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.img.text}>Połączenie z internetem</Text>
          {this.state.isConnected
          ? <AntDesign name="check" size={24} color="green" /> : <AntDesign name="close" size={24} color="red" /> }
        </View>
        <View style={styles.img.example}> 
        <Text style={styles.img.text}>Adres IP: {this.state.ipAddress ? this.state.ipAddress : 'Brak'}</Text>
        <Text style={styles.img.text}>Typ połączenia: {this.state.type}</Text>
        <Text style={styles.img.text}>Częstotliwość połączenia: {this.state.frequency ? this.state.frequency : '0'} MHz</Text>
        <Text style={styles.img.text}>Moc sygnału: {this.state.strength ? this.state.strength : '0'}%</Text>
        <Text style={styles.img.text}>Dostępność Wifi: {this.state.strength ? 'Tak' : 'Nie'}</Text>
        </View>
      </View>
    );
  }
   
}