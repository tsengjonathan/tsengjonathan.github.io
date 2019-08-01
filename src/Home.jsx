import React from 'react';
import { FileText, GitHub, Linkedin } from 'react-feather';
import resume from './resume.pdf';
import Title from './components/Title';

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
