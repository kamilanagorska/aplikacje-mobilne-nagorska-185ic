import React from 'react';
import {Text, ScrollView} from 'react-native';
import styles from './style'

export default function Generate() {
    const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const lettersLength = letters.length;
    for ( let i = 0; i < 50000; i++ ) {
        result += letters.charAt(Math.floor(Math.random() * lettersLength));
    }
    return(
        <ScrollView>
        <Text style={styles.lazy.letText}>{result}</Text>
        </ScrollView>
    )
}

