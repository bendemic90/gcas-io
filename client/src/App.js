import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './components/Clients';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Profile} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/mainmenu" component={MainMenu} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
