import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../StackParamList';
import {
  Alert,
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
import {codeToString} from '../StatusCode';

type loginScreenProp = NativeStackNavigationProp<StackParamList, 'Login'>;

const tryLogin = async (
  username: string,
  password: string,
): Promise<StatusCode> => {
  let result = 0;

  await fetch('http://localhost:3001/check', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then(res => {
      result = res.status;
    })
    .catch(err => {
      result = 200;
    });

  return result;
};

const Login = () => {
  const navigation = useNavigation<loginScreenProp>();
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={BaseStyles.body}>
      <View style={BaseStyles.inCard}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, paddingTop: 50}}>
            <Text style={[BaseStyles.headerText, {color: Colors.Dark}]}>
              Login
            </Text>
            <Text
              style={[BaseStyles.subText, {color: Colors.Dark, fontSize: 16}]}>
              Enter your username and password to continue
            </Text>
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={onChangeUsername}
              placeholder={'Username...'}
            />
            <TextInput
              onChangeText={onChangePassword}
              placeholder={'Password...'}
              secureTextEntry={true}
            />
          </View>
          <View style={{flex: 2}}>
            <View style={BaseStyles.mt25}>
              <Button
                title="Login"
                onPress={async () => {
                  let res: StatusCode = await tryLogin(username, password);

                  if (res == StatusCode.Success) {
                    navigation.navigate('Calendar');
                  } else {
                    Alert.alert('Error: Unable to Login', codeToString(res), [
                      {text: 'Ok'},
                    ]);
                  }
                }}
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
      </View>
    </View>
  );
};

export default Login;
