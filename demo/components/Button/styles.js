import { StyleSheet } from 'react-native';

const PADDING = 20;
const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  button: {
    padding: PADDING / 2,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
