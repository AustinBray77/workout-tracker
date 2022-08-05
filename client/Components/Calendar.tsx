import moment from 'moment';
import React from 'react';
import {MaskedViewComponent, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = (): JSX.Element => {
  const date: Date = new Date();

  return (
    <View style={styles.border}>
      <Text style={{color: 'white'}}>
        {moment().format('dddd, MMMM Do YYYY')}
      </Text>
    </View>
  );
};

const Body = (): JSX.Element => {
  return (
    <View style={styles.main}>
      <Text>H</Text>
    </View>
  );
};

const Footer = (): JSX.Element => {
  return (
    <View style={styles.border}>
      <Text>H</Text>
    </View>
  );
};

const Calendar = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'red',
    flex: 4,
  },
  border: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Calendar;
