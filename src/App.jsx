import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import News from './news';
import NavItem from './components/NavItem';

function App() {
  return (
    <Container>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavItem href="/" active name="Home" />
            <NavItem href="/news" name="News" />
          </Nav>
        </Navbar>

        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
        </div>
      </Router>
    </Container>
  );
}

export default App;
