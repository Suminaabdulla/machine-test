import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';
import Colors from '@utils/colors';
import {scaleHeight} from '@utils/size';

const TextInputWithLabel = ({
  value,
  placeholder,
  onChangeText,
  multiline,
  label,
  errorMessage,
  styles = {},
}) => {
  const [isFocussed, setIsFocussed] = useState(false);

  const onFocus = () => {
    setIsFocussed(true);
  };

  const onBlur = () => {
    setIsFocussed(false);
  };

  return (
    <>
      {label ? (
        <Text
          style={{
            ...Styles.labelStyle,
            ...styles.labelStyle,
            ...(isFocussed && styles.focusedLabelStyle),
          }}>
          {label}
        </Text>
      ) : null}
      <TextInput
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        onChangeText={value => onChangeText(value)}
        style={{
          ...styles.textInputStyle,
          ...{width: '100%'},
          ...(isFocussed && styles.focusedTextInputStyle),
          ...(value && {color: Colors.blackColor}),
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {errorMessage ? (
        <Text style={{color: Colors.redColor, marginVertical: 5}}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default TextInputWithLabel;

const Styles = StyleSheet.create({
  labelStyle: {
    width: '100%',
    fontSize: scaleHeight(16),
    color: Colors.spanishGrey,
  },
});
