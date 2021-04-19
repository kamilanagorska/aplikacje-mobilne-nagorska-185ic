import React, { useState } from "react";
import { TouchableOpacity, View, Text, Switch } from 'react-native';
import styles from './style';

export default function SwitchEx() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.home.container}>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    );
}