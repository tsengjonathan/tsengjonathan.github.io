import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand text-monospace text-uppercase">{title}</span>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: '?',
};

export default Navbar;
