import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h3 className="portfolio__title">Портфолио</h3>
        <nav className="portfolio__links">
          <a href="https://github.com/R0xys/how-to-learn" target='_blank' rel='noreferrer' className="portfolio__link zero-link">Статичный сайт</a>
          <a href="https://github.com/R0xys/russian-travel" target='_blank' rel='noreferrer' className="portfolio__link zero-link">Адаптивный сайт</a>
          <a href="https://github.com/R0xys/react-mesto-api-full-gha" target='_blank' rel='noreferrer' className="portfolio__link zero-link">Одностраничное приложение</a>
        </nav>
      </div>
    </section>
  )
};

export default Portfolio;