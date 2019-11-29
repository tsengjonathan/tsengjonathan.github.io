import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import NavItem from './components/NavItem';

function App() {
  const { location } = window;
  const { pathname } = location;
  return (
    <Container>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavItem href="/" active={pathname === '/'} name="Home" />
            <NavItem href="/sudoku" name="Sudoku" />
          </Nav>
        </Navbar>

        <div className="body">
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    </Container>
  );
}

export default App;
