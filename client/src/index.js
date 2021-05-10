import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
<Auth0Provider
    domain="dev-pr150q4k.au.auth0.com"
    clientId="LcCkAZdcgvLLbZ4qrADpaZNBu1UfRDfP"
    redirectUri={window.location.origin}
>
<App />
</Auth0Provider>, 
document.getElementById("root"));
