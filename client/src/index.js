import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'
require("dotenv").config();

const GCASdomain = process.env.REACT_APP_AUTH0_DOMAIN
const GCASclient = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
<Auth0Provider
    domain={GCASdomain}
    clientId={GCASclient}
    redirectUri={window.location.origin}
>
<App />
</Auth0Provider>, 
document.getElementById("root"));
