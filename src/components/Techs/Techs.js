import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <div className='container'>
        <h2 className="techs__title landing-title">Технологии</h2>
        <h3 className='techs__content-title'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__container'>
          <span className='techs__card'>HTML</span>
          <span className='techs__card'>CSS</span>
          <span className='techs__card'>JS</span>
          <span className='techs__card'>React</span>
          <span className='techs__card'>Git</span>
          <span className='techs__card'>Express.js</span>
          <span className='techs__card'>mongoDB</span>
        </div>
      </div>
    </section>
  )
};

export default Techs;
