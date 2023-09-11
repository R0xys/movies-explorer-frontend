import { NavLink } from 'react-router-dom';
import './BurgerMenu.css'

function BurgerMenu(props) {
  const handleClose = () => {
    props.handleCloseBurgerMenu()
  }
  return (
    <div className={`${props.isBurgerMenuOpen ? 'burger-menu_open' : ''} burger-menu`}>
      <div className={`${props.isBurgerMenuOpen ? 'burger-menu__container_open' : ''} burger-menu__container`}>
        <button onClick={handleClose} className='burger-menu__close-button zero-button'></button>
        <nav className='burger-menu__links'>
          <div className='burger-menu__wrapper'>
            <NavLink onClick={handleClose} to='/' className={({ isActive }) => isActive ? 'burger-menu__link_active burger-menu__link zero-link' : 'burger-menu__link zero-link'}>Главная</NavLink>
            <NavLink onClick={handleClose} to='/movies' className={({ isActive }) => isActive ? 'burger-menu__link_active burger-menu__link zero-link' : 'burger-menu__link zero-link'}>Фильмы</NavLink>
            <NavLink onClick={handleClose} to='/saved-movies' className={({ isActive }) => isActive ? 'burger-menu__link_active burger-menu__link zero-link' : 'burger-menu__link zero-link'}>Сохранённые фильмы</NavLink>
          </div>
          <NavLink onClick={handleClose} to='/profile' className={({ isActive }) => isActive ? 'burger-menu__link_active burger-menu__link burger-menu__link_type_account zero-link' : 'burger-menu__link_type_account burger-menu__link zero-link'}>Аккаунт</NavLink>
        </nav>
      </div>
    </div>
  )
};

export default BurgerMenu;
