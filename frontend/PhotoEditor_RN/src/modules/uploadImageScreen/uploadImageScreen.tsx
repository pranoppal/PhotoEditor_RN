import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob'

import styles from './uploadImageScreen.style';

const uploadImageScreen = props => {
  const imageDetails = props?.route?.params?.imageDetails;
  
  const uploadFile = async () => {
    let ret = await RNFetchBlob.fetch(
        'POST',
        'http://192.168.43.134:8082/upload-pic',
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'file',
            filename: Date.now() + "." + imageDetails?.mime?.substring(imageDetails?.mime?.indexOf('/')+1),
            type: imageDetails?.mime,
            data: RNFetchBlob.wrap(imageDetails?.path),
          },
        ],
      );
      console.log('res',ret.data)

  };

  return (
    <View>
      <Text>Add your favourite frame to the image</Text>
      <Button onPress={uploadFile}>Upload</Button>
    </View>
  );
};

export default React.memo(uploadImageScreen);
