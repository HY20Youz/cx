const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { notFound, errorHandler } = require("./middlewares/errorHandler");
const { logger } = require("./middlewares/logger");

// Init App
const app = express();
mongoose.set("strictQuery", false);

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger); // A middleware to show the request method, host & original URL

app.use(express.static(path.join(__dirname, "postImages")));
app.use(express.static(path.join(__dirname, "usersImages")));
app.use(express.static(path.join(__dirname, "bankImages")));

// Routes
app.use("/api/auth", require("./routes/auth")); // auth path
app.use("/api/users", require("./routes/user")); // user path
app.use('/api/Things',require('./routes/things'))
// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Running The Server
const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://hass:Youzghadli%40123@cluster0.fhefpqk.mongodb.net/");
    app.listen(PORT, () =>
      console.log(`Server is running at PORT: ${PORT}`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

start();
