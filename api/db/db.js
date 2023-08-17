const mongoose = require("mongoose");
require("../model/provider.model");

// const mongodbUri = "mongodb://127.0.0.1:27017/providers";
const mongodbUri =
  "mongodb+srv://Nzarite:2002@hariomk.mhcxfaq.mongodb.net/hariomk?retryWrites=true&w=majority";
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
