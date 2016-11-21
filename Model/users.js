var mongoose = require("mongoose");

mongoose.connect("mongodb://10.80.16.136/Jusers");


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
});


var classSchema = new mongoose.Schema({
    className: String,
    des: String,
    price: String,
    oldPrice: String,
    pic: String,
    type: String
});


module.exports = {
	users: mongoose.model("users",userSchema,"users"),
	wokao: mongoose.model("class",classSchema,"class")
}