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
  const [cracked, onChangeCracked] = React.useState({
    month: null,
    year: null,
    debugString: 'blank',
  });

  function get_index_of_key_from_left(arr, key) {
    console.log('left');
    return arr.indexOf(key);
  }

  function get_index_of_key_from_right(arr, key) {
    console.log('right');
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === key) {
        return i;
      }
    }
  }

  function StartJudging() {
    let c = 'MALPA813MMM000001D';
    let month_index_of_chassis_number_to_look_at =
      hyundai['month']['nth_character'];
    let year_index_of_chassis_number_to_look_at =
      hyundai['year']['nth_character'];

    let month_char = c[month_index_of_chassis_number_to_look_at];
    let year_char = c[year_index_of_chassis_number_to_look_at];

    cracked.debugString = month_char;

    let month_index_to_interpolate;
    let year_index_to_interpolate;

    let direction_for_month_read = hyundai['month']['count_from'];
    let direction_for_year_read = hyundai['year']['count_from'];

    if (direction_for_month_read === 'right') {
      month_index_to_interpolate = get_index_of_key_from_right(
        hyundai['month']['series_on_chassis'],
        month_char,
      );
    } else {
      //   cracked.debugString = month_index_of_chassis_number_to_look_at;
      month_index_to_interpolate = get_index_of_key_from_left(
        hyundai['month']['series_on_chassis'],
        month_char,
      );
    }

    if (direction_for_year_read === 'right') {
      year_index_to_interpolate = get_index_of_key_from_right(
        hyundai['year']['series_on_chassis'],
        year_char,
      );
    } else {
      year_index_to_interpolate = get_index_of_key_from_left(
        hyundai['year']['series_on_chassis'],
        year_char,
      );
    }

    // console.log(month_index_to_interpolate, year_index_to_interpolate);

    cracked.month = hyundai['month']['inference'][month_index_to_interpolate];
    cracked.year = hyundai['year']['inference'][year_index_to_interpolate];

    console.log(cracked.month, cracked.year);
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
