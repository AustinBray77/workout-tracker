import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Calendar from './src/Components/Calendar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import Login from './src/Components/Login';
import SignUp from './src/Components/SignUp';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={{title: 'Calendar'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'Sign Up'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
