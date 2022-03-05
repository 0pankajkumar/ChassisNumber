import React from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Cracker from './src/screens/Cracker';

import WelcomeScreen from './src/screens/Cracker';
import CompanySelector from './src/screens/CompanySelector';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <View style={styles.mainArea}>
        {/* <Login /> */}
        {/* <WelcomeScreen /> */}
        {/* <Cracker /> */}
        {/* <CompanySelector /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CompanySelector}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Cracker" component={Cracker} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});
