import React from 'react';
import {View, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native-paper';

import styles from './pickerScreen.style';

const pickerScreen = () => {
  const handleOpenPicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = res => {
      console.log('res', res);
    };

    launchImageLibrary(options, callback);
  };

  return (
    <View>
      <Text>asdfsdf</Text>
      <Button onPress={handleOpenPicker}>Select Image</Button>
    </View>
  );
};

export default React.memo(pickerScreen);
