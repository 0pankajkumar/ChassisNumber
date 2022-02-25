import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

const image = {
  uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
};

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={{flex: 2}}></View>
      <View style={{flex: 2.5}}>
        <Text style={styles.heroText}>Chassis Cracker</Text>
        <Text style={styles.heroTextTagline}>Decoding the chassis numbers</Text>
      </View>

      <View style={styles.sponsersBoxYaxis}>
        <Text style={styles.heroTextTagline}>Supported by</Text>
        <View style={styles.sponsersBoxXaxis}>
          <Text style={styles.heroText}>RTO</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const containerStyle = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
};

const heroTextStyle = {
  color: 'white',
  fontSize: 82,
  lineHeight: 84,
  fontWeight: 'bold',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {...containerStyle},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  heroText: {
    ...heroTextStyle,
  },
  heroTextTagline: {...heroTextStyle, fontWeight: 'normal', fontSize: 14},
  sponsersBoxYaxis: {
    flex: 2,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  sponsersBoxXaxis: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default WelcomeScreen;
