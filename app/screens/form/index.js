import React, {useState, memo} from 'react';
import {View, ScrollView, Text} from 'react-native';
import TextInputWithLabel from '@components/text-input-with-label';
import Colors from '@utils/colors';
import Button from '@components/button';
import {INPUT_TYPES} from '@utils/app-constants';
import RadioButton from '@components/radio-button';
import CheckBoxComponent from '@components/checkbox';
import Styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveFormData} from '@reducers/form-data';
import I18n from '@i18n';
import Toast from 'react-native-simple-toast';

const ARROW_RIGHT = 'arrow-right';
const SIMPLE_LINE_ICON = 'simple-line-icon';

const Form = () => {
  const {inputList} = useSelector(state => state?.inputsReducer);
  const dispatch = useDispatch();

  const [textInputValue, setTextInputValue] = useState('');
  const [textInputValueErrorMsg, setTextInputValueErrorMsg] = useState('');
  const [selectedRadioItem, setSelectedRadioItem] = useState('');
  const [selectedCheckboxItem, setSelectedCheckboxItem] = useState([]);

  const onChangeText = value => {
    setTextInputValue(value);
    setTextInputValueErrorMsg('');
  };

  const onPressRadioButton = option => {
    setSelectedRadioItem(option);
  };

  const onPressCheckBox = label => {
    let selectedLabels = [...selectedCheckboxItem];
    selectedLabels.push(label);
    setSelectedCheckboxItem(selectedLabels);
  };

  const onPressSave = () => {
    dispatch(
      saveFormData({
        payload: {
          selectedCheckboxItem,
          selectedRadioItem,
          textInputValue,
        },
      }),
    );
    Toast.show(I18n.t('form.save_form_data_success_msg'), Toast.SHORT);
  };

  const renderLabel = (label, styles = {}) => {
    return (
      <Text
        style={{
          ...Styles.radioButtonLabelStyle,
          ...styles,
        }}>
        {label}
      </Text>
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <ScrollView style={Styles.container}>
        {inputList?.payload?.map((inputs, index) => {
          return inputs?.type == INPUT_TYPES.TEXT ? (
            <TextInputWithLabel
              key={index}
              multiline
              value={textInputValue}
              onChangeText={onChangeText}
              label={inputs?.label}
              errorMessage={textInputValueErrorMsg}
              styles={{
                labelStyle: {
                  marginTop: 10,
                  color: Colors.blackColor,
                },
                focusedLabelStyle: {
                  color: Colors.jungleGreen,
                  fontSize: 14,
                },
                textInputStyle: {
                  ...Styles.textInputStyle,
                },
                focusedTextInputStyle: Styles.focusedTextInput,
              }}
            />
          ) : inputs?.type == INPUT_TYPES.RADIO ? (
            <View key={index}>
              {renderLabel(inputs?.label, {marginTop: 20})}
              <View style={Styles.radioButtonContainer}>
                {inputs?.options?.length &&
                  inputs?.options?.map((option, index) => {
                    return (
                      <RadioButton
                        key={index}
                        option={option}
                        onPressRadioButton={onPressRadioButton}
                        selectedItem={selectedRadioItem}
                      />
                    );
                  })}
              </View>
            </View>
          ) : inputs?.type == INPUT_TYPES.CHECK_BOX ? (
            <View key={index}>
              {renderLabel(inputs?.label, {marginTop: 20})}
              <View
                key={index}
                style={{...Styles.radioButtonContainer, ...{flexWrap: 'wrap'}}}>
                {inputs?.options?.length &&
                  inputs?.options?.map((option, index) => {
                    return (
                      <CheckBoxComponent
                        key={index}
                        label={option}
                        onPressCheckBox={onPressCheckBox}
                      />
                    );
                  })}
              </View>
            </View>
          ) : null;
        })}
        <Button
          title={I18n.t('form.save')}
          onPress={onPressSave}
          styles={{
            buttonStyle: {width: '36%', margin: 30},
          }}
          rightIcon={{type: SIMPLE_LINE_ICON, name: ARROW_RIGHT}}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default React.memo(Form);
