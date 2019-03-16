const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// import mongoose 
const mongoose = require('mongoose');
const db = require('./models');


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to mongoose 
mongoose.connect("mongodb://localhost/jeopardy", { useNewUrlParser: true });
// try and create a 'game' 

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
