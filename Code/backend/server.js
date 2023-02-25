const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");
const bugRouter = require("./Routes/bugRouter");
// const bugReport = require("./Models/bugReport");
// const User = require("./Models/userModel");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to Except JSON DATA

app.get("/", (req, res) => {
	res.send("Hello World");
});
app.use("/api/user", userRoutes);
app.use("/api/bugs", bugRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${PORT}`.yellow.bold));
