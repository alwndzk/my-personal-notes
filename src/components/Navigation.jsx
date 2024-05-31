import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Navigation({ logout, name }) {
  return (
    <React.Fragment>
      <h1>
        <Link to='/'>My Personal Notes</Link>
      </h1>
      {name ? (
        <div>
          <button className='button-logout' onClick={logout} title='Logout'>
            {name} <FiLogOut />
          </button>
        </div>
      ) : null}
      <img src={logo} alt='Logo' />
    </React.Fragment>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string, // catatanku : (isRequired) dapat menjadi undefined
};

Navigation.defaultProps = {
  name: '', // catatanku : nilai default jika prop name adalah undefined
};

export default Navigation;
