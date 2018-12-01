const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, required: true, max: 255 },
	email: { type: String, required: true, max: 255 },
	password: { type: String, required: true, max: 255 },
	finishedTasks: { type: Number, required: false }
});

module.exports = mongoose.model("User", UserSchema);