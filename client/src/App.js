import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './components/Clients';
import MainMenu from './components/MainMenu';
import ProtectedRoute from './components/ProtectedRoute'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import ViewClients from "./components/ViewClients"

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
    <div className="App">
      <Header />
      <Route exact path="/" component={Profile} />
      <ProtectedRoute exact path="/clients" component={Clients} />
      <ProtectedRoute exact path="/mainmenu" component={MainMenu} />
      <ProtectedRoute exact path="/clients/view" component={ViewClients} />
      <Footer />
    </div>
    </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
