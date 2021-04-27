import express from "express";
import multer from "multer";
import fs from "fs";
import Sharp from "sharp";

var router = express.Router();
const app = express();
app.get("/", (req, res) => res.send("Express + TypeScript Server, hello"));
app.listen(8082, "192.168.193.82"); //TODO: please change your WiFi IP address

const storage = multer.diskStorage({
  destination(req, file, callback) {
    if (!fs.existsSync("./images")) fs.mkdirSync("./images");
    callback(null, "./images");
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload-pic", upload.single("file"), (req, res) => {
  addFrameToImage(req.file, res);
});

const addFrameToImage = async (file, res) => {
  const path = "./images/";

  console.log("file", file);
  //get dimensions of input image
  const getDimen = await Sharp(path + file?.originalname)
    .withMetadata()
    .toFile(path + "output-with-metadata.png");

  console.log("widt", getDimen.width);
  // resize our frame with the above dimens
  const resizeImage = await Sharp(path + "frame.png")
    .resize(getDimen.width + 100, getDimen.height+100, {
      fit:'fill'
    })
    .toFile(path + "new_frame.png");

  if (resizeImage?.size > 0) {
    //add frame with original image
    const mergeImages = await Sharp(path + "new_frame.png")
      .composite([
        {
          input: path + file?.originalname,
          gravity: Sharp.gravity.center,
          blend: "dest-over",
        },
      ])
      .toFile(path + "output.png");
    res.sendFile(__dirname + "/images/output.png");
  } else res.sendStatus(500);
};
module.exports = router;
