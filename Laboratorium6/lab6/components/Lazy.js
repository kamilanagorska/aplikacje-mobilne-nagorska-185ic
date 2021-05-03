import * as React from 'react';
import {View, Text} from 'react-native';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native'
import styles from './style'

export default function Lazy() {
    return (
        <View style={styles.img.container}>
          <View style={styles.img.explain}>
            <Text style={styles.img.text}>Lazy loading komponentu Image z wykorzystaniem opcji PlaceholderContent</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image 
            style={styles.img.image}
            PlaceholderContent={<ActivityIndicator color='white' size='large' />}
            transition={true}
            transitionDuration ={1200}
            source={{uri: 'https://cdn.pixabay.com/photo/2014/06/04/18/33/strawflower-362280_960_720.jpg'}}/>
        </View>

      </View>
    );
}