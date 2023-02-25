const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { generateToken } = require("../Config/generateToken");
const User = require("../Models/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
	const { name, email, password, pic, role } = req.body;

	if (!name || !email || !password || !role) {
		res.status(400);
		throw new Error("Please Enter required fields");
	}
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("user already exsists");
	}
	const user = await User.create({
		name,
		email,
		password,
		pic,
		role,
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			pic: user.pic,
			role: user.role,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Failed to create the user");
	}
});

const authUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.comparePassword(password))) {
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			pic: user.pic,
			role: user.role,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("User Does't exists");
	}
});

module.exports = { registerUser, authUser };
