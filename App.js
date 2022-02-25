import React from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import Cracker from './src/screens/Cracker';

import WelcomeScreen from './src/screens/Cracker';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.mainArea}>
      {/* <Login /> */}
      {/* <WelcomeScreen /> */}
      <Cracker />
    </View>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});
