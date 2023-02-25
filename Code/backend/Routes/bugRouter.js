const express = require("express");
const { stringify } = require("nodemon/lib/utils");
const router = express.Router();
const bugReport = require("../Models/bugReport");

const jwt = require("jsonwebtoken");

console.log(ADMIN);

//creating one
router.post("/", async (req, res) => {
	const bug = new bugReport({
		title: req.body.title,
		project: req.body.project,
		location: req.body.location,
		threat: req.body.threat,
		date: req.body.date,
	});
	try {
		const newbug = await bug.save();
		res.status(201).json(newbug);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//getting all
router.get("/", async (req, res) => {
	try {
		const bugs = await bugReport.find();
		res.json(bugs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//getting single bug
router.get("/:bugId", setBug, (req, res) => {
	res.json(res.bug);
});

// //updating one
// router.patch("/admin/:bugId", authRole(ADMIN), (req, res) => {});

//Deleting one
router.delete("/admin/:bugId", async (req, res) => {
    try {
			await res.bugReport.remove();
			res.json({ message: "Deleted bug" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
});

async function setBug(req, res, next) {
	let bug;
	try {
		bug = await bugReport.findById(req.params.bugId);
		if (bug == null) {
			return res.status(404).json({ message: "cannot find bug" });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}

	res.bug = bug;
	next();
}

// function protect(req, res, next) {
// 	const authHeader = req.headers["authorization"];
// 	const token = authHeader && authHeader.split(" ")[1];
// 	if (token == null) return res.sendStatus(401);

// 	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// 		console.log(err);
// 		if (err) return res.sendStatus(403);
// 		req.user = user;
// 		next();
// 	});
// }

module.exports = router;
