import React, {useEffect} from 'react';
import {Button, Divider} from '@ui-kitten/components';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {TextInput} from '../core/TextInput';
import {MEMBERSHIP_CYCLE, WORKOUT_SHIFT, GENDER} from '../../constants';
import {DatePicker} from '../core/DatePicker';
import {SelectField} from '../core/SelectField';

export const MemberFormComponent = ({defaultValues = undefined, onSubmit}) => {

  const {control, handleSubmit, setValue} = useForm({
    defaultValues
  });

  useEffect(() => {
    if (defaultValues) {
      Reflect.ownKeys(defaultValues).forEach(key => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TextInput
          name="mobileNumber"
          control={control}
          placeholder="Mobile Number"
          keyboardType="number-pad" />

        <SelectField
          name="gender"
          SelectOptions={GENDER}
          placeholder="Gender"
          setValue={setValue}
          control={control} />

        <TextInput
          name="firstName"
          control={control}
          placeholder='First Name' />

        <TextInput
          name="lastName"
          control={control}
          placeholder="Last Name" />

        <TextInput
          name="height"
          control={control}
          keyboardType="number-pad"
          placeholder="Height" />

        <TextInput
          name="weight"
          control={control}
          keyboardType="number-pad"
          placeholder="Weight" />

        <SelectField
          name="membershipPaymentCycle"
          SelectOptions={MEMBERSHIP_CYCLE}
          placeholder="Membership Cycle"
          setValue={setValue}
          control={control} />

        <Divider />

        <SelectField
          name="workoutShift"
          SelectOptions={WORKOUT_SHIFT}
          placeholder="Workout Shift"
          setValue={setValue}
          control={control} />

        <Divider />

        <DatePicker
          name="membershipStartDate"
          control={control}
          setValue={setValue}
        />

        <TextInput
          name="membershipFees"
          placeholder='Membership Fees'
          control={control}
          keyboardType="number-pad" />

        <Button onPress={handleSubmit(onSubmit)} >Add New Member </Button>
      </View>
    </View>
  )
}
