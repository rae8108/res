import React from "react";
import "./App.css";
import Resolutions from "./Resolutions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <small>
          {" "}
          <div className="container">
            <Resolutions />
            <footer className="text-center">
              This project was created by Rayan and is{" "}
              <a
                href="https://github.com/rae8108/res"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on Github
              </a>
            </footer>
          </div>
        </small>
      </header>
    </div>
  );
}

export default App;
