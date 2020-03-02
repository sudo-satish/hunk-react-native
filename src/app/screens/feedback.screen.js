import React from 'react';
import {BlankScreen} from './blank.screen';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';

export const FeedbackScreen = () => {
  return (
    <NavigatedWrapper>
      <BlankScreen title="Feedback Screen" />
    </NavigatedWrapper>
  )
}