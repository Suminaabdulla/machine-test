import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Colors from '@utils/colors';
import {scaleHeight} from '@utils/size';

const RadioButton = ({option, selectedItem, onPressRadioButton}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', margin: 5}}
      onPress={() => onPressRadioButton(option)}>
      <View
        style={{
          ...Styles.radioButtonContainerStyle,
          ...(selectedItem === option && {
            backgroundColor: Colors.jungleGreen,
            borderWidth: 0,
          }),
        }}
      />
      {option ? <Text style={Styles.titleStyle}>{option}</Text> : null}
    </TouchableOpacity>
  );
};

export default memo(RadioButton);

const Styles = StyleSheet.create({
  radioButtonContainerStyle: {
    borderRadius: 10,
    height: 20,
    width: 20,
    backgroundColor: Colors.whiteColor,
    borderWidth: 2,
    borderColor: Colors.spanishGrey,
  },
  titleStyle: {
    color: Colors.spanishGrey,
    textAlign: 'center',
    fontSize: scaleHeight(14),
    marginHorizontal: 5,
  },
});
