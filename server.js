const express = require("express");
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/api")
const path = require('path');
const expressSession = require("express-session");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv").config();

// session config
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
}

const authorizeAccessToken = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://localhost:3000/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.CLIENT_ORIGIN_URL,
  algorithms: ["RS256"]
});

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

app.get('/api/messages/protected-message', authorizeAccessToken, async (req, res) => {
    try {
        res.json({ message: `private endpoint` })
    } catch (err) {
        res.json({ message: `failed` })
    }
})

app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
