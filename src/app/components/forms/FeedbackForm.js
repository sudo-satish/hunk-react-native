import React from 'react';
import {View} from 'react-native';
import {SelectField} from '../core/SelectField';
import {FEEDBACK_TYPE} from '../../constants';
import {Button, Input, Divider} from '@ui-kitten/components';
import {useForm} from 'react-hook-form';
import {TextInput} from '../core/TextInput';
import {showMessage} from 'react-native-flash-message';

export const FeedbackForm = () => {

  const {control, setValue, handleSubmit} = useForm();

  const onSubmit = (values) => {
    console.log(values);
    showMessage({
      message: "Thanks for your valueable feedback, We will revert back to you soon on this.",
      type: "success",
    });
  };
  
  return (
    <View>
      <SelectField 
        name="feedbackType"
        SelectOptions={FEEDBACK_TYPE}
        placeholder="FeedBack Type"
        setValue={setValue}
        control={control}
        />
      <Divider />
      <Divider />
      <TextInput
        multiline
        numberOfLines={12}
        textAlignVertical="top"
        name="feedback"
        control={control}
        placeholder="Start Typing ..."
        />

      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  )
}