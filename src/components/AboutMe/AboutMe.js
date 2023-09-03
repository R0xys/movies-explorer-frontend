import './AboutMe.css';
import photo from '../../images/me.jpeg'

function AboutMe() {
  return (
    <section className="about-me">
      <div className="container">
        <h2 className="about-me__title landing-title">Студент</h2>
        <div className="about-me__flex-wrapper">
          <div className="about-me__wrapper">
            <h3 className="about-me__name">Максим</h3>
            <p className="about-me__caption">Фронтенд-разработчик, 17 лет</p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="https://github.com/R0xys" target='_blank' rel='noreferrer' className="about-me__github zero-link">Github</a>
          </div>
          <div className='about-me__image-container' ><img src={photo} className='about-me__image' alt='Максим' /></div>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
