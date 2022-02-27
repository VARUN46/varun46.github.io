import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./commons/Navigation";
import Home from './pages/Home';

function App() {
  return (
      <div>
    <Navigation/>
    <Home/>
    </div>
  );
}

export default App;
