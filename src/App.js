import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Head from "./components/Head";
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <div id="lara-page">
        <div className="container-wrap">
          <Head />
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
