import * as React from 'react';
import { ActivityIndicator, View, Text} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './style'

export default function StepOne({navigation}) {
    return (
      <View style={styles.home.container}>
        <View style={styles.step.description}>
          <Text style={styles.sort.text}>Wykorzystanie progresu krokowego i elementu ActivityIndicator</Text>
        </View>
        <View style={styles.step.progress}>
    <ProgressSteps 
      progressBarColor={'#8e97a3'} 
      disabledStepIconColor={'#8e97a3'} 
      labelColor={'#8e97a3'} 
      completedLabelColor={'#8e97a3'}
      activeStepIconBorderColor={'white'}
      completedProgressBarColor={'white'}
      completedStepIconColor={'white'}
      completedCheckColor={'black'}
      activeLabelColor={'white'}
      labelFontSize={18}
    >
        <ProgressStep 
        label={'Krok pierwszy'} 
        nextBtnText={'Krok drugi'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}>
          {/*Ekran 1*/}
            <View style={styles.step.screen}>
              <Text style={styles.step.text}>ActivityIndicator zmienionym kolorem na biały i rozmiarem 'large'</Text>
                <ActivityIndicator color='white' size='large'/>
            </View>
        </ProgressStep>

        <ProgressStep 
        label="Krok drugi"
        nextBtnText={'Krok trzeci'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        previousBtnText={'Krok pierwszy'}
        previousBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        previousBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        >
           {/*Ekran 2*/}
            <View style={styles.step.screen}>
              <Text style={styles.step.text}>ActivityIndicator ze zmienionym kolorem na ciemny niebieski i rozmiarem 'small'</Text>
            <ActivityIndicator color='#5677a3' size='small' />
            </View>
        </ProgressStep>

        <ProgressStep 
        label="Krok trzeci"
        finishBtnText={'Strona główna'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        previousBtnText={'Krok drugi'}
        previousBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        previousBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        onSubmit={() => navigation.push('home')}
        >
           {/*Ekran 3*/}
            <View style={styles.step.screen}>
            <Text style={styles.step.text}>ActivityIndicator ze zmienionym kolorem na jasny niebieski i rozmiarem 'large', ale użyłam transform do powiększenia tego elementu</Text>
            <ActivityIndicator style={{transform: [{scale: 3}]}} color='#c9dcf5' size='large' />
            </View>

        </ProgressStep>
    </ProgressSteps>
</View>
      </View>
    );
}