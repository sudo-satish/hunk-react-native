import {get} from 'lodash';

export const getPlainText = args => {
  return {
    value: args[0].nativeEvent.text,
  };
};

export const normalize = (list, keyPath='_id') => list.reduce((listObject, listItem) => {
  const key = get(listItem, keyPath);
  listObject[key] = listItem;
  return listObject;
}, {});

export const deNormalize = listObject => Reflect.ownKeys(listObject).map(key => listObject[key]);
