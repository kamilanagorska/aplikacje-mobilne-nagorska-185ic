import * as React from 'react';
import { ScrollView, View, Text, Image} from 'react-native';
import styles from './style'

export default function Scroll2() {
    return (
        <View style={styles.scroll.container}>
        <View style={styles.scroll.explain}>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>Drugi przykład wykorzystania ScrollView z włączoną opcją horizontal</Text>
        </View>
        <View style={styles.scroll.back}>
        <ScrollView persistentScrollbar={true}>
            <View style={styles.scroll.scbox}>
                <View style={{flex:1}}>
                  <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Popularne kwiaty</Text>
                </View>
                  <View style={{flex:6}}>
                  <Image style={{height:'95%', borderRadius: 10, marginLeft: 10, marginRight: 10}} source={{uri: 'https://cdn.pixabay.com/photo/2019/04/21/01/12/chrysanthemum-4143241_960_720.jpg'}}></Image>
                  </View>
            </View>
            <View style={[styles.scroll.scbox, { backgroundColor: '#90c28c', height: 140}]}>
                <View style={{flex:2}}>
                  <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Przykładowe zdjęcia</Text>
                  </View>
                  <View style={{flex:6}}>
                    <ScrollView persistentScrollbar={true} horizontal={true}>
                    <Image style={styles.scroll.image2} source={{uri: 'https://cdn.pixabay.com/photo/2019/06/12/21/09/plantain-leaved-leopards-bane-4270247_960_720.jpg'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://cdn.pixabay.com/photo/2019/05/06/20/23/tulips-4184171_960_720.jpg'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://cdn.pixabay.com/photo/2019/07/21/11/43/flowers-4352530_960_720.jpg'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://cdn.pixabay.com/photo/2018/06/18/06/46/roses-3481982_960_720.jpg'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://cdn.pixabay.com/photo/2013/07/19/11/33/daisy-165292_960_720.jpg'}}></Image>
                    </ScrollView>
                  </View>
            </View>
            <View style={[styles.scroll.scbox, { backgroundColor: '#90c28c'}]}>
                  <View style={{flex:1}}>
                    <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Do najpopularniejszych kwiatów należą:</Text>
                  </View>
                  <View style={{flex:5}}>
                    <ScrollView persistentScrollbar={true}>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Róże</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Gerbery</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Tulipany</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Lilie</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Storczyki</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Irysy</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Słoneczniki</Text>
                      </View>
                    </ScrollView>

                  </View>
            </View>
        </ScrollView>
        </View>
        
    </View>
    );
}