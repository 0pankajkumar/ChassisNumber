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

import hyundai from '../../formulas/hyundai';

function Cracker(props) {
  const [number, onChangeNumber] = React.useState(null);
  const [cracked, onChangeCracked] = React.useState({month: null, year: null});

  function StartJudging() {
    let c = 'MALPA813MMM000001LD';
    let month_index = c[18];

    month_index = hyundai['month']['series_on_chassis'].indexOf(month_index);
    year_index = hyundai['year']['series_on_chassis'].indexOf(year_index);

    cracked.month = hyundai['month']['inference'][month_index];
    cracked.year = hyundai['year']['inference'][year_index];

    // console.log(hyundai);
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
      <Text>{number}</Text>
      <Text>{cracked.year}</Text>
      <Text>{cracked.month}</Text>
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
