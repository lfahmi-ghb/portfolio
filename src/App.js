import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Head from "./components/Head";
import Contact from "./components/Contact"
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <div id="lara-page">
        <div className="container-wrap">
          <Head />
          <Home />
          <Technologies />
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
