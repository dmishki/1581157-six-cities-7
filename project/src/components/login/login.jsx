import React, {useState} from 'react';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/api-actions';
import { getCity } from '../../store/cities/selectors';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (evt) => setEmail(String(evt.target.value).trim());
  const onChangePassword = (evt) => setPassword(String(evt.target.value).trim());

  const dispatch = useDispatch();
  const city = useSelector(getCity);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: email,
      password: password,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={onChangeEmail} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={onChangePassword} />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={!(email && password)} >Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{city.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
