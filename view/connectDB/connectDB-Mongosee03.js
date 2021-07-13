const mongoose = require("mongoose");
const foodModel = require("../../models/food");
/// Thông tin Database Collection / Tables
const userName = "dbThaoMy";
const userPassword = "GLZkVYPM2rw4kagd";
const dbName = "ATN_SHOP";
const dbTable = "Customers";
const url = "mongodb+srv://" + userName + ":" + userPassword + "@cluster0.bfttv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// kết nối MongoDB bằng LIB Mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async(err) => {
    if (err) {
        console.log("\n Error !", err);
    } else {
        console.log("\n DB connected !");

        var foods = await foodModel.find({});
        console.log(foods);
    }
});