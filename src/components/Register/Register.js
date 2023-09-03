import { Link } from "react-router-dom";
import './Register.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Register(props) {
  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  }

  return (
    <section className="auth">
      <div className="auth__wrapper">
        <Link className="auth__logo" to='/'><Logo /></Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form" noValidate onSubmit={handleSubmit} action="#" method="post" name='register-form' id='register-form'>
          <div className="auth__field">
            <label htmlFor="reg-name" className="auth__input-placeholder">Имя</label>
            <input required autoComplete="off" minLength={2} maxLength={30} value={values['input-reg-name'] === undefined ? '' : values['input-reg-name']} name='input-reg-name' onChange={handleChange} type="text" id="reg-name" className={`${errors['input-reg-name'] ? 'auth__input_error' : ''} auth__input`} />
            <p className="auth__error">{errors['input-reg-name']}</p>
          </div>
          <div className="auth__field">
            <label htmlFor="reg-email" className="auth__input-placeholder">E-mail</label>
            <input required autoComplete="off" value={values['input-reg-email'] === undefined ? '' : values['input-reg-email']} onChange={handleChange} name="input-reg-email" type="email" id="reg-email" className={`${errors['input-reg-email'] ? 'auth__input_error' : ''} auth__input`}></input>
            <p className="auth__error">{errors['input-reg-email']}</p>
          </div>
          <div className="auth__field">
            <label htmlFor="reg-password" className="auth__input-placeholder">Пароль</label>
            <input required type="password" minLength={6} maxLength={30} value={values['input-reg-password'] === undefined ? '' : values['input-reg-password']} onChange={handleChange} name="input-reg-password" autoComplete="off" id="reg-password" className={`${errors['input-reg-password'] ? 'auth__input_error' : ''} auth__input`} />
            <p className="auth__error">{errors['input-reg-password']}</p>
          </div>
          <button type="submit" disabled={!isValid} className="auth__button zero-button">Зарегистрироваться</button>
          <div className="auth__flex-wrapper">
            <p className="auth__caption">Уже зарегистрированы?</p>
            <Link to='/signin' className="auth__link zero-link">Войти</Link>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Register;
