import { NavLink, Link } from "react-router-dom";
import './Navigation.css'
import React from "react";

function Navigation(props) {
  const handleClick = () => {
    props.handleOpenBurgerMenu();
  }
  return (
    <>
      {!props.isLoggedIn && 
        (
          <nav className='header__auth-links'>
            <Link className='header__link-auth zero-link'  to='/signup'>Регистрация</Link>
            <Link className='header__link-auth header__link-auth_type_signin zero-link' to='/signin'>Войти</Link>
          </nav>
        )
      }
      {props.isLoggedIn && 
        (
          <>
            <nav className='header__links'>
              <NavLink className={({ isActive }) => isActive ? 'header__link_active header__link zero-link' : 'header__link zero-link'} to='/movies'>Фильмы</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'header__link_active header__link zero-link' : 'header__link zero-link'} to='/saved-movies'>Сохранённые фильмы</NavLink>
              <NavLink className={({ isActive }) => isActive ? `${props.mainPage ? 'header__link_type_account-on-main' : ''} header__link_active header__link zero-link header__link_type_account` : `${props.mainPage ? 'header__link_type_account-on-main' : ''} zero-link header__link header__link_type_account`} to='/profile'>Аккаунт</NavLink>
            </nav>
            <button className="header__burger-menu-button zero-button" onClick={handleClick}></button>
          </>
        )
      }    
    </>
  )
};

export default Navigation;
