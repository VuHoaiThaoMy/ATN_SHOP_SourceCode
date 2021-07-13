const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables
const userName = "dbThaoMy";
const userPassword = "GLZkVYPM2rw4kagd";
const dbName = "ATN_SHOP";
const dbTable = "Customers";
const url = "mongodb+srv://" + userName + ":" + userPassword + "@cluster0.bfttv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/// --- Kết nối DataBase
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// useFindAndModify: false,

/// --- Catch EVENTs
const xdb = mongoose.connection;
xdb.on('error', err => {
    console.log("\n Error ", err);
});

xdb.once('open', () => {
    console.log("\n Database connected ", url);
});