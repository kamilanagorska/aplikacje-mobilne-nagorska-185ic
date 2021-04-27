import * as React from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './style'

export default function Scroll1() {
    return (
      <View style={styles.scroll.container}>
          <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Pierwszy prosty przykład wykorzystania ScrollView</Text>
          </View>
          <View style={styles.scroll.back}>
          <ScrollView persistentScrollbar={true}>
              <View style={[styles.scroll.scbox, {flexDirection: 'row'}]}>
                  <View style={{flex:4, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:3, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:5, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:20, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:2, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:2, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
              </View>
              <View style={[styles.scroll.scbox, {flexDirection: 'row'}]}>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:5, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:5, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
                  <View style={{flex:2, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
              </View>
              <View style={[styles.scroll.scbox, {flexDirection: 'row'}]}>
                  <View style={{flex:1, backgroundColor: '#739671', borderRadius: 10}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#527550', borderRadius: 10}}>
                  </View>
              </View>
          </ScrollView>
          </View>
          
      </View>
    );
}