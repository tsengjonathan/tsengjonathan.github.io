import React from 'react';
import { FileText, GitHub, Linkedin } from 'react-feather';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar title="Home" />
      <h1 id="name" className="text-monospace text-uppercase text-white text-center">
        Jonathan Tseng
      </h1>
      <div className="d-flex justify-content-center">
        <div className="icon">
          <a href="https://github.com/tsengjonathan">
            <GitHub color="white" />
          </a>
        </div>
        <div className="icon">
          <a href="https://linkedin.com/in/tsengjonathan">
            <Linkedin color="white" />
          </a>
        </div>
        <div className="icon">
          <a href="https://tsengjonathan.com">
            <FileText color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
