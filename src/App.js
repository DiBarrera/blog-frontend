import React from "react";
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1> Web Personal - Client <span>Diego</span></h1>
      <h2>Proyecto</h2>
      <h2>Estamos en App.js</h2>
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </div>
  )
}

export default App;
