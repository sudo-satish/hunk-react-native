import React from 'react';
import {Provider} from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import {AppNavigator} from './src/app/screens/navigation.screen';
import FlashMessage from 'react-native-flash-message';
import {store} from './src/app/redux/store';

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator/>
    </ApplicationProvider>
    <FlashMessage position="top" />
  </Provider>
);

export default App;