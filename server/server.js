//imports
const express = require("express");
const path = require("path");

//Path and Env variables Setup
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");


//Express consts
const app = express();

// Express & ejs Setup
app.use(express.static(publicDirectoryPath));

//Server start
app.listen(port, console.log("Server running at port " + port));