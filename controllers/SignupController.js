var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getSignup);


function getSignup(req, res) {
    res.render("signup", { title: "Signup Page" });
    //res.sendFile(__dirname + "/view/signup.html");
}

/// --- EXports
module.exports = router;