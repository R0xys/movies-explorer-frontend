import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <div className='container'>
        <h2 className="techs__title landing-title">Технологии</h2>
        <h3 className='techs__content-title'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__container'>
          <p className='techs__card'>HTML</p>
          <p className='techs__card'>CSS</p>
          <p className='techs__card'>JS</p>
          <p className='techs__card'>React</p>
          <p className='techs__card'>Git</p>
          <p className='techs__card'>Express.js</p>
          <p className='techs__card'>mongoDB</p>
        </div>
      </div>
    </section>
  )
};

export default Techs;
