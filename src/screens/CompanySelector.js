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

function CompanySelector({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  const [cracked, onChangeCracked] = React.useState({
    month: null,
    year: null,
    debugString: 'blank',
  });

  return (
    <SafeAreaView>
      <Button
        title="Hyundai"
        onPress={() => {
          navigation.navigate('Cracker', {name: 'Jane'});
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
});

export default CompanySelector;
