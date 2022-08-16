import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../StackParamList';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BaseStyles from '../BaseStyles';
import Colors from '../Colors';
import StatusCode from '../StatusCode';

type signUpScreenProp = NativeStackNavigationProp<StackParamList, 'SignUp'>;

const trySignUp = (
  username: string,
  email: string,
  password: string,
  password2: string,
): StatusCode => {
  return StatusCode.Success;
};

const SignUp = () => {
  const navigation = useNavigation<signUpScreenProp>();
  const [username, onChangeUsername] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [password2, onChangePassword2] = React.useState('');

  return (
    <View style={BaseStyles.body}>
      <View style={BaseStyles.inCard}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, paddingTop: 50}}>
            <Text style={[BaseStyles.headerText, {color: Colors.Dark}]}>
              Sign Up
            </Text>
            <Text
              style={[BaseStyles.subText, {color: Colors.Dark, fontSize: 16}]}>
              Please enter your details to continue...
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 100}}>
            <TextInput
              onChangeText={onChangeUsername}
              placeholder={'Username...'}
            />
            <TextInput onChangeText={onChangeEmail} placeholder={'Email...'} />
            <TextInput
              onChangeText={onChangePassword}
              placeholder={'Password...'}
              secureTextEntry={true}
            />
            <TextInput
              onChangeText={onChangePassword2}
              placeholder={'Confirm Password'}
              secureTextEntry={true}
            />
          </View>
          <View style={{flex: 2}}>
            <View style={BaseStyles.mt25}>
              <Button
                title="Sign Up"
                onPress={() => {
                  if (
                    trySignUp(username, email, password, password2) ==
                    StatusCode.Success
                  ) {
                    navigation.navigate('Calendar');
                  }
                }}
              />
            </View>
            <View style={BaseStyles.mt25}>
              <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
