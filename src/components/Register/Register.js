import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { mainApi } from "../../utils/MainApi";
import React from "react";

function Register(props) {
  const [serverError, setServerError] = React.useState('');
  const {values, handleChange, errors, isValid, setIsValid, resetForm} = useFormAndValidation();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi.signup({
      name: values['input-reg-name'],
      email: values['input-reg-email'],
      password: values['input-reg-password'],
    })
      .then((res) => {
        resetForm();
        props.handleLogIn()
        navigate('/movies');
      })
      .catch((err) => {
        setIsValid(false);
        setServerError(err);
        console.log(err);
      })
  }

  return (
    <main className="auth">
      <div className="auth__wrapper">
        <Link className="auth__logo" to='/'><Logo /></Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form" noValidate onSubmit={handleSubmit} action="#" method="post" name='register-form' id='register-form'>
          <div className="auth__container">
            <div className="auth__field">
              <label htmlFor="reg-name" className="auth__input-placeholder">Имя</label>
              <input placeholder='Ваше имя' required autoComplete="off" minLength={2} maxLength={30} value={values['input-reg-name'] === undefined ? '' : values['input-reg-name']} name='input-reg-name' onChange={handleChange} type="text" id="reg-name" className={`${errors['input-reg-name'] ? 'auth__input_error' : ''} auth__input`} />
              <p className="auth__error">{errors['input-reg-name']}</p>
            </div>
            <div className="auth__field">
              <label htmlFor="reg-email" className="auth__input-placeholder">E-mail</label>
              <input placeholder='Ваш e-mail' required autoComplete="off" value={values['input-reg-email'] === undefined ? '' : values['input-reg-email']} onChange={handleChange} name="input-reg-email" type="email" id="reg-email" className={`${errors['input-reg-email'] ? 'auth__input_error' : ''} auth__input`}></input>
              <p className="auth__error">{errors['input-reg-email']}</p>
            </div>
            <div className="auth__field">
              <label htmlFor="reg-password" className="auth__input-placeholder">Пароль</label>
              <input placeholder="Ваш пароль" required type="password" minLength={6} maxLength={30} value={values['input-reg-password'] === undefined ? '' : values['input-reg-password']} onChange={handleChange} name="input-reg-password" autoComplete="off" id="reg-password" className={`${errors['input-reg-password'] ? 'auth__input_error' : ''} auth__input`} />
              <p className="auth__error">{errors['input-reg-password']}</p>
            </div>
          </div>
          <div className="auth__container">
            <p className="auth__server-error">{serverError}</p>
            <button type="submit" disabled={!isValid} className="auth__button zero-button">Зарегистрироваться</button>
            <div className="auth__flex-wrapper">
              <p className="auth__caption">Уже зарегистрированы?</p>
              <Link to='/signin' className="auth__link zero-link">Войти</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
};

export default Register;
