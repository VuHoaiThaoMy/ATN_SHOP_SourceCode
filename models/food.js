const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowecase: true,
    },
    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw(new Error("Negative calories !"));
        },
    }
});
const Food = mongoose.model("Food", FoodSchema,"Food");

///
module.exports = Food;
