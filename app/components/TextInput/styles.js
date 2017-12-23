import EStyleSheet from 'react-native-extended-stylesheet'; 
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    width: '90%',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    alignItems: 'center',
    height: INPUT_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    backgroundColor: '$border',
    width: 1
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  }
});
