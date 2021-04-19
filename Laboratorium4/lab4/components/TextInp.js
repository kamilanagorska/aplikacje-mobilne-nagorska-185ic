import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from './style'

export default function TextInp() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [email, setEmail] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    return (
      <View style={styles.home.container}>
        <View style={styles.textInp.explain}>
            <Text style={styles.textInp.text2}>Przykłady użycia elementu TextInput, po wpisaniu tekstu wyświetla się on pod spodem</Text>
        </View>
        <ScrollView>
          <View style={styles.textInp.example}>
              <Text style={styles.textInp.text}>Maksymalna długość: 40 znaków</Text>
              <TextInput
              style={styles.textInp.input}
              placeholder="Wpisz tu tekst"
              onChangeText={text => setText(text)}
              maxLength={40}
              />
              <Text style={styles.textInp.text}>{text}</Text>
          </View>

          <View style={styles.textInp.example}>
          <Text style={styles.textInp.text}>Automatyczna zmiana liter na duże</Text>
          <TextInput
          style={styles.textInp.input}
          placeholder="Wpisz tu tekst"
          autoCapitalize="characters"
          onChangeText={text2 => setText2(text2)}
          />
           <Text style={styles.textInp.text}>{text2}</Text>
          </View>

          <View style={styles.textInp.example}>
          <Text style={styles.textInp.text}>Typ klawiatury do wpisywania adresów e-mail</Text>
          <TextInput
          style={styles.textInp.input}
          placeholder="Wpisz tu adres e-mail"
          keyboardType="email-address"
          onChangeText={email => setEmail(email)}
          />
           <Text style={styles.textInp.text}>{email}</Text>
          </View>

          <View style={styles.textInp.example}>
          <Text style={styles.textInp.text}>Możliwe tworzenia nowych lini, domyślna liczba lini to 2</Text>
          <TextInput
          style={styles.textInp.input}
          placeholder="Wpisz tu tekst"
          numberOfLines={2}
          multiline={true}
          onChangeText={text3 => setText3(text3)}
          />
          <Text style={styles.textInp.text}>{text3}</Text>
          </View>

          <View style={styles.textInp.example}>
          <Text style={styles.textInp.text}>Tej wartości nie da się edytować (editable = false)</Text>
          <TextInput
          style={styles.textInp.input}
          placeholder="Wpisz tu tekst"
          editable={false}
          />
          </View>

          <View style={styles.textInp.example}>
          <Text style={styles.textInp.text}>Return Key to wyślij</Text>
          <TextInput
          style={styles.textInp.input}
          placeholder="Wpisz tu tekst"
          returnKeyType="send"
          onChangeText={text4 => setText4(text4)}
          />
        <Text style={styles.textInp.text}>{text4}</Text>
          </View>
        </ScrollView>
      </View>
    );
}