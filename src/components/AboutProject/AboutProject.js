import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project" id='about-project'>
      <div className="container">
        <h2 className="about-project__title landing-title">О проекте</h2>
        <div className="about-project__grid-container">
          <div className='about-project-wrapper'>
            <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project-wrapper'>
            <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__line-grid-container">
          <span className="about-project__first-week">1 неделя</span>
          <span className="about-project__other-weeks">4 недели</span>
          <span className="about-project__line-caption">Back-end</span>
          <span className="about-project__line-caption">Front-end</span>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;
