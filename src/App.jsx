import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="container">
      <Navbar title="Home" />
      <div className="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
