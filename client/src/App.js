import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { HashRouter, Route } from 'react-router-dom'
import Clients from './components/Clients';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <Route exact path="/" component={Profile} />
      <Route exact path="/clients" component={Clients} />
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
