const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

//configuring the dotenv
dotenv.config();

//for json data
app.use(express.json());

//mongoose connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

//defining the routes in index.js
app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("backend running");
});
