import * as React from 'react';
import { TouchableOpacity, View, Text, Pressable} from 'react-native';
import styles from './style'

export default function Press() {
  const [notification, setNotification] = React.useState('')
  const pressedIn = () => {
    setNotification('Wciskasz guzik')
  }
  const pressedOut = () => {
    setNotification('Puszczono guzik')
  }
  const longPress = () => {
    setNotification('Wciszkasz guzik przez ponad 500ms')
  }

    return (
      <View style={styles.scroll.container}>
        <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Przykład wykorzystania komponentu Pressable</Text>
          </View>
            <Pressable onPressIn={pressedIn} onPressOut={pressedOut} onLongPress={longPress} style={styles.home.button}>
              <Text style={styles.home.text}>Naciśnij</Text>
            </Pressable>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>{notification}</Text>

      </View>
    );
}