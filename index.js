const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute=require("./routes/user")
const AuthRoute=require("./routes/authontification")
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to DataBase successfuly!!"))
  .catch((err) => {
    console.log("failed to connect to data base !!");
  });

  app.use(express.json());
app.use("/api/user", userRoute);

app.use("/api/auth",AuthRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backebd server is runing ");
});
