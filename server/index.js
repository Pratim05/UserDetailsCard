const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`);
  });
  