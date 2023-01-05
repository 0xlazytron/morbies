const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./db");
const api = require("./api");
const app = express();
// import path
const path = require('path');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serves static markup to root folder index.html
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static("public/images"));
// use static index.html
app.use(express.static('public/uploads'));
app.use(cors());
app.use(express.json());

app.use("/api", api);

module.exports = app;