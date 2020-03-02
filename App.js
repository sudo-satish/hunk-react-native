import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import {AppNavigator} from './src/app/screens/navigation.screen';
import FlashMessage from 'react-native-flash-message';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator/>
    </ApplicationProvider>
    <FlashMessage position="top" />
  </React.Fragment>
);

export default App;