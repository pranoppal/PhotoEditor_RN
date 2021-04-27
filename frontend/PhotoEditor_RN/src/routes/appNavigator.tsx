import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PickerScreen, UploadImageScreen} from '../modules';
// import { MainNavigator } from './mainNavigator'

const AppStack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <AppStack.Navigator headerMode="none">
    {/* <AppStack.Screen name="MainNavigator" component={MainNavigator} /> */}
    <AppStack.Screen name="PickerScreen" component={PickerScreen} />
    <AppStack.Screen name="UploadImageScreen" component={UploadImageScreen} />
  </AppStack.Navigator>
);
