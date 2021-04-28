import * as React from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight, TextInput, Modal, ScrollView} from 'react-native';
import {WebView} from "react-native-webview";
import styles from './style'

export default class Touch extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      showT: false,
      search: '',
      showBrowser: false
    };
  }
  countClicking = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  clicked = () => {
    this.setState({showT: !this.state.showT})
  }

  showBrows = () => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.showBrowser}
            onRequestClose={() => {
                this.setState({showBrowser: !showBrowser});
            }}
        >
            <Text onPress={() => this.setState({showBrowser: false, search: ''})} style={{fontSize: 22}}>Zamknij</Text>
            <WebView
                source={{
                    uri: 'https://www.google.com/search?q=' + this.state.search,
                }}
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState
                scalesPageToFit
                javaScriptEnabled
                style={{flex:1}}
            />
        </Modal>
    );
}

  render(){
    return (
      <View style={styles.scroll.container}>
         { this.state.showBrowser && this.showBrows() }
        <View style={styles.scroll.explain}>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>Przykłady użycia komponentów TouchableOpacity, TouchableHighlight i WebView</Text>
        </View>
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.home.button} onPress={this.countClicking}>
            <Text style={styles.home.text}>Naciśnij</Text>
            </TouchableOpacity>
            <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Naciśnięto: {this.state.count} raz(y)</Text>
          </View>
          <View style={{flex: 1}}>
          <TouchableHighlight style={styles.home.button} onPress={this.clicked} underlayColor='#a0d99a'>
            <Text style={styles.home.text}>Naciśnij</Text>
            </TouchableHighlight>
            {this.state.showT && (
              <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Miłego dnia!</Text>
            )}
          </View>
          <View style={{flex:1, alignItems: 'center'}}>
            <Text style={[styles.scroll.text, {textAlign: 'center', marginTop: 20}]}>Co chcesz wyszukać?</Text>
            <TextInput style={styles.scroll.input} 
            onSubmitEditing={event => this.setState({search: event.nativeEvent.text, showBrowser: true})}></TextInput>
      </View>
      </ScrollView>

          
      </View>
    );
  }
   
}