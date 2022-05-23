import React, {useState, memo, useCallback} from 'react';
import {StyleSheet, ScrollView, Keyboard} from 'react-native';
import TextInputWithLabel from '@components/text-input-with-label';
import {scaleHeight, scalePadding} from '@utils/size';
import Colors from '@utils/colors';
import Button from '@components/button';
import {useDispatch} from 'react-redux';
import {saveJsonInputs} from '@reducers/inputs';
import ROUTES from '@utils/routes';
import I18n from '@i18n';
import Toast from 'react-native-simple-toast';

const ARROW_UP = 'md-arrow-up-sharp';
const IONICON = 'ionicon';

const JsonInput = ({navigation}) => {
  const [jsonInputList, setJsonInputList] = useState('');
  const [jsonInputListErrorMsg, setJsonInputListErrorMsg] = useState('');

  const dispatch = useDispatch();

  const onChangeText = value => {
    setJsonInputList(value);
    setJsonInputListErrorMsg('');
  };

  const onPressGenerate = () => {
    Keyboard?.dismiss();
    if (jsonInputList?.length) {
      dispatch(
        saveJsonInputs({
          payload: eval(jsonInputList),
        }),
      );
      Toast.show(I18n.t('json_input.save_JSON_input_success_msg'), Toast.SHORT);
      navigation?.navigate(ROUTES.Form);
    } else {
      setJsonInputListErrorMsg(
        I18n.t('app_common.empty_text', {
          label: I18n.t('json_input.json_input'),
        }),
      );
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <ScrollView style={Styles.container}>
        <TextInputWithLabel
          multiline
          onChangeText={onChangeText}
          label={I18n.t('json_input.input_label')}
          errorMessage={jsonInputListErrorMsg}
          styles={{
            labelStyle: {
              marginTop: 10,
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
          value={jsonInputList}
        />
        <Button
          title={I18n.t('json_input.generate')}
          onPress={onPressGenerate}
          styles={{
            buttonStyle: {width: '36%', marginBottom: 30},
          }}
          rightIcon={{type: IONICON, name: ARROW_UP}}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default React.memo(JsonInput);

const Styles = StyleSheet.create({
  container: {
    margin: 8,
    elevation: 2,
    borderColor: Colors.spanishGrey,
    paddingHorizontal: scalePadding(16),
    paddingVertical: scalePadding(10),
  },
  textInputStyle: {
    height: scaleHeight(400),
    borderBottomWidth: 1,
    color: Colors.spanishGrey,
    marginBottom: 20,
  },
  focusedTextInput: {
    borderBottomColor: Colors.jungleGreen,
    color: Colors.jungleGreen,
  },
});
