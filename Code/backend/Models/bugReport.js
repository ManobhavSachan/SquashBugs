const mongoose = require("mongoose");

const bugReport = mongoose.Schema(
	{
		title: { type: String, required: true },
		project: { type: String, required: true },
		location: { type: String, required: true },
		threat: { type: String, required: true },
		date: { type: Date },

		// title: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		// content: { type: String, trim: true },
		// chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
		// readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("bugReport", bugReport);

