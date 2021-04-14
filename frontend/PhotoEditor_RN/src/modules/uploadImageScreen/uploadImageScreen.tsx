import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import styles from './uploadImageScreen.style';

const uploadImageScreen = props => {
  const imageDetails = props?.route?.params?.imageDetails;
  // {"fileName": "rn_image_picker_lib_temp_d0aa56a9-312d-48d8-961c-da6aa5e766d7.jpg",
  // "fileSize": 1637254,
  // "height": 3456,
  // "type": "image/jpeg",
  // "uri": "file:///data/user/0/com.photoeditor_rn/cache/rn_image_picker_lib_temp_d0aa56a9-312d-48d8-961c-da6aa5e766d7.jpg",
  // "width": 4608}
  const uploadFile = async () => {
    var formData = new FormData();
    formData.append('fileSize', imageDetails?.fileSize);
    formData.append('height', imageDetails?.height);
    formData.append('file', {
      uri: imageDetails?.uri,
      type: imageDetails?.type,
      name: imageDetails?.fileName,
    });
    formData.append('width', imageDetails?.width);

    const res = await axios.post('https://photoeditor-backend.herokuapp.com/upload-pic', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('res',res)
  };

  return (
    <View>
      <Text>asdf</Text>
      <Button onPress={uploadFile}>Upload</Button>
    </View>
  );
};

export default React.memo(uploadImageScreen);
