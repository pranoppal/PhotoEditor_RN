import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {colorWhite} from '../../utils/colors';

import styles from './uploadImageScreen.style';

const UploadImageScreen = props => {
  const imageDetails = props?.route?.params?.imageDetails;

  const [uploadButtonText, setUploadButtonText] = useState('Upload');
  const [uploadStarted, setUploadStarted] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  const uploadFile = async () => {
    setUploadButtonText('Uploading');
    setUploadStarted(true);
    let ret = await RNFetchBlob.fetch(
      'POST',
      'http://192.168.193.82:8082/upload-pic', //TODO: please change your WiFi IP address
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'file',
          filename:
            Date.now() +
            '.' +
            imageDetails?.mime?.substring(imageDetails?.mime?.indexOf('/') + 1),
          type: imageDetails?.mime,
          data: RNFetchBlob.wrap(imageDetails?.path),
        },
      ],
    );
    console.log('res', ret.data);
    if (ret?.data) {
      setProcessing(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitleLabel}>Frame Image</Text>
      </View>
      <View style={styles.descContainer}>
        <Image
          source={require('../../assets/upload.jpg')}
          style={styles.uploadImageStyle}
        />
        <Text style={styles.descLabel}>
          Add your favourite frame to the image
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={uploadFile} style={styles.buttonStyle}>
          <Text style={styles.buttonLabelStyle}>{uploadButtonText}</Text>
          {uploadStarted && <ActivityIndicator color={colorWhite} size={24} />}
        </TouchableOpacity>
      </View>

      {/* {isProcessing && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={uploadFile} style={styles.buttonStyle}>
            <Text style={styles.buttonLabelStyle}>Download Image</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

export default React.memo(UploadImageScreen);
