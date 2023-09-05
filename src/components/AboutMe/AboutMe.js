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
            <p className="about-me__text">Привет 👋, сейчас я расскажу немного о себе. Я родился в Ханты-Мансийске, сейчас живу в Санкт-Петербурге. На данный момент учусь в РТК. Люблю слушать музыку , и играть на гитаре 🎸, ну и еще много всего 👀. Еще с дества мне нравилось копаться в компьютарах, поэтому я решил связать свою жизнь с веб-разработкой. Теперь я занимаюсь своим любимым делом и делаю этот мир лучше 🌎. Пока проходил курс по веб-разработке, нашел свою первую подработку. В дальнейшем планирую уйти во фриланс. Ну и как говорил один классик: "Бесконечность не предел!" 🚀🚀🚀.</p>
            <a href="https://github.com/R0xys" target='_blank' rel='noreferrer' className="about-me__github zero-link">Github</a>
          </div>
          <div className='about-me__image-container' ><img src={photo} className='about-me__image' alt='Максим' /></div>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
