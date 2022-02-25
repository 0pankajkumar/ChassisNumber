import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

function Cracker(props) {
  const [number, onChangeNumber] = React.useState(null);

  function StartJudging() {
    Alert.alert('Started judging' + number);
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.textBox}
        onChangeText={e => onChangeNumber(e)}
        value={number}
        placeholder="Enter Chassis Number"
        keyboardType="default"
      />
      <Button title="Press me" onPress={StartJudging} />
    </SafeAreaView>
  );
}

const containerStyle = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {...containerStyle},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  textBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Cracker;
