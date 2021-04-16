import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';


import styles from './pickerScreen.style';

const pickerScreen = props => {
  const handleOpenPicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = res => {
      console.log('res', res);
      const cropperOptions = {
        path: res.uri,
      }
      ImagePicker.openCropper(cropperOptions ).then(image => {
        console.log(image);
        props?.navigation?.navigate('UploadImageScreen', {
          imageDetails: image,
        });
      });
      
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
        <TouchableOpacity onPress={handleOpenPicker} style={styles.buttonStyle}>
          <Text style={styles.buttonLabelStyle}>Select Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(pickerScreen);
