import { StyleSheet, Platform } from 'react-native';

const PADDING = 20;
const BORDER_RADIUS = 5;
const IMAGE_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 24 : 0, // clear the status bar
    padding: PADDING,
    paddingBottom: 0, // scroll container
  },
  demoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDING,
    backgroundColor: '#e3e3e3',
    overflow: 'hidden',
    borderRadius: BORDER_RADIUS,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },

  scrollContainer: {
    marginTop: PADDING,
    flex: 1, // fill the remaining space
  },
  scrollContentContainer: {
    paddingBottom: PADDING,
  },

  titleText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: PADDING,
  },

  buttonContainer: {
    marginBottom: PADDING / 2,
  },
});

export default styles;
