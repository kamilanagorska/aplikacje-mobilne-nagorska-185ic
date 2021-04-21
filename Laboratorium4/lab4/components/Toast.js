import React, { useState } from "react";
import { TouchableOpacity, View, Text, ToastAndroid, Modal } from 'react-native';
import styles from './style'

export default function Toast() {
    const [time, setTime] = useState(0)
    const [switchedOn, setSwitchedOn] = useState(false);
    const toggleSwitch = () => setSwitchedOn(previousState => !previousState);
    let promise = null
    const makeNewPromise = () => {
        let timeNew = Math.floor(Math.random()*10000) +1000
        setTime(timeNew)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide')
                showToast(true)
            }, timeNew)
        })
    }
    const showToast = () => {
            ToastAndroid.showWithGravity(
                'Pasywanie powiadomienie :)',
                ToastAndroid.LONG,
                ToastAndroid.CENTER
                );
    }
    
    return (
      <View style={styles.date.container}>
          <View style={styles.textInp.explain}>
                <Text style={styles.textInp.text2}>"Aktywny" modal i wykorzystanie ToastAndroid</Text>
            </View> 
            <View style={styles.toast.example}>
                <TouchableOpacity style={styles.date.button} onPress={() => {
                    makeNewPromise()
                    toggleSwitch()
                    promise.then((value) => {
                        if(value == 'hide'){
                            setSwitchedOn(false)
                        }
                    });
                }}>
                    <Text style={styles.textInp.text}>Zacznij</Text>
                </TouchableOpacity>
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
                <Text style={styles.switch.text}>{time} ms</Text>
                <View >
                </View>
              </View>
            </View>
            </Modal>
      </View>
    );
}