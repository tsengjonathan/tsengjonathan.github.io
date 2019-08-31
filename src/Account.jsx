import React, { useState } from 'react';
import { User, LogOut } from 'react-feather';
import Cookies from 'js-cookie';
import {
  Button, Form, InputGroup, Modal, Nav,
} from 'react-bootstrap';

function Account() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [validated, setValidated] = useState(false);
  const handleValidate = () => setValidated(true);

  const [validForm, setValidForm] = useState(false);
  const handleValidForm = () => setValidForm(true);
  const handleInvalidForm = () => setValidForm(false);

  const submitForm = () => {
    const data = {
      username: inputUsername || '',
      password: inputPassword || '',
    };

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(handleValidForm)
      .then(handleClose)
      .catch(() => {
        handleInvalidForm();
      })
      .finally(() => {
        setValidated(null);
        handleValidate();
      });
  };

  return (
    <>
      <Nav className="justify-content-end">
        <button className="icon-button" type="button" onClick={handleOpen}>
          <User color="white" size={20} />
        </button>
        <button className={Cookies.get('connect.sid') ? 'icon-button' : 'hidden-button'} type="button">
          <LogOut color="white" size={20} />
        </button>
      </Nav>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                isValid={validated && validForm}
                isInvalid={validated && !validForm}
                onChange={e => setInputUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type="password"
                  isValid={validated && validForm}
                  isInvalid={validated && !validForm}
                  onChange={e => setInputPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">Incorrect username or password</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={submitForm}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Account;
