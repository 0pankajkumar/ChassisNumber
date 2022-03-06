import React from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Button} from 'react-native';

import {StartJudging} from '../Logic/StartJudging';

function Cracker(props) {
  const [number, onChangeNumber] = React.useState(null);
  const [cracked, onChangeCracked] = React.useState({
    month: null,
    year: null,
    brand: props.route.params.brand,
  });

  return (
    <SafeAreaView>
      <Text>{cracked.brand}</Text>
      {console.log(
        'props from scrren selectort',
        props.route.params.brand,
        cracked.brand,
      )}
      <TextInput
        style={styles.textBox}
        onChangeText={e => onChangeNumber(e)}
        value={number}
        placeholder="Enter Chassis Number"
        keyboardType="default"
      />
      <Button title="Find" onPress={StartJudging(number, cracked)} />
      <Text>Year: {cracked.year}</Text>
      <Text>Month: {cracked.month}</Text>
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
