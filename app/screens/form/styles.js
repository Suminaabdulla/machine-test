import {StyleSheet} from 'react-native';
import Colors from '@utils/colors';
import {scaleHeight, scalePadding} from '@utils/size';

export const Styles = StyleSheet.create({
  container: {
    margin: 8,
    elevation: 2,
    borderColor: Colors.spanishGrey,
    paddingHorizontal: scalePadding(16),
    paddingVertical: scalePadding(10),
    backgroundColor: Colors.whiteColor,
  },
  textInputStyle: {
    borderBottomWidth: 0.2,
    color: Colors.spanishGrey,
  },
  focusedTextInput: {
    borderBottomColor: Colors.jungleGreen,
    color: Colors.jungleGreen,
  },
  radioButtonLabelStyle: {
    width: '100%',
    fontSize: scaleHeight(16),
    color: Colors.blackColor,
    marginBottom: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Styles;
