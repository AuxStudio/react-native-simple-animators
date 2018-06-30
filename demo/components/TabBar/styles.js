import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  tabContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  activeText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default styles;
