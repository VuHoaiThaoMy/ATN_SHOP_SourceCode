const mongoose = require("mongoose");
const foodModel = require("./models/food");
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
}, (err) => {
    if (err) {
        console.log("\n Error !", err);
    } else {
        console.log("\n DB connected !");

        var x = new foodModel({ name: "kem socola", calories: 200 });
        x.save((err) => {
            console.log("\ERR ", err);
        });

        //const  foods = foodModel.find({}).toArray();
    }
});