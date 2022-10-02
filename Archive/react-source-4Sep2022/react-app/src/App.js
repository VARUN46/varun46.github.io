import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./commons/Navigation";
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

import {
  HashRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <>
    <Router>
      <Navigation/>
    <Switch>
      <Route exact path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact/>} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
