import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { connect } from 'react-redux';
import { logout } from '../../store/api-actions';
import PropTypes from 'prop-types';

function HeaderLogged(props) {
  const { userData, signOut } = props;

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userData.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout" onClick={signOut}>Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

HeaderLogged.propTypes = {
  userData: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
  },
});

export {HeaderLogged};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogged);
