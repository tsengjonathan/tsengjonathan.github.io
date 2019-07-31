import React from 'react';
import { FileText, GitHub, Linkedin } from 'react-feather';
import Navbar from './components/Navbar';
import Title from './components/Title';
import './App.css';
import resume from './resume.pdf';

function App() {
  return (
    <div className="container">
      <Navbar title="Home" />
      <div className="body">
        <Title />
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
            <a href={resume}>
              <FileText color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
