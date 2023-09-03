import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className={`${props.mainPage ? 'header_type_main' : ''} header`}>
      <div className='header__flex-wrapper container'>
        <Link to='/'><Logo /></Link>
        <Navigation isLoggedIn={props.isLoggedIn} mainPage={props.mainPage} handleOpenBurgerMenu={props.handleOpenBurgerMenu} />
      </div>
    </header>
  )
};

export default Header;
