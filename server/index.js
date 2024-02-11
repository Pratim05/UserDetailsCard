const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();
const { AdminListModel } = require("./Database.js");

const UserRoutes = require("./routes/UserRoutes.js");
const UserDataRoutes = require("./routes/UserDataRoutes.js");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", UserRoutes);
app.use("/fetch",UserDataRoutes)


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`);
  });
  