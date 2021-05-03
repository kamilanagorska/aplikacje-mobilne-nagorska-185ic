import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './style'

export default function SliderImg() {
    const [imgScale, setImgScale] = React.useState(1)
    const changeSize =(scale) => {
        setImgScale(scale)
    }
    return (
      <View style={styles.img.container}>
          <View style={styles.img.explain}>
            <Text style={styles.img.text}>Wykorzystanie komponentu Slider, który po przesunięciu powoduje zmianę rozmiaru obrazka</Text>
        </View>
        <View style={styles.img.slider}>
            <Slider style={{width: 300, height: 40}}
                minimumValue={0.1}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#d4b2a7"
                value={1}
                onValueChange={changeSize}
            />
        </View>
        <View>
            <Image style={[styles.img.image, {transform: [{ scale: imgScale}]}]} source={{uri: 'https://cdn.pixabay.com/photo/2020/01/18/19/28/rose-4776198_960_720.jpg'}}/>
        </View>


      </View>
    );
}