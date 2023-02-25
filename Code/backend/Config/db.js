const { urlencoded } = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connect = mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: true,
		});
        console.log("mongoose working".green.bold);
	} catch (error) {
		console.log(`Error Message :  ${error.message}`);
	}
};
module.exports = connectDB;
