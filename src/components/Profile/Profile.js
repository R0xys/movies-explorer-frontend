import './Profile.css'
import React from "react";
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const {values, setValues, handleChange} = useFormAndValidation();
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    setIsEditing(true);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsEditing(false);
  }

  const handleExitButtonClick = () => {
    props.handleLogOut();
    navigate('/')
  }

  React.useEffect(() => {
    setValues({['edit-name']: 'Виталий', ['edit-email']: 'pochta@yandex.ru'})
  }, [])

  return (
    <main className="profile">
      <div className='profile__wrapper'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form onSubmit={handleSubmit} noValidate className="profile__form" action="#" method="post" name='edit-form' id='edit-form'>
          <div className="profile__field">
            <span className="profile__field-property">Имя</span>
            <input required autoComplete="off" placeholder='Ваше имя' type='text' onChange={handleChange} className="profile__field-value" disabled={!isEditing} value={values['edit-name'] || ''} name='edit-name' />
          </div>
          <div className="profile__field">
            <span className="profile__field-property">E-mail</span>
            <input required autoComplete="off" placeholder='Ваш e-mail' type='email' onChange={handleChange} className="profile__field-value" disabled={!isEditing} value={values['edit-email'] || ''} name='edit-email' />
          </div>
          <div className="profile__flex-wrapper">
            {!isEditing && 
            <>
              <button type='button' onClick={handleEditButtonClick} className="profile__edit-link zero-button">Редактировать</button>
              <button type="button" onClick={handleExitButtonClick} className="profile__exit-link zero-button">Выйти из аккаунта</button>
            </>
            }
            {isEditing && <button type="submit" className="profile__save-button zero-button">Сохранить</button>}
          </div>
        </form>
      </div>
    </main>
  )
};

export default Profile;
