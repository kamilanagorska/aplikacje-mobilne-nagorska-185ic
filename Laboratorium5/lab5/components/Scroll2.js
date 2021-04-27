import * as React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from './style'

export default function Scroll2() {
    return (
        <View style={styles.scroll.container}>
        <View style={styles.scroll.explain}>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>Drugi przykład wykorzystania ScrollView z włączoną opcją horizontal</Text>
        </View>
        <View style={styles.scroll.back}>
        <ScrollView persistentScrollbar={true} horizontal={true}>
            <View style={styles.scroll.scbox2}>
                <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
            </View>
            <View style={styles.scroll.scbox2}>
                <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
            </View>
            <View style={[styles.scroll.scbox2, {flexDirection: 'row'}]}>
                <View style={{flex:3, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
            </View>
            <View style={styles.scroll.scbox2}>
                <View style={{flex:4, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:2, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  <View style={{flex:4, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}></View>
                  </View>
            </View>
            <View style={[styles.scroll.scbox2, {flexDirection: 'row'}]}>
                <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:4, backgroundColor: '#527550', borderRadius: 10, flexDirection: 'column'}}>
                  <View style={{flex:4, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  </View>
            </View>
            <View style={styles.scroll.scbox2}>
                <View style={{flex:6, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:4, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
            </View>
            <View style={[styles.scroll.scbox2, {flexDirection: 'row'}]}>
                <View style={{flex:20, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                <View style={{flex:2, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
            </View>


        </ScrollView>
        </View>
        
    </View>
    );
}