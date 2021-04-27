import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './pickerScreen.style';

const pickerScreen = props => {
  const handleOpenPicker = () => {
    ImagePicker.openPicker({mediaType: 'photo'}).then(pickedImage => {
      const cropperOptions = {
        path: pickedImage.path,
      };
      ImagePicker.openCropper(cropperOptions).then(croppedImage => {
        props?.navigation?.navigate('UploadImageScreen', {
          imageDetails: croppedImage,
        });
      });
    });
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
