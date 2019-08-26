import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Account from './Account';
import NavItem from './components/NavItem';

function App() {
  const [user, setUser] = useState({
    loggedIn: false,
    username: null,
    isAdmin: false,
    createdAt: null,
    updatedAt: null,
  });

  const setUserJson = response => setUser({
    loggedIn: true,
    username: response.username,
    isAdmin: response.isAdmin,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt,
  });

  return (
    <Container>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavItem href="/" active name="Home" />
            <NavItem href="/news" name="News" visible={user.loggedIn} />
          </Nav>
          <Account setUser={setUserJson} />
        </Navbar>

        <div className="body">
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    </Container>
  );
}

export default App;
