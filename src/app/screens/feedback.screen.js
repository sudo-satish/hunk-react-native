import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import FeedbackComponent from '../components/FeedbackComponent';

export const FeedbackScreen = () => {
  return (
    <NavigatedWrapper>
      <FeedbackComponent />
    </NavigatedWrapper>
  )
}