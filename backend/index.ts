import express from 'express'
import multer from 'multer'
import path from 'path'

var router = express.Router();
const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server, hello"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.get('/test', (req,res) => {
    res.send('got it')
})

app.post('/upload-pic', (req, res) => {
    let upload = multer({ storage: storage }).single('profile_pic');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        // if (req?.fileValidationError) {
        //     return res.send(req?.fileValidationError);
        // }
         if (!req?.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

    });
});

module.exports = router

