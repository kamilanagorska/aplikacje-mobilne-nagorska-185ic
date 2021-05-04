import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style'

export default function Images() {
    return (
        <View style={styles.img.container}>
        <View style={styles.img.explain}>
            <Text style={[styles.img.text, {textAlign: 'center'}]}>Obrazek ładowany za pomocą właściwości 'uri'</Text>
        </View>
        <View>
                <Image style={styles.img.image} source={{uri: 'https://cdn.pixabay.com/photo/2020/01/20/22/55/bush-4781627_960_720.jpg'}}/>
        </View>
        <View style={styles.img.explain}>
            <Text style={[styles.img.text, {textAlign: 'center'}]}>Obrazek ładowany z użyciem metody require()</Text>
        </View>
        <View>
                <Image style={styles.img.image} source={require('./img/image.jpg')}/>
        </View>        
    </View>
    );
}