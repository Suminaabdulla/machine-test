import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from '@utils/colors';
import {scaleHeight} from '@utils/size';
import {Icon} from 'react-native-elements';
const Button = ({onPress, title, styles = {}, rightIcon}) => {
  return (
    <TouchableOpacity
      style={{...Styles.buttonContainerStyle, ...styles.buttonStyle}}
      onPress={onPress}>
      <Text style={Styles.titleStyle}>{title.toUpperCase()}</Text>
      {rightIcon && (
        <Icon
          name={rightIcon?.name}
          type={rightIcon?.type}
          style={{marginHorizontal: 5}}
          color={Colors.whiteColor}
          size={16}
        />
      )}
    </TouchableOpacity>
  );
};
export default memo(Button);
const Styles = StyleSheet.create({
  buttonContainerStyle: {
    width: '90%',
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: Colors.whiteColor,
    textAlign: 'center',
    fontSize: scaleHeight(14),
  },
});
