import * as React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import styles from './style'

export default function Scroll1() {
    const animals = `
    - zające
    - lisy
    - borsuki
    - jelenie
    - sarny
    - dziki
    - łosie
    - wilki
    - kuny 
    - żubry
    - sowy
    - dzięcioły
  `
    return (
      <View style={styles.scroll.container}>
          <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Pierwszy przykład wykorzystania ScrollView</Text>
          </View>
          <View style={styles.scroll.back}>
          <ScrollView persistentScrollbar={true}>
              <View style={styles.scroll.scbox}>
                  <Image style={{height:'100%', borderRadius: 10}} source={{uri: 'https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_960_720.jpg'}}></Image>
              </View>
              <View style={[styles.scroll.scbox, {flexDirection: 'row', backgroundColor: '#90c28c'}]}>
                  <View style={{flex:1}}>
                    <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Zwierzęta występujące w polskich lasach:</Text>
                      <ScrollView persistentScrollbar={true}>
                          <Text style={styles.scroll.text1}>{animals}</Text>
                      </ScrollView>
                  </View>
                  <View style={{flex:1, borderRadius: 10}}>
                  <Image style={{height:'80%', borderRadius: 10, marginTop: 20, marginLeft: 10, marginRight: 10}} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'}}></Image>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:1}}>
                      <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Przykładowe zdjęcia lasu:</Text>
                  </View>
                  <View style={{flex:5}}>
                      <ScrollView persistentScrollbar={true} style={{marginLeft: 10, marginRight: 10}}>
                      <Image style={styles.scroll.image} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/06/19/28/trees-975091_960_720.jpg'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_960_720.jpg'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://cdn.pixabay.com/photo/2016/08/16/19/09/forest-1598756_960_720.jpg'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://cdn.pixabay.com/photo/2016/11/21/11/46/forest-1844856_960_720.jpg'}}></Image>
                      </ScrollView>
                  </View>
              </View>
          </ScrollView>
          </View>
          
      </View>
    );
}