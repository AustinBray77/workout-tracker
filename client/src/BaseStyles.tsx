import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.Dark,
    flex: 1,
  },
  inCard: {
    margin: 20,
    padding: 20,
    height: '100%',
    backgroundColor: Colors.Light,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.Light,
    fontSize: 36,
  },
  subText: {
    textAlign: 'center',
    color: Colors.Light,
    fontSize: 24,
  },
  mt25: {
    marginTop: 25,
  },
});
