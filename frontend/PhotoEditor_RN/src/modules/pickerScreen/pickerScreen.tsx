import React from 'react';
import {View, Text, Image} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLabel}>Photo Picker</Text>
      </View>
      <View style={styles.descContainer}>
        <Image
          source={require('../../assets/choose.jpg')}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.descLabel}>Pick your favourite photo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleOpenPicker}
          labelStyle={styles.buttonLabelStyle}
          style={styles.buttonStyle}
          uppercase={false}
          mode="contained">
          Select Image
        </Button>
      </View>
    </View>
  );
};

export default React.memo(pickerScreen);
