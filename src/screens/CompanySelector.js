import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, Pressable} from 'react-native';

function CompanySelector({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  const [cracked, onChangeCracked] = React.useState({
    month: null,
    year: null,
    debugString: 'blank',
  });

  return (
    <SafeAreaView style={styles.buttonsAlignment}>
      <Button
        title="Hyundai"
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'hyundai'});
        }}
      />
      <Button
        title="Tata"
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'tata'});
        }}
      />
      <Button
        title="Maruti"
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'maruti'});
        }}
      />
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
  buttonsAlignment: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default CompanySelector;
