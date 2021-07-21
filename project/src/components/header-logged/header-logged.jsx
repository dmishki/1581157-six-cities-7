import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/api-actions';
import { getUserData } from '../../store/data/selectors';

function HeaderLogged() {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

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
          <span className="header__signout" onClick={() => {
            dispatch(logout());
          }}
          >Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderLogged;
