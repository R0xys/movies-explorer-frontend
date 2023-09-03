import { Link } from 'react-router-dom';
import './Login.css'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login(props) {
  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  }

  return (
    <section className="auth">
    <div className="auth__wrapper">
      <Link to='/'><Logo /></Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form onSubmit={handleSubmit} className="auth__form" action="#" method="post" name='register-form' id='register-form'>
        <div className="auth__field">
          <label htmlFor="login-email" className="auth__input-placeholder">E-mail</label>
          <input className={`${errors['input-login-email'] ? 'auth__input_error' : ''} auth__input`} value={values['input-login-email'] === undefined ? '' : values['input-login-email']} onChange={handleChange} required autoComplete="off" type="email" id="login-email" name='input-login-email' />
          <p className="auth__error">{errors['input-login-email']}</p>
        </div>
        <div className="auth__field">
          <label htmlFor="login-password" className="auth__input-placeholder">Пароль</label>
          <input className={`${errors['input-login-password'] ? 'auth__input_error' : ''} auth__input`} value={values['input-login-password'] === undefined ? '' : values['input-login-password']} onChange={handleChange} required minLength={6} maxLength={30} type="password" name='input-login-password' autoComplete="off" id="login-password" />
          <p className="auth__error">{errors['input-login-password']}</p>
        </div>
        <button disabled={!isValid} type="submit" className="auth__button auth__button_type_signin zero-button">Войти</button>
        <div className="auth__flex-wrapper">
          <p className="auth__caption">Ещё не зарегистрированы?</p>
          <Link to='/signup' className="auth__link zero-link">Регистрация</Link>
        </div>
      </form>
    </div>
  </section>
  )
};

export default Login;
