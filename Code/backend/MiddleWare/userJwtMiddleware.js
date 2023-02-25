// const jwt = require("jsonwebtoken");
// // const User = require("../models/userModel.js");
// const asyncHandler = require("express-async-handler");

// function protect(req, res, next) {
// 	const authHeader = req.headers["authorization"];
// 	const token = authHeader && authHeader.split(" ")[1];
// 	if (token == null) return res.sendStatus(401);

// 	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
// 		console.log(err);
// 		if (err) return res.sendStatus(403);
// 		req.user = user;
// 		next();
// 	});
// }

// module.exports = { protect };

// const protect = asyncHandler(async (req, res, next) => {
// 	let token;

// 	if (
// 		req.headers.authorization &&
// 		req.headers.authorization.startsWith("Bearer")
// 	) {
// 		try {
// 			token = req.headers.authorization.split(" ")[1];

// 			//decodes token id
// 			const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             console.log(decoded);

// 			// const user = await User.findById(decoded.id);

// 			next();
// 		} catch (error) {
// 			res.status(401);
// 			throw new Error("Not authorized, token failed");
// 		}
// 	}

// 	if (!token) {
// 		res.status(401);
// 		throw new Error("Not authorized, no token");
// 	}
// });


