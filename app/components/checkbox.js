import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Colors from '@utils/colors';

const CheckBoxComponent = ({label, onPressCheckBox}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onPressCheck = () => {
    setIsChecked(!isChecked);
    onPressCheckBox(label);
  };

  return (
    <CheckBox
      title={label ?? ''}
      checked={isChecked}
      onPress={onPressCheck}
      containerStyle={Styles.checkboxContainerStyle}
      titleProps={{
        style: {
          color: Colors.spanishGrey,
        },
      }}
    />
  );
};

export default memo(CheckBoxComponent);

const Styles = StyleSheet.create({
  checkboxContainerStyle: {
    borderWidth: 0,
    backgroundColor: Colors.whiteColor,
    paddingVertical: 0,
  },
});
