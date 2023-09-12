import './Profile.css'
import React from "react";
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import { useNavigate } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const {values, setValues, handleChange, isValid, setIsValid, setErrors, errors} = useFormAndValidation();
  const [isEditSuccess, setIsEditSuccess] = React.useState(false);
  const [inputsBlocked, setInputsBlocked] = React.useState(true);
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  console.log(inputsBlocked);
  console.log("asda", !isValid);
  const handleEditButtonClick = () => {
    setInputsBlocked(false);
    setIsEditing(true);
    setIsValid(false);
  }

  const handleSubmit = (evt) => {
    setInputsBlocked(true)
    evt.preventDefault();
    mainApi.editProfile({
      email: values['edit-email'],
      name: values['edit-name'],
    })
      .then((res) => {
        props.setCurrentUser(res);
        setIsEditSuccess(true);
        setTimeout(() => {
          setIsEditSuccess(false);
        }, 10000);
        setIsEditing(false);
      })
      .catch((err) => {
        setInputsBlocked(false);
        console.log(err);
      })
  }

  const handleExitButtonClick = () => {
    mainApi.signout()
      .then((res) => {
        props.handleLogOut();
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    setValues({['edit-name']: currentUser.name, ['edit-email']: currentUser.email})
  }, [currentUser])

  React.useEffect(() => {
    if (!/^[a-zа-я\s-]+$/gi.test(values['edit-name'])) {
      setIsValid(false);
      setErrors({...errors, ['edit-name']: 'Поле должно содержать только латиницу, кириллицу, пробел или дефис'});
    }
    if (values['edit-name'] === currentUser.name  && isEditing) {
      setIsValid(false);
      setErrors({...errors, ['edit-name']: 'Придумайте новое имя'});
    }
  }, [values['edit-name']])

  React.useEffect(() => {
    setErrors({...errors, ['edit-email']: ''});
    if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(values['edit-email']) && values['edit-email'] !== undefined) {
      setIsValid(false);
      setErrors({...errors, ['edit-email']: 'Некорректно введен Emaill'});
    }
    if (values['edit-email'] === currentUser.email && isEditing) {
      setIsValid(false);
      setErrors({...errors, ['edit-email']: 'Придумайте новый Email'});
    }
  }, [values['edit-email']])

  return (
    <main className="profile">
      <div className='profile__wrapper'>
        <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
        <form onSubmit={handleSubmit} noValidate className="profile__form" action="#" method="post" name='edit-form' id='edit-form'>
          <div className="profile__field">
            <span className="profile__field-property">Имя</span>
            <input required autoComplete="off" placeholder='Ваше имя' type='text' onChange={handleChange} className="profile__field-value" disabled={inputsBlocked} value={values['edit-name'] || ''} name='edit-name' />
          </div>
          <p className='profile__error'>{errors['edit-name']}</p>
          <div className="profile__field">
            <span className="profile__field-property">E-mail</span>
            <input required autoComplete="off" placeholder='Ваш e-mail' type='email' onChange={handleChange} className="profile__field-value" disabled={inputsBlocked} value={values['edit-email'] || ''} name='edit-email' />
          </div>
          <p className='profile__error'>{errors['edit-email']}</p>
          <div className="profile__flex-wrapper">
            {isEditSuccess && <p className='profile__success'>Данные профиля успешно изменены</p>}
            {!isEditing && 
            <>
              <button type='button' onClick={handleEditButtonClick} className="profile__edit-link zero-button">Редактировать</button>
              <button type="button" onClick={handleExitButtonClick} className="profile__exit-link zero-button">Выйти из аккаунта</button>
            </>
            }
            {isEditing && <button type="submit" disabled={inputsBlocked || !isValid} className="profile__save-button zero-button">Сохранить</button>}
          </div>
        </form>
      </div>
    </main>
  )
};

export default Profile;
