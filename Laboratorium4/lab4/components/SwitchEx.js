import React, { useState } from "react";
import { View, Text, Switch, Modal, TouchableOpacity } from 'react-native';
import styles from './style';

export default function SwitchEx() {
  const [switchedOn, setSwitchedOn] = useState(false);
  const toggleSwitch = () => setSwitchedOn(previousState => !previousState);
    return (
      <View style={styles.home.container}>
        <View style={styles.textInp.explain}>
        <Text style={styles.textInp.text2}>Po przesunięciu Switcha pojawia się modal z pseudolosową liczbą</Text>
        </View>
        <View style={styles.switch.examples}>
          <View style={styles.textInp.example}>
          <Switch
          trackColor={{ false: "#767577", true: "#746d7d" }}
          thumbColor={switchedOn ? "#a5a2a8" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={switchedOn}
          />
          </View>
          
            <Modal
            style={styles.switch.modal}
            animationType="slide"
            transparent={true}
            visible={switchedOn}
            onRequestClose={() => {
            setSwitchedOn(!switchedOn);
          }}>
            <View style={styles.switch.position}>
              <View style={styles.switch.modalView}>
                <Text style={styles.switch.text}>{Math.floor(Math.random()*999) +1}</Text>
                <View >
                <TouchableOpacity style={styles.switch.button} onPress={toggleSwitch} >
                  <Text style={styles.textInp.text}>Zamknij</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            </Modal>
          
       
        </View>
       
      </View>
    );
}