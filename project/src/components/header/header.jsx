import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import HeaderLogged from '../header-logged/header-logged';
import HeaderUnlogged from '../header-unlogged/header-unlogged';

function Header({authorizationStatus}) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.AUTH ? <HeaderLogged /> : <HeaderUnlogged />}
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps, null)(Header);
