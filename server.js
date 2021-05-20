const express = require("express");
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/api")
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv").config();

const authorizeAccessToken = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: [ process.env.AUTH0_DOMAIN ],
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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gcas-clients', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.get('/api/messages/protected-message', authorizeAccessToken, async (req, res) => {
    try {
        console.log(req.user)
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
