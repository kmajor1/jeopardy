const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// import mongoose 
const mongoose = require('mongoose');

// import models for ORM 
const db = require('./models');

// create express routes 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

// initiate the db

// connect to mongoose 
mongoose.connect("mongodb://localhost/jeopardy", { useNewUrlParser: true });
// try and create a category 
db.Category.create({jServiceID: 11510, category: 'test'})
  .then(function(response){
    console.log(response)
  })
  .catch(function(err){
    console.log(err)
  })
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
