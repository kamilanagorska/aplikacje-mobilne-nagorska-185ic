import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style'

export default function Press() {
  const [notification, setNotification] = React.useState('')
  const pressed = (notif) => {
    setNotification(notif)
  }
    return (
      <View style={styles.scroll.container}>
        <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Przykład wykorzystania komponentu Pressable</Text>
          </View>
            <Pressable onPressIn={() => pressed('Wciskasz guzik')} onPressOut={() => pressed('Puszczono guzik')} 
            onLongPress={() => pressed('Wciszkasz guzik przez ponad 500ms')} style={styles.home.button}>
              <Text style={styles.home.text}>Naciśnij</Text>
            </Pressable>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>{notification}</Text>
      </View>
    );
}