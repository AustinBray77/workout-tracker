import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackParamList} from '../StackParamList';
import Colors from '../Colors';
import BaseStyles from '../BaseStyles';
import moment from 'moment';

type calendarScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

let sideTab: boolean;
let setSideTab: Dispatch<SetStateAction<boolean>>;

const Header = (): JSX.Element => {
  const [offset, setOffset] = useState(0);

  return (
    <View style={[styles.border, {padding: 25, flexDirection: 'row'}]}>
      <TouchableOpacity
        onPress={() => {
          setOffset(offset - 1);
        }}
        style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/left-arrow.png')}
          style={{height: 35, width: 'auto'}}
        />
      </TouchableOpacity>
      <View style={{flex: 24}}>
        <Text
          style={[
            BaseStyles.subText,
            {
              fontSize: 18,
              marginLeft: 20,
              marginRight: 20,
              alignSelf: 'stretch',
            },
          ]}>
          {moment().add(offset, 'days').format('dddd, MMMM Do YYYY')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOffset(offset + 1);
        }}
        style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/right-arrow.png')}
          style={{height: 35, width: 'auto'}}
        />
      </TouchableOpacity>
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
    <View
      style={[
        styles.border,
        {padding: 15, flexDirection: 'row', justifyContent: 'flex-start'},
      ]}>
      <View style={{marginRight: 100}}>
        <TouchableOpacity
          onPress={() => {
            setSideTab(!sideTab);
          }}>
          <Image
            source={require('../../assets/three-horizontal-lines-icon.png')}
            style={{height: 35, width: 35}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: Colors.Light}}>
          &copy; Austin Bray {moment().format('YYYY')}
        </Text>
      </View>
    </View>
  );
};

const SideTab = (): JSX.Element => {
  return <View></View>;
};

const Calendar = (): JSX.Element => {
  const [useSideTab, setUseSideTab] = useState(false);

  setSideTab = setUseSideTab;
  sideTab = useSideTab;

  return (
    <View style={{flex: 1}}>
      <Header />
      <Body />
      <Footer />
      {useSideTab ? <SideTab /> : ''}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.Light,
    flex: 4,
  },
  border: {
    backgroundColor: Colors.Dark,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Calendar;
