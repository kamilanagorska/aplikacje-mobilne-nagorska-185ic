import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import NetInfo from "@react-native-community/netinfo";
import styles from './style'

export default class DataSyn extends React.Component {
  constructor(){
    super();
  this.state ={
    localValue: 1,
    isConnected: false,
    onlineValue: 1
  }
}
checkConnection =() => {
  NetInfo.fetch().then( response => {
    this.setState({
      isConnected: response.isConnected,
    })
  })
  if(this.state.isConnected == true && this.state.localValue != this.state.onlineValue){
    this.setState({
      onlineValue: this.state.localValue
    })
  }
}
saveData = (value) => {
  if(this.state.isConnected == false){
    this.setState({
      localValue: value
    })
  } else {
    this.setState({
      localValue: value,
      onlineValue: value
    })
  }

}
async componentDidMount() {
  setInterval(this.checkConnection, 1000)
 }
render(){
  return (
    <View style={styles.img.container}>
        <View style={styles.img.explain}>
          <Text style={[styles.img.text, {textAlign: 'center'}]}>Synchronizacja danych aplikacji w przypadku łączności z siecią i jej braku</Text>
      </View>
      <View style={styles.img.slider}>
          <Slider style={{width: 300, height: 40}}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#d4b2a7"
              value={1}
              onValueChange={this.saveData}
          />
      </View>
      <View style={styles.img.explain}>
        <Text style={styles.img.text}>Lokalnie: {this.state.localValue}</Text>
        <Text style={styles.img.text}>Online: {this.state.onlineValue}</Text>
      </View>
    </View>
  );
}
}