import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, LogBox} from 'react-native';
import {AppNavigator} from './src/routes/appNavigator';

export default function App() {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Suspense fallback={<ActivityIndicator />}>
        <AppNavigator />
      </Suspense>
    </NavigationContainer>
  );
}
