import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <main className="not-found">
      <div className='not-found__wrapper'>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__caption">Страница не найдена</p>
      </div>
      <button onClick={handleClick} className='not-found__back-link zero-button'>Назад</button>
    </main>
  )
}

export default NotFound;
