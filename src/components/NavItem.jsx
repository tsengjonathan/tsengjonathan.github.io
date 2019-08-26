import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

function NavItem({
  href, active, name, visible,
}) {
  if (!visible) {
    return null;
  }

  return (
    <Nav.Item>
      <Nav.Link href={href} active={active} className="text-monospace text-uppercase">
        {name}
      </Nav.Link>
    </Nav.Item>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string,
  visible: PropTypes.bool,
};

NavItem.defaultProps = {
  href: '#',
  active: false,
  name: '?',
  visible: true,
};

export default NavItem;
