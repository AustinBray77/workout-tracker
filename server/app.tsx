require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 443;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlPArser: true });

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB connection established!");
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

app.post("/login", (req, res) => {});
