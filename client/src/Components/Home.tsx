import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {StackParamList} from '../StackParamList';
import Colors from '../Colors';
import BaseStyles from '../BaseStyles';

type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={BaseStyles.body}>
      <ImageBackground
        source={{
          uri: 'https://musclemagfitness.com/wp-content/uploads/dumbbell-concentration-curls.jpg',
        }}
        style={BaseStyles.inCard}
        blurRadius={5}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{flex: 2, paddingTop: 100}}>
            <Text style={BaseStyles.headerText}>Workout Tracker</Text>
            <Text style={BaseStyles.subText}>By Austin Bray</Text>
          </View>
          <View style={{flex: 2}}>
            <View style={BaseStyles.mt25}>
              <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
            <View style={BaseStyles.mt25}>
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
