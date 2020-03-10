import React from 'react';
import {Icon} from '@ui-kitten/components';

export const IconWrapper = (style, iconName) => (
  <Icon {...style} name={iconName} />
);

export const getIcon = (iconName) => (style) => IconWrapper(style, iconName);
