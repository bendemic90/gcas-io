const express = require("express");
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/api")
const path = require('path');
const expressSession = require("express-session");
require("dotenv").config();

// session config
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
if (app.get("env") === "production") {
  session.cookie.secure = true;
}

app.use(expressSession(session));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gcas-clients', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
