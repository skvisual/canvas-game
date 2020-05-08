const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
//bring path in


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import routes
const promptsRoute = require("./routes/prompts");
app.use("/prompts", promptsRoute);

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

// Middlewares
// app.use(auth); authentication will go here.

// routes
app.get("/", (req, res) => {
  res.sendFile("/canvas-game/client/public/index.html");
});

// connect to DB
mongoose.connect("mongodb://localhost/cluster0", { useNewUrlParser: true });

mongoose.connection.on("error", err => {
  console.log(err)
})
// app.post;

// Start listening
app.listen(3000);
