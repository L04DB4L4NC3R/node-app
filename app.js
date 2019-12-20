const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect((process.env.MONGODB_URI))
.then(() => {
	console.log("Connected");
}).catch(err => {
	console.error(err);
})
mongoose.connection
.once("connection", () => {
	console.log("Connected to MongoDB");
}).on("error", () => {
	console.log("Error connecting to MongoDB");
})

app.get("/", (req, res, next) => {
	res.end("Hello, world!");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
