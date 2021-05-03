import * as React from 'react';
import {View, Text} from 'react-native';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'; 
import styles from './style'

export default function Lazy() {
    return (
        <View style={styles.img.container}>
          <View style={styles.img.explain}>
            <Text style={[styles.img.text, {textAlign: 'center'}]}>Lazy loading komponentu Image z wykorzystaniem opcji PlaceholderContent</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.img.image}
            PlaceholderContent={<ActivityIndicator color='white' size='large' />}
            transition={true}
            transitionDuration ={1200}
            source={{uri: 'https://cdn.pixabay.com/photo/2014/06/04/18/33/strawflower-362280_960_720.jpg'}}/>
        </View>
        <View style={styles.img.explain}>
            <Text style={[styles.img.text, {textAlign: 'center'}]}>Wyświetlenie wybranego zestawu ikon</Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
        <AntDesign name="frown" size={30} color="white" />
        <AntDesign name="rest" size={30} color="white" />
        <AntDesign name="staro" size={30} color="white" />
        <AntDesign name="meho" size={30} color="white" />
        <AntDesign name="meh" size={30} color="white" />
        <AntDesign name="cloud" size={30} color="white" />
        <AntDesign name="cloudo" size={30} color="white" />
        <AntDesign name="heart" size={30} color="white" />
        <AntDesign name="hearto" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <AntDesign name="smileo" size={30} color="white" />
        <AntDesign name="frowno" size={30} color="white" />
        <AntDesign name="gift" size={30} color="white" />
        <AntDesign name="edit" size={30} color="white" />
        <AntDesign name="star" size={30} color="white" />
        <AntDesign name="rocket1" size={30} color="white" />
        <AntDesign name="aliwangwang-o1" size={30} color="white" />
        <AntDesign name="home" size={30} color="white" />
        <AntDesign name="earth" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <AntDesign name="wifi" size={30} color="white" />
        <AntDesign name="message1" size={30} color="white" />
        <AntDesign name="smile-circle" size={30} color="white" />
        <AntDesign name="warning" size={30} color="white" />
        <AntDesign name="check" size={30} color="white" />
        <AntDesign name="book" size={30} color="white" />
        <AntDesign name="clockcircleo" size={30} color="white" />
        <AntDesign name="mail" size={30} color="white" />
        <AntDesign name="aliwangwang" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Entypo name="address" size={30} color="white" />
        <Entypo name="adjust" size={30} color="white" />
        <Entypo name="air" size={30} color="white" />
        <Entypo name="attachment" size={30} color="white" />
        <Entypo name="baidu" size={30} color="white" />
        <Entypo name="block" size={30} color="white" />
        <Entypo name="book" size={30} color="white" />
        <Entypo name="moon" size={30} color="white" />
        <Entypo name="brush" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Entypo name="cake" size={30} color="white" />
        <Entypo name="leaf" size={30} color="white" />
        <Entypo name="clock" size={30} color="white" />
        <Entypo name="code" size={30} color="white" />
        <Entypo name="palette" size={30} color="white" />
        <Entypo name="light-up" size={30} color="white" />
        <Entypo name="edit" size={30} color="white" />
        <Entypo name="emoji-flirt" size={30} color="white" />
        <Entypo name="tree" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Entypo name="star" size={30} color="white" />
        <Entypo name="emoji-sad" size={30} color="white" />
        <Entypo name="feather" size={30} color="white" />
        <Entypo name="fingerprint" size={30} color="white" />
        <Entypo name="flash" size={30} color="white" />
        <Entypo name="flower" size={30} color="white" />
        <Entypo name="game-controller" size={30} color="white" />
        <Entypo name="heart" size={30} color="white" />
        <Entypo name="heart-outlined" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Feather name="alert-circle" size={30} color="white" />
        <Feather name="award" size={30} color="white" />
        <Feather name="box" size={30} color="white" />
        <Feather name="cloud-drizzle" size={30} color="white" />
        <Feather name="coffee" size={30} color="white" />
        <Feather name="compass" size={30} color="white" />
        <Feather name="droplet" size={30} color="white" />
        <Feather name="feather" size={30} color="white" />
        <Feather name="headphones" size={30} color="white" />
        </View>
        <View style={{flexDirection: 'row'}}>
        <Feather name="heart" size={30} color="white" />
        <Feather name="key" size={30} color="white" />
        <Feather name="meh" size={30} color="white" />
        <Feather name="moon" size={30} color="white" />
        <Feather name="music" size={30} color="white" />
        <Feather name="star" size={30} color="white" />
        <Feather name="sun" size={30} color="white" />
        <Feather name="umbrella" size={30} color="white" />
        <Feather name="watch" size={30} color="white" />
        </View>
        </View>
        

      </View>
    );
}