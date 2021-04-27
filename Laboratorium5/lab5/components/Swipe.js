import * as React from 'react';
import { TouchableHighlight, View, Text, Image, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './style'

export default function Swipe() {
  const notHere = <Text style={[styles.scroll.text, {marginTop: 30}]}>Nie tutaj!</Text>;

const rightButtons = [
<Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_960_720.jpg'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2018/10/19/18/44/sunflower-3759285_960_720.jpg'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2019/09/14/15/27/sunflower-4476373_960_720.jpg'}}></Image>,
];
const rightButtonsv2 = [
  <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2015/01/28/20/15/roses-615281_960_720.jpg'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2013/12/22/03/15/rose-232114_960_720.jpg'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2014/08/15/22/36/roses-419079_960_720.jpg'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2018/05/27/15/33/garden-3433714_960_720.jpg'}}></Image>,
  ];
  const rightButtonsv3 = [
    <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2020/05/28/19/01/daisies-5232284_960_720.jpg'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2020/07/03/10/54/margarite-5366009_960_720.jpg'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2014/12/29/23/28/oxeye-583413_960_720.jpg'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://cdn.pixabay.com/photo/2018/06/12/19/29/daisies-3471283_960_720.jpg'}}></Image>,
    ];

    return (
      <View style={styles.scroll.container}>
          <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Przykład użycia komponentu Swipeable</Text>
          </View>
          <Swipeable style={styles.scroll.swipe} rightButtons={rightButtons}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>Słoneczniki</Text>
            </Swipeable>
            <Swipeable style={[styles.scroll.swipe, {backgroundColor: '#90c28c'}]} leftContent={notHere} rightButtons={rightButtonsv2}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>Róże</Text>
            </Swipeable>
            <Swipeable style={styles.scroll.swipe} rightButtons={rightButtonsv3}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>Stokrotki</Text>
            </Swipeable>
            
          
      </View>
    );
}