import promoImage from '../../images/promo-image.png';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className='container'>
        <div className='promo__flex-wrapper'>
          <div className="promo__wrapper">
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <NavTab />
          </div>
          <img src={promoImage} alt='Планета из букв' className='promo__image'/>
        </div>
      </div>
    </section>
  )
};

export default Promo;
