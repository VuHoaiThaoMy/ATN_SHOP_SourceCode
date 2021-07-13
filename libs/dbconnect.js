const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
const userName = "dbThaoMy";
const userPassword = "GLZkVYPM2rw4kagd";

const dbName = "ATN_SHOP";

const url = "mongodb+srv://" + userName + ":" + userPassword + "@cluster0.bfttv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}