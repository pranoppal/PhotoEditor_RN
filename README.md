
This app helps in adding frame to your image. <br/>

**Steps**: <br/>
1.Pick your photo from local gallery. <br/>
2.Edit it based on your requirements.<br/>
3.Upload the image to backend <br/>
4.Retreive your output image in backend\images folder.<br/>

Steps to run the frontend mobile app:
```
cd frontend\PhotoEditor_RN
```

Install dependencies:
```
yarn add
```

Run in android device:
```
yarn android
```

Run in ios device
```
yarn ios
```

Steps to run the backend:
```
cd backend
```

Install dependencies:
```
yarn add
```

Start the server:
```
yarn start
```


**TODO**:
In order to generate the output image locally you need to host the backend in your WiFi/LAN IP address.
```
ipconfig
```
1.Search for IPV4 address of your WiFi/LAN network. <br/>
2.Paste the IP address in line 9:19 of backend\index.ts. <br/>
3.Change the Network call url in UploadImageScreen.tsx at line 26:8 <br/>

