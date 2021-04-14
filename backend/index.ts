import express from 'express'
import multer from 'multer'
import fs from 'fs'

var router = express.Router();
const app = express();
app.get("/", (req, res) => res.send("Express + TypeScript Server, hello"));
app.listen(8080, '192.168.43.134')

const storage = multer.diskStorage({
    destination(req, file, callback) {
        fs.mkdirSync('./images')
      callback(null, './images');
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });

  const upload = multer({ storage });

app.post('/upload-pic', upload.single('file'), (req, res) => {

    const formdata= req.body
    console.log('formdata',formdata)
    console.log('req files',req.files)

    console.log('req file',req.file)
});

module.exports = router

