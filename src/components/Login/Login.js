import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import React from 'react';
import { mainApi } from '../../utils/MainApi';

function Login(props) {
  const [serverError, setServerError] = React.useState('');
  const {values, handleChange, errors, isValid, setIsValid, resetForm, setErrors} = useFormAndValidation();
  const [inputsBlocked, setInputsBlocked] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    setInputsBlocked(true);
    evt.preventDefault();
    mainApi.signin({
      email: values['input-login-email'],
      password: values['input-login-password'],
    })
      .then((res) => {
        resetForm();
        props.handleLogIn();
        navigate('/movies');
      })
      .catch((err) => {
        setIsValid(false);
        setServerError(err);
        console.log(err);
      })
      .finally(() => {
        setInputsBlocked(false);
      })
  }

  React.useEffect(() => {
    setErrors({...errors, ['input-login-email']: ''});
    if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(values['input-login-email']) && values['input-login-email'] !== undefined) {
      setIsValid(false);
      setErrors({...errors, ['input-login-email']: 'Некорректно введен Emaill'});
    }
  }, [values['input-login-email']])

  return (
    <section className="auth">
    <div className="auth__wrapper">
      <Link to='/'><Logo /></Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form onSubmit={handleSubmit} className="auth__form" action="#" method="post" name='register-form' id='register-form'>
        <div className="auth__container">
          <div className="auth__field">
            <label htmlFor="login-email" className="auth__input-placeholder">E-mail</label>
            <input placeholder='Ваш e-mail' disabled={inputsBlocked} className={`${errors['input-login-email'] ? 'auth__input_error' : ''} auth__input`} value={values['input-login-email'] === undefined ? '' : values['input-login-email']} onChange={handleChange} required autoComplete="off" type="email" id="login-email" name='input-login-email' />
            <p className="auth__error">{errors['input-login-email']}</p>
          </div>
          <div className="auth__field">
            <label htmlFor="login-password" className="auth__input-placeholder">Пароль</label>
            <input placeholder='Ваш пароль' disabled={inputsBlocked} className={`${errors['input-login-password'] ? 'auth__input_error' : ''} auth__input`} value={values['input-login-password'] === undefined ? '' : values['input-login-password']} onChange={handleChange} required minLength={6} maxLength={30} type="password" name='input-login-password' autoComplete="off" id="login-password" />
            <p className="auth__error">{errors['input-login-password']}</p>
          </div>
        </div>
        <div className="auth__container">
          <p className="auth__server-error auth__server-error_type_login">{serverError}</p>
          <button disabled={inputsBlocked || !isValid} type="submit" className="auth__button zero-button">Войти</button>
          <div className="auth__flex-wrapper">
            <p className="auth__caption">Ещё не зарегистрированы?</p>
            <Link to='/signup' className="auth__link zero-link">Регистрация</Link>
          </div>
        </div>
      </form>
    </div>
  </section>
  )
};

export default Login;
