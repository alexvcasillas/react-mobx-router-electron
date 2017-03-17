import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/works'}>My Works</Link>
        <Link to={'/user'}>User</Link>
      </div>
    );
  }
}

export default Header;
